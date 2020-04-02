import Vue from 'vue'
import App from './App'

import store from './store'
import cuCustom from 'colorui/components/cu-custom.vue'

Vue.prototype.websiteUrl = 'http://127.0.0.1:9527';  
Vue.prototype.now = Date.now || function () {  
    return new Date().getTime();  
};  

Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
