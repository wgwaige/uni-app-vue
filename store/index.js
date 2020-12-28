import Vue from 'vue'
import Vuex from 'vuex'
const utils = require("../utils/index.js");


Vue.use(Vuex)

const store = new Vuex.Store({
	state: { //全局变量定义处
		//是否登录
		storeHasLogin: false,
		//用户登录手机号码
		storeMobileNo: "",
		//记录隐私协议下拉触底事件
		storeHasReachAgreement: false,
		//登录注册返回的用户信息类
		storeUserInfoOnj: {},
		quotaDataObj:{},//额度数据
		productMap:{},//贷款数据
		planData:[],//计划数据
		bindCardOvertime:"N",//绑卡超时标记
	},
	mutations: { //全局方法定义处 
		//登录缓存数据
		stateLogin(state, provider) {
			state.storeHasLogin = true;
			state.storeUserInfoOnj = provider;
			//存储手势密码标志位
			utils.setStorage("gestureFlag", provider.gestureFlag);
			//存储用户手机号码
			state.storeMobileNo = provider.mobileNo
			utils.setStorage("mobileNo", provider.mobileNo);
			//console.log("store login", provider);
		},
		updateLogin(state, provider){//修改登录缓存数据
			state.storeUserInfoOnj = provider
		},
		//初始化登录手机号码
		stateInitMobileNo(state) {
			let mobileNo = utils.getStorage("mobileNo");
			if (mobileNo)
				state.storeMobileNo = mobileNo
		},
		//记录隐私协议下拉触底事件
		stateSetReachAgreement(state) {
			state.storeHasReachAgreement = true;
		},
		stateQuotaData(state,obj){//敏钱串额度数据
			state.quotaDataObj = obj
		},
		stateProductMap(state,obj){//敏钱串产品数据
			state.productMap = obj
		},
		statePlanData(state,obj){//贷款详情中还款计划数据
			state.planData = obj
		},
		reLogin(state){
			state.storeHasLogin = false;
			state.storeMobileNo = "";
			state.storeHasReachAgreement = false;
			state.storeUserInfoOnj = {};
			state.quotaDataObj = {};
			state.productMap = {};
			state.planData = {};
		},
		stateBindCardOvertime(state,obj){//绑卡超时标记
			state.bindCardOvertime = obj
		},
	},
	actions: { //暴露的操作修改方法

	},
	getters: {
		formatMobileNo(state) {
			let reg = /^(\d{3})\d{4}(\d{4})$/;
			let mobileNo = state.storeMobileNo
			return mobileNo.replace(reg, "$1****$2");
		},
		getLogin(state){
			return state.storeUserInfoOnj
		},
		getQuotaData(state){//获取敏钱串额度数据
			return state.quotaDataObj
		},
		getProductMap(state){//获取敏钱串产品数据
			return state.productMap
		},
		getPlanData(state){//贷款详情中还款计划数据
			return state.planData
		},
		getBindCardOvertime(state){//绑卡超时处理
			return state.bindCardOvertime
		}
	}
})

export default store
