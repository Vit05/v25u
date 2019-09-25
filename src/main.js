import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import * as fb from 'firebase/app'

import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    var firebaseConfig = {
      apiKey: "AIzaSyAjsgqqkzjBVbqLrrr67Wnlxvh7evWInH0",
      authDomain: "v25u-2893a.firebaseapp.com",
      databaseURL: "https://v25u-2893a.firebaseio.com",
      projectId: "v25u-2893a",
      storageBucket: "v25u-2893a.appspot.com",
      messagingSenderId: "426949654227",
      appId: "1:426949654227:web:2cc80c0b76a3aee8a84626"
    };
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.auth().onAuthStateChanged(user=>{
        if (user){
            this.$store.dispatch('autoLoginUser', user)
        }
    });
  }
}).$mount('#app')
