function getLocalFilePath(path) {
	if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf(
			'_downloads') === 0) {
		return path
	}
	if (path.indexOf('file://') === 0) {
		return path
	}
	if (path.indexOf('/storage/emulated/0/') === 0) {
		return path
	}
	if (path.indexOf('/') === 0) {
		var localFilePath = plus.io.convertAbsoluteFileSystem(path)
		if (localFilePath !== path) {
			return localFilePath
		} else {
			path = path.substr(1)
		}
	}
	return '_www/' + path
}
/**
 * 图片压缩
 * @param maxWidth 最大宽度或最大高度
 * @param width 宽度
 * @param height 高度
 * @returns {___anonymous1968_1969}
 */
function imgScaleW(maxWidth, width, height) {
	var imgScale = {};
	var w = 0;
	var h = 0;
	if (width <= maxWidth && height <= maxWidth) { // 如果图片宽高都小于限制的最大值,不用缩放
		imgScale = {
			width: width,
			height: height
		};
	} else {
		if (width >= height) { // 如果图片宽大于高
			w = maxWidth;
			h = Math.ceil(maxWidth * height / width);
		} else { // 如果图片高大于宽
			h = maxWidth;
			w = Math.ceil(maxWidth * width / height);
		}
		imgScale = {
			width: w,
			height: h
		};
	}
	return imgScale;
}

function imgScaleH(maxHeight, width, height) {
	var imgScale = {};
	var w = 0;
	var h = 0;
	if (width <= maxHeight && height <= maxHeight) { // 如果图片宽高都小于限制的最大值,不用缩放
		imgScale = {
			width: width,
			height: height
		};
	} else {
		if ( height >= width) { // 如果图片宽大于高
			h = maxHeight;
			w = Math.ceil(maxHeight * height / width);
		} else { // 如果图片高大于宽
			h = maxHeight;
			w = Math.ceil(maxHeight * width / height);
		}
		imgScale = {
			width: w,
			height: h
		};
	}
	return imgScale;
}
//type 0 竖版  1 竖版
export function pathToBase64(path,maxPX) {
	return new Promise(function(resolve, reject) {
		if (typeof window === 'object' && 'document' in window) {
			var canvas = document.createElement('canvas')
			var c2x = canvas.getContext('2d')
			var img = new Image
			img.onload = function() {
				// var width = img.width;
				// var height = img.height;
				// // 按比例压缩4倍
				// var rate = (width < height ? width / height : height / width) / 4;
				// canvas.width = width * rate;
				// canvas.height = height * rate;
				// c2x.drawImage(img, 0, 0, width, height, 0, 0, width * rate, height * rate);
				console.log("this.width=="+this.width);
				
				var imgScale = this.height>=this.width? imgScaleW(maxPX, this.width, this.height):imgScaleH(maxPX, this.width, this.height);
				canvas.width = imgScale.width;
				canvas.height = imgScale.height;
				c2x.drawImage(img, 0, 0, imgScale.width, imgScale.height);


				// canvas.width = img.width
				// canvas.height = img.height
				// c2x.drawImage(img, 0, 0)
				resolve(canvas.toDataURL())
			}
			img.onerror = reject
			img.src = path
			return
		}
		if (typeof plus === 'object') {
			console.log("typeof plus === 'object");
			plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
				entry.file(function(file) {
					var fileReader = new plus.io.FileReader()
					fileReader.onload = function(data) {
						resolve(data.target.result)
					}
					fileReader.onerror = function(error) {
						reject(error)
					}
					fileReader.readAsDataURL(file)
				}, function(error) {
					reject(error)
				})
			}, function(error) {
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			console.log("typeof wx === 'object");
			wx.getFileSystemManager().readFile({
				filePath: path,
				encoding: 'base64',
				success: function(res) {
					// resolve('data:image/png;base64,' + res.data)
					resolve( res.data)
				},
				fail: function(error) {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}

export function base64ToPath(base64) {
	return new Promise(function(resolve, reject) {
		if (typeof window === 'object' && 'document' in window) {
			base64 = base64.split(',')
			var type = base64[0].match(/:(.*?);/)[1]
			var str = atob(base64[1])
			var n = str.length
			var array = new Uint8Array(n)
			while (n--) {
				array[n] = str.charCodeAt(n)
			}
			return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
				type: type
			})))
		}
		var extName = base64.match(/data\:\S+\/(\S+);/)
		if (extName) {
			extName = extName[1]
		} else {
			reject(new Error('base64 error'))
		}
		var fileName = Date.now() + '.' + extName
		if (typeof plus === 'object') {
			var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
			bitmap.loadBase64Data(base64, function() {
				var filePath = '_doc/uniapp_temp/' + fileName
				bitmap.save(filePath, {}, function() {
					bitmap.clear()
					resolve(filePath)
				}, function(error) {
					bitmap.clear()
					reject(error)
				})
			}, function(error) {
				bitmap.clear()
				reject(error)
			})
			return
		}
		if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
			var filePath = wx.env.USER_DATA_PATH + '/' + fileName
			wx.getFileSystemManager().writeFile({
				filePath: filePath,
				data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
				encoding: 'base64',
				success: function() {
					resolve(filePath)
				},
				fail: function(error) {
					reject(error)
				}
			})
			return
		}
		reject(new Error('not support'))
	})
}
