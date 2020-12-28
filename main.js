import Vue from 'vue'
import App from './App'
import store from './store'
import Vconsole from './utils/vconsole.min.js' //引入屏幕日志框架
import request from './api/request.js'
const vConsole = new Vconsole()
Vue.use(vConsole) //是否启用页面日志 发布时注释


Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$request = request;
App.mpType = 'app'
import 'api/commonFilter.js'
const app = new Vue({
	store,
	...App
})
app.$mount()
