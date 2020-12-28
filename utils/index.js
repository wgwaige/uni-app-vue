import store from '../store/index.js'

function formatNumber(n) {
	const str = n.toString()
	return str[1] ? str : `0${str}`
}

export function formatTimeStr(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
	const day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate())

	const hour = date.getHours() > 9 ? date.getHours() : '0' + (date.getHours())
	const minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + (date.getMinutes())
	const second = date.getSeconds() > 9 ? date.getSeconds() : '0' + (date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('.')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${t1} ${t2}`
}

export function formatTime(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
	const day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate())

	const hour = date.getHours() > 9 ? date.getHours() : '0' + (date.getHours())
	const minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + (date.getMinutes())
	const second = date.getSeconds() > 9 ? date.getSeconds() : '0' + (date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('/')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${year}${month}${day}${hour}${minute}${second}`
}

export function formatTimeYYMMDDHHMM(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
	const day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate())

	const hour = date.getHours() > 9 ? date.getHours() : '0' + (date.getHours())
	const minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + (date.getMinutes())
	const second = date.getSeconds() > 9 ? date.getSeconds() : '0' + (date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('/')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${year}${month}${day}${hour}${minute}`
}
export function formatTimeYYMMDDHH(date) {
	const year = date.getFullYear()
	const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
	const day = date.getDate() > 9 ? date.getDate() : '0' + (date.getDate())

	const hour = date.getHours() > 9 ? date.getHours() : '0' + (date.getHours())
	const minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + (date.getMinutes())
	const second = date.getSeconds() > 9 ? date.getSeconds() : '0' + (date.getSeconds())

	const t1 = [year, month, day].map(formatNumber).join('/')
	const t2 = [hour, minute, second].map(formatNumber).join(':')

	return `${year}${month}${day}${hour}`
}
//显示加载框
export function showLoading(msg) {
	var message = "";
	if (msg)
		message = msg;
	if (uni.showLoading) {
		// 基础库 1.1.0 微信6.5.6版本开始支持，低版本需做兼容处理
		uni.showLoading({
			title: message,
			mask: true
		});
	} else {
		// 低版本采用Toast兼容处理并将时间设为20秒以免自动消失
		uni.showToast({
			title: message,
			icon: 'loading',
			mask: true,
			duration: 20000
		});
	}
}

export function strToUrlencode(str) {
	str = (str + '').toString();
	return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').
	replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
}

//隐藏加载框
export function hideLoading() {
	if (uni.hideLoading) {
		// 基础库 1.1.0 微信6.5.6版本开始支持，低版本需做兼容处理
		wx.hideLoading();
	} else {
		uni.hideToast();
	}
}
//防止重复点击 截流方式
export function buttonDoubleClick(fn, gapTime) {
	if (gapTime == null || gapTime == undefined) {
		gapTime = 1000
	}
	let _lastTime = null
	// 返回新的函数
	return function() {
		let _nowTime = +new Date()
		if (_nowTime - _lastTime > gapTime || !_lastTime) {
			fn.apply(this, arguments) //将this和参数传给原函数
			_lastTime = _nowTime
		}
	}
}
//本地存储数据
export function setStorage(key, value) {
	let resulet = false;
	uni.setStorage({
		key: key,
		data: value,
		success() {
			//console.log("存储成功", key + "===" + value);
			resulet = true;
		}
	})
	return resulet;
}
//本地取出数据
export function getStorage(key) {
	let value = "";
	uni.getStorage({
		key: key,
		success(res) {
			//console.log("读取成功", key + "===" + res.data);
			value = res.data
		}
	})
	return value;
}
export function removeStorage(key) {
	uni.removeStorage({
		key: key,
		success(res) {
			console.log("removeStorage suss", res);
		},
		fail(err) {
			console.log("removeStorage err", err);
		}
	})
}

export function showToast(text) {
	uni.showToast({
		title: text,
		duration: 3000,
		icon: "none"
	})
}

export function checkLogin() {
	var islogin = store.state.storeHasLogin;
	if (!islogin) {
		uni.navigateTo({
			url: '/pages/login/login',
		});
	}

	return islogin
}
//将加密的数据转码为base64
export function arrayBufferToBase64(buffer) {
	var binary = '';
	var bytes = new Uint8Array(buffer);
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}
//password要解密的数据 先转为byte数组在进行解码
export function base64ToArrayBuffer(base64) {
	var binary_string = window.atob(base64);
	var len = binary_string.length;
	var bytes = new Uint8Array(len);
	for (var i = 0; i < len; i++) {
		bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes;
}

/*  获取url字符串参数*/
export function getRequestParameters(locationhref) {
        let href = locationhref || "";
        let theRequest = new Object();
        let str = href.split("?")[1];
        if (str != undefined) {
            let strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
export function verifyPhone(e){
	var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
	return reg.test(e)
}

export default {
	formatNumber,
	formatTime,
	showLoading: showLoading,
	hideLoading: hideLoading,
	buttonDoubleClick,
	setStorage,
	getStorage,
	showToast,
	checkLogin,
	removeStorage,
	strToUrlencode,
	formatTimeYYMMDDHH,
	arrayBufferToBase64,
	base64ToArrayBuffer,
  getRequestParameters,
  verifyPhone
}
