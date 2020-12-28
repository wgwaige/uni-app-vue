import {
	Rsa,
	Rsas
} from './RSA_config.js' //分别是公钥和私钥
import {
	RSA
} from './Rsa.js' //指的是RSA.js中的加密的方法
import {
	Jsrsasign
} from './jsrsasign-all-min.js' //
import './jsencrypt.js'
var ext = {
	/*
	  加密
	*/
	en: function(deStr) {
		// var encrypt_rsa = new Jsrsasign.RSAKey();
		// encrypt_rsa = Jsrsasign.KEYUTIL.getKey(Rsa.may_key);
		// var encStr = encrypt_rsa.encrypt(deStr)
		// encStr = Jsrsasign.hex2b64(encStr);

		// var pub = KEYUTIL.getKey(pk);
		//    var enc = KJUR.crypto.Cipher.encrypt(src,pub);

		let encrypt = new JSEncrypt()
		encrypt.setPublicKey(Rsa.may_key) // 公钥
		let encStr = this.arrayBufferToBase64(encrypt.encryptLong2(JSON.stringify(deStr))); //将加密的数据转码为base64
		console.log("加密参数--------------", deStr);
		console.log("加密--------------", encStr);
		return encStr
	},

	/*
	  解密
	*/
	de: function(encStr) {
		// var decrypt_rsa = new Jsrsasign.RSAKey();
		// decrypt_rsa = Jsrsasign.KEYUTIL.getKey(Rsas.may_key);
		// encStr = Jsrsasign.b64tohex(encStr)
		// var decStr = decrypt_rsa.decrypt(encStr)

		let encrypt = new JSEncrypt()
		encrypt.setPrivateKey(Rsas.may_key) // 私钥
		var decStr = encrypt.decryptLong2(this.base64ToArrayBuffer(encStr)) // password要解密的数据 先转为byte数组在进行解码
		console.log("解密后参数--------------", decStr);
		return decStr
	},

	// 加签(用自己的私钥对signData进行签名)
	signature(signData) {
		// let  key = KEYUTIL.getKey(Rsas.may_key);
		// console.log(key);
		//      // 私钥加签
		//      let sig = new RSA.KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": key});
		//      // let rsa = new KJUR()
		//      // rsa = KEYUTIL.getKey(privateKey)
		//      var hashAlg = 'sha1'; // 设置sha1
		//      var sign = sig.signString(signData, hashAlg); // 加签
		//      sign = hex2b64(sign);
		//      // console.log(sign)


		//   // 方式1: 先建立 key 对象, 构建 signature 实例, 传入 key 初始化 -> 签名
		//    let key = Jsrsasign.KEYUTIL.getKey(Rsas.may_key);
		//    console.log(key);
		//    // 创建 Signature 对象
		//    let signature=new Jsrsasign.KJUR.crypto.Signature({"alg": "SHA256withRSA"});
		//    // 传入key实例, 初始化signature实例
		//    signature.init(key);
		//    // // 传入待签明文
		//    // signature.updateString(signData);
		//    // // 签名, 得到16进制字符结果
		//    // let a = signature.sign();
		//    // let sign = RSA.hex2b64(a);

		// signature.updateString( Jsrsasign.hex2b64(signData));
		// let sign = signature.sign();
		//   sign=encodeURIComponent(sign)



		// 创建RSAKey对象
		var rsa = new Jsrsasign.RSAKey();
		//因为后端提供的是pck#8的密钥对，所以这里使用 KEYUTIL.getKey来解析密钥
		// 将密钥转码
		rsa = Jsrsasign.KEYUTIL.getKey(Rsas.may_key);
		// 创建Signature对象，设置签名编码算法
		var sig = new Jsrsasign.KJUR.crypto.Signature({
			// "alg": "SHA256withRSA"
			"alg": "RIPEMD160withRSA",
			"prov": "cryptojs/jsrsa",
		});
		// 初始化
		sig.init(rsa)
		// 传入待加密字符串
		sig.updateString(Jsrsasign.hex2b64(signData));
		// 生成密文
		var sign = Jsrsasign.hex2b64(sig.sign());
		// 对加密后内容进行URI编码
		// sign = encodeURIComponent(sign);
		//把参数与密文拼接好，返回
		console.log("加签报文--------------", signData);
		console.log("加签--------------", sign);
		return sign;
	},

	// 验签 用公钥对签名进行验签
	verify(signData, data) {
		// signData: 加签的数据
		// data: 加签之后得到的签文
		try {
			// let sig = new KJUR.crypto.Signature({"alg": "SHA1withRSA", "prov": "cryptojs/jsrsa","prvkeypem": Rsas.may_key});
			// sig.updateString(signData);
			// let result = sig.verify(data);
			// console.log(result)
			// !要重新new 一个Signature, 否则, 取摘要和签名时取得摘要不一样, 导致验签误报失败(原因不明)!
			let signatureVf = new Jsrsasign.KJUR.crypto.Signature({
				"alg": "SHA256withRSA",
				prvkeypem: Rsa.may_key
			});
			signatureVf.updateString(Jsrsasign.hex2b64(signData));
			// !接受的参数是16进制字符串!
			let result = signatureVf.verify(Jsrsasign.b64tohex(data));
			console.log("验签--------------: " + result);
			return result;
		} catch (e) {
			console.error(e);
		}
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
	},
}
export {
	ext
}
