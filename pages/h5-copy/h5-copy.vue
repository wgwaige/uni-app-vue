<template>
	<view class="content">
		<view>
			{{content}}
		</view>
		<button @click="copy()">点击复制</button>
	</view>
</template>

<script>
	import h5Copy from '../../js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	export default {
		data() {
			return {
				content: 'uni-app的h5复制插件，复制字符串到剪贴板，兼容微信、谷歌、Safari、Firefox、QQ、360等主流浏览器，试过所有h5复制插件，这个是兼容性最好的，如有不兼容的情况，请留言'
			}
		},
		methods: {
			copy() {
				let content = this.content // 复制内容，必须字符串，数字需要转换为字符串
				console.log(content)
				const result = h5Copy(this.content)
				if (result === false) {
					uni.showToast({
						title: '不支持',
					})
				} else {
					uni.showToast({
						title: '复制成功',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style>
	.content {
		width: 90%;
		margin-left: 5%;
	}

	button {
		width: 90%;
		margin-top: 10pt;
		background: #007AFF;
		color: #fff;
		font-size: 11pt;

	}
</style>
