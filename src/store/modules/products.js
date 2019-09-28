import * as fb from 'firebase/app'
import "firebase/database";

class Product {
    constructor(title, vendor, color, material, price, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title
        this.vendor = vendor
        this.color = color
        this.material = material
        this.price = price
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}


export default {
    state: {
        products: []
    },
    mutations: {
        loadProducts(state, payload) {
            state.products = payload;
        },
        createProduct(state, payload) {
            state.products.push(payload)
        },
    },
    actions: {

        async fetchProducts({commit},) {
            commit('clearError')
            commit('setLoading', true)
            const result = []
            try {
                const productsVal = await fb.database().ref('products').once('value')
                const products = productsVal.val()

                // console.log(products);
                Object.keys(products).forEach(key=>{
                    const product = products[key]
                    result.push(
                        new Product(
                            product.title,
                            product.vendor,
                            product.color,
                            product.material,
                            product.price,
                            product.description,
                            product.ownerId,
                            product.imageSrc,
                            product.promo,
                            key

                        )
                    )
                })

                commit('loadProducts', result)
                commit('setLoading', false)
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', true)
                throw error
            }
        },
        async createProduct({commit, getters}, payload) {

            commit('clearError')
            commit('setLoading', true)
            try {
                // console.log(getters.user.id);
                const newProduct = new Product(
                    payload.title,
                    payload.vendor,
                    payload.color,
                    payload.material,
                    payload.price,
                    payload.description,
                    getters.user.id,
                    payload.imageSrc,
                    payload.promo,
                )


                const product = await fb.database().ref('products').push(newProduct)

                commit('setLoading', false);
                commit('createProduct', {
                    ...newProduct,

                    id: product.key,
                })

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        products(state) {
            return state.products
        },
        productsPromo(state) {
            return state.products.filter(product => product.promo)
        },
        productsOwn(state) {
            return state.products
        },
        productById(state) {
            return productId => {
                return state.products.find(product => product.id === productId)
            };
        }
    }
}