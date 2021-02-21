import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import $RequestHttp from './common/js/request'
import '@/components/index.js'
import "./common/style/common.css";
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$http = $RequestHttp;
Vue.prototype.$store = store;

const app = new Vue({
    ...App
})
app.$mount()
