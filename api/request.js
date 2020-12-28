import '../lib/bin/jsencrypt.js'
const utils = require("../utils/index.js");
// 测试环境
const baseUrl = 'http://localhost/api/'
export default {
	// post加密rsa
	postForeXin(url, params) {
		console.log(JSON.stringify(url, params))
		againParams = params
		againUrl = url
		var publicKey =
			"-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDG1nfFAUYD3siHYXhw2NuOq/ZnVG9cMLM4vt+4hk3F0oHsO0BxvVq75a4HtvEnyzz8IvCCa/pz44XDS+eruESVuZyU1VmNCyQFH93QR7gjN8aX2FaEc1CSUwk6v+maoGMGBWsUHw7A3Carv4tSM20oSlCKeIxw67yBkrNQOT24QIDAQAB-----END PUBLIC KEY-----";
		let encrypt = new JSEncrypt()
		encrypt.setPublicKey(publicKey) // 公钥
		let getrsadata = ""
		if (params != "" && params != undefined && params != null) {
			getrsadata = this.arrayBufferToBase64(encrypt.encryptLong2(window.btoa(encodeURIComponent(JSON.stringify(params))))); //将加密的数据转码为base64			
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: baseUrl + url,
				method: "POST",
				data: getrsadata,
				success: (res) => {
					//解密
					let privateKey =
						"-----BEGIN PRIVATE KEY-----MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMMbWd8UBRgPeyIdheHDY246r9mdUb1wwszi+37iGTcXSgew7QHG9Wrvlrge28SfLPPwi8IJr+nPjhcNL56u4RJW5nJTVWY0LJAUf3dBHuCM3xpfYVoRzUJJTCTq/6ZqgYwYFaxQfDsDcJqu /i1IzbShKUIp4jHDrvIGSs1A5PbhAgMBAAECgYEAg+5Oy0YiW668OMl16r/Q0IzmtGRpDYzebOVf4uDI5DPfX2wIGBeNhI4WgNJ9EWwBXcLe/orGZXhwQK4t8UOX9TxcWt2vKSesBudDSXWzdIR2K2i79uc8nlFZXJr9qzYk+/hFSnczZ1s8Gfy0f2+kGKO5iBlS664l36/1wgtxSHECQQDm7x55yeigm1KHK3HkWrvKH1C+9h2jy9jcKwZ4pFfKBDHffaQF+e3iA6PAbsyMapPcYHUz0GXSsHPvOu1SymYXAkEA2Ei2zekUZq/pTxDeVE3HIe7+2Q6mN5eBJUTmaSWj9hlhWpOgVLAzHsWAsJiwaEIVbJ6V54SV150n+8+OllkdxwJAQI0QeLyOkO45uFzVfh46pbnxKR/Ekzd0y74fFfPiMi7P/gexpJYC/41C5ZRTCuDzqcMwn6YeADGghntzQRQgSwJACi5aFJVNNYxAUk17+cHzhsBmVLdg0asbFDMLGZYBAtus/oOGf5YPwfoQFcAKRc4ejg9lBRHzr8OhFzRtBNzLDwJBAM46k9KA03wTziajd2xLOa6wUwd584+B9huCjxxpxlUCljZSSmTaCjAYE1K0WDIN+sH/VsUnffcxw04V2CaPfkQ=-----END PRIVATE KEY-----";
					let encrypt = new JSEncrypt()
					encrypt.setPrivateKey(privateKey) // 私钥
					let decrsadata = encrypt.decryptLong2(this.base64ToArrayBuffer(res.data)) // 先转为byte数组在进行解码
					let s = decodeURIComponent(decrsadata)
					console.log('------返回数据------：' + s)
					let response = JSON.parse(s);
					if (response.status == "1") {
						this.postForeXin(againUrl, againParams).then(res22 => {
							resolve(res22);
						}).catch(err22 => {
							reject(err22)
						})
					} else if (this.filterResponse(response)) {
						resolve(s);
					}
				},
				fail: (err) => {
					reject(err)
				}
			})
		});
	},
	filterResponse(response) {
		var result = false;
		if (response.status == 1001 || response.status == 1002 || response.status == 1003) {
			uni.hideLoading();
		} else {
			result = true;
		}
		return result;
	},
	arrayBufferToBase64(buffer) {
		var binary = '';
		var bytes = new Uint8Array(buffer);
		var len = bytes.byteLength;
		for (var i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return window.btoa(binary);
	},
	base64ToArrayBuffer(base64) {
		var binary_string = window.atob(base64);

		var len = binary_string.length;

		var bytes = new Uint8Array(len);

		for (var i = 0; i < len; i++) {

			bytes[i] = binary_string.charCodeAt(i);

		}
		return bytes;
	}
}
