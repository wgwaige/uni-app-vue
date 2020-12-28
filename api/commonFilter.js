import Vue from 'vue'
//银行卡号尾数处理
Vue.filter('bankcardNumberFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	return dateStr.substring(dateStr.length - 4)
})
//银行卡号隐藏处理
Vue.filter('bankNumberHideFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let tailNumber = dateStr.substring(dateStr.length - 4)
	let bankNumber = '';
	for (let i = 0; i < dateStr.length - 4; i++) {
		bankNumber = bankNumber + "*"
		if ((i + 1) % 4 == 0) {
			bankNumber = bankNumber + '  '
		}
	}
	return bankNumber + ' ' + tailNumber
})
Vue.filter('bankNumberHideFormatX', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let tailNumber = dateStr.substring(dateStr.length - 4)
	let bankNumber = '';
	for (let i = 0; i < dateStr.length - 4; i++) {
		bankNumber = bankNumber + "X"
		if ((i + 1) % 4 == 0) {
			bankNumber = bankNumber + '  '
		}
	}
	return bankNumber + ' ' + tailNumber
})
//姓名
Vue.filter('nameFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let name = dateStr.substring(0, 1)
	for (let i = 0; i < dateStr.length - 1; i++) {
		name = name + "*"
	}
	return name
})
//身份证号
Vue.filter('idNoFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let idNo = dateStr.substring(0, 3)
	for (let i = 0; i < dateStr.length - 6; i++) {
		idNo = idNo + "*"
	}
	idNo = idNo + dateStr.substring(dateStr.length - 3)
	return idNo
})
//银行卡号\电子账户号中间*处理
Vue.filter('cardNumberFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let carNumber = dateStr.substring(0, 4)
	for (let i = 0; i < dateStr.length - 8; i++) {
		carNumber = carNumber + "*"
	}
	carNumber = carNumber + dateStr.substring(dateStr.length - 4)
	return carNumber
})
//银行卡号\电子账户号中间*处理 中间添加空格
Vue.filter('cardNumberFormat2', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let spaces = "&nbsp;&nbsp;&nbsp;";
	let carNumber = dateStr.substring(0, 4) + spaces;
	for (let i = 0; i < dateStr.length - 8; i++) {
		if (i == parseInt((dateStr.length - 8) / 2)) {
			carNumber = carNumber + "*" + spaces;
		} else {
			carNumber = carNumber + "*"
		}

	}
	carNumber = carNumber + spaces + dateStr.substring(dateStr.length - 4)
	return carNumber
})
//手机号中间*处理
Vue.filter('phoneFormat', function(dateStr) {
	if (dateStr == null) {
		return
	}
	let phoneNum = dateStr.substring(0, 3)
	for (let i = 0; i < dateStr.length - 7; i++) {
		phoneNum = phoneNum + "*"
	}
	phoneNum = phoneNum + dateStr.substring(dateStr.length - 4);
	return phoneNum
})
//日期格式处理
Vue.filter('dateFormat', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '' || dateStr.length != 8) {
		return dateStr
	}
	let year = dateStr.substring(0, 4)
	let month = dateStr.substring(4, 6)
	let day = dateStr.substring(6)
	return year + '-' + month + '-' + day
})
//日期格式处理(交易流水)
Vue.filter('dateWaterFormat', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '') {
		return dateStr
	}
	let year = dateStr.substring(0, 4)
	let month = dateStr.substring(4, 6)
	let day = dateStr.substring(6, 8)
	let hours = dateStr.substring(8, 10)
	let mounth = dateStr.substring(10, 12)
	let second = dateStr.substring(12)
	return year + '-' + month + '-' + day + " " + hours + ":" + mounth + ":" + second
})
//日期获取年
Vue.filter('dateYearFormat', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '') {
		return dateStr
	}
	let year = dateStr.substring(0, 4)
	return year
})
//日期获取月
Vue.filter('dateMonthFormat', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '') {
		return dateStr
	}
	let month = dateStr.substring(4, 6)
	return month
})
//日期获取日
Vue.filter('dateDayFormat', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '') {
		return dateStr
	}
	let day = dateStr.substring(6, 8)
	return day
})
Vue.filter('dateDayFormat2', function(dateStr, pattern = "") {
	if (dateStr == null || dateStr == '') {
		return dateStr
	}
	return dateStr.replace(/\+/g, " ");
})
//金额转换为百分位
Vue.filter('amountFormat2', function(num, pattern = "") {
	if (num == null || num == '') {
		return num
	}
	var cent = 2;
	var numArr = num.toString().split('.');
	if (cent == 0) {
		return numArr[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
	} else {
		if (!numArr[1]) {
			numArr[1] = "";
		}
		if (numArr[1].length < cent) {
			for (var i = 0, length = cent - numArr[1].length; i < length; i++) {
				numArr[1] += "0";
			}
		}
		return numArr[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + numArr[1].substring(0, cent);
	}
})
Vue.filter('amountFormat3', function(num, pattern = "") {
	if (num == null || num == '') {
		return num
	}
	var cent = 3;
	var numArr = num.toString().split('.');
	if (cent == 0) {
		return numArr[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
	} else {
		if (!numArr[1]) {
			numArr[1] = "";
		}
		if (numArr[1].length < cent) {
			for (var i = 0, length = cent - numArr[1].length; i < length; i++) {
				numArr[1] += "0";
			}
		}
		return numArr[0].toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + '.' + numArr[1].substring(0, cent);
	}
})
