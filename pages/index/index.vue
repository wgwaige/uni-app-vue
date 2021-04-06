<template>
	<view class="nav-list">
		<view class="single" @click="gotoHome()">首页</view>
		<view class="single" @click="gotoQrcode()()">生成二维码</view>
		<view class="single" @click="">首页</view>
		<view class="single" @click="">首页</view>
		<view class="single" @click="">首页</view>
		<view class="single" @click="">首页</view>
		<view class="single" @click="">首页</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500
			}
		},
		onPullDownRefresh() {

		},
		methods: {
			gotoHome() {
				uni.navigateTo({
					url:'../home/home',
					animationType: 'pop-in'
				})
			},
			gotoQrcode() {
				uni.navigateTo({
					url:'../qrcode/qrcode',
					animationType: 'pop-in'
				})
			},
		}
	}
</script>
<style>
	.nav-list {
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.single {
		width: 100%;
		padding: 5px 0;
		margin: 5px 0;
		float: left;
		text-align: center;
		background: #f1f1f1;
	}
</style>
