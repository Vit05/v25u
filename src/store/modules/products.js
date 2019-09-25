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
        products: [
            {
                id: '1',
                title: 'Lenovo Legion Y520',
                vendor: 'Lenovo',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD íåò/NVIDIA GeForce GTX 1050, 4096 ÌÁ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 760,
                promo: false,
                imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg'
            },

            {
                id: '2',
                title: 'Asus FX503VD',
                vendor: 'Asus',
                color: 'white',
                material: 'plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD íåò/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 984,
                promo: true,
                imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg'
            },

            {
                id: '3',
                title: 'ASUS TUF Gaming FX504GD',
                vendor: 'Asus',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD íåò/NVIDIA GeForce GTX 1050, 4096 ÌÁ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 1220,
                promo: true,
                imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg'
            },

            {
                id: '4',
                title: 'HP Omen 17',
                vendor: 'Hp',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1600,
                promo: false,
                imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg'
            },

            {
                id: '5',
                title: 'Acer Swift 5 SF514',
                vendor: 'Acer',
                color: 'gold',
                material: 'metal',
                description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD íåò/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1100,
                promo: true,
                imageSrc: 'https://image.ibb.co/mrOsgo/Acer_Swift_5.jpg'
            },

            {
                id: '6',
                title: 'Apple MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD íåò/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                imageSrc: 'https://image.ibb.co/fxDsgo/Apple_macbook.jpg'
            }
        ]
    },
    mutations: {
        createProduct(state, payload) {
            state.products.push(payload)
        },
    },
    actions: {
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
        //"kjA6Yw2ZwoatxhFVDu47pSoUkow1"
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