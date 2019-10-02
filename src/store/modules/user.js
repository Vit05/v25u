import * as fb from 'firebase/app'

class User {
    constructor(id, email) {
        this.id = id
        this.email = email
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        async registerUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true)
            try {

                const user = await fb.auth().createUserWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid, email))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },
        async loginUser({commit}, {email, password}) {
            commit('clearError');
            commit('setLoading', true)
            try {

                const user = await fb.auth().signInWithEmailAndPassword(email, password)
                commit('setUser', new User(user.uid, email))
                commit('setLoading', false)
            } catch (error) {
                commit('setLoading', false)
                commit('setError', error.message)
                throw error
            }
        },

        autoLoginUser({commit}, payload){
            commit('setUser', new User(payload.uid, payload.email))
        },
        logoutUser({commit}){
            fb.auth().signOut()
            commit('setUser', null)
        }
    },
    getters: {

        user(state) {
            return state.user
        },
        isUserLoggedIn(state){
            return state.user !== null
        }
    }
}