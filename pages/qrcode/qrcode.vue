<template>
	<view>
		<input type="text" class="typein" v-model="text" placeholder="请输入内容">
		<button @click="make()">生成二维码</button>
		<canvas canvas-id="qrcode" class="imgcvs" />
	</view>
</template>

<script>
	import uQRCode from '@/js_sdk/Sansnn-uQRCode/uqrcode.js'
	export default {
		data() {
			return {
				text: '', //所有数据
			}
		},
		methods: {
			async make() {
				// 回调方式
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: this.text,
					size: 200,
					margin: 10,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					errorCorrectLevel: uQRCode.errorCorrectLevel.H,
					success: res => {
						console.log('11111:' + res)
					}
				})
			}
		}
	}
</script>

<style>
	.typein {
		width: 90%;
		background: #f1f1f1;
		margin: 10px 5%;
		padding: 5px 0;
		font-size: 11pt;
		border-radius: 3px;
	}

	button {
		width: 90%;
		background: #007AFF;
		color: #fff;
		font-size: 11pt;

	}

	.imgcvs {
		width: 200px;
		height: 200px;
		position: absolute;
		left: 50%;
		top: 45%;
		margin-left: -100px;
		margin-top: -100px;
	}
</style>
