<template>
	<view>
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration" indicator-active-color="#517ff3">
				<swiper-item>
					<image class="swiper-item" src="../../static/images/banner3.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-item" src="../../static/images/banner2.png"></image>
				</swiper-item>
				<swiper-item>
					<image class="swiper-item" src="../../static/images/banner1.png"></image>
				</swiper-item>
			</swiper>
		</view>
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

		}
	}
</script>
<style>
	.banner {
		width: 90%;
		margin: 0 auto;
	}
	
	.banner .swiper {
		height: 300rpx;
	}
	
	.banner .swiper-item {
		width: 100%;
		display: block;
		height: 300rpx;
		line-height: 300rpx;
	}
	
	.banner .swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	
	.banner .uni-swiper-dots-horizontal {
		bottom: 0;
	}
</style>