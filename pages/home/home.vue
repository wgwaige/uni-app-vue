<template>
	<view>
		<view class="banner">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
			 indicator-active-color="#517ff3">
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
		<svg class="iconfonts icon" aria-hidden="true">
			<use xlink:href="#icon-zhangdan"></use>
		</svg>
		<view class="scroll-wrap">
			<view class="scroll-tit">公告</view>
			<swiper class="swiper" circular :vertical="true" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in publicList" :key="index" @click="gotoInfo(item)">
					<view class="swiper-item">{{item.title}}</view>
				</swiper-item>
			</swiper>
			<view class="scroll-more" @click="gotoMore()">更多</view>
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
				duration: 500,
				publicList: [{
						title: "公告栏上下滚动测试"
					},
					{
						title: "2222222222"
					},
				]
			}
		},
		methods: {
			gotoInfo() {},
			gotoMore() {
				console.log('公告列表')
			}
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

	/* 公告 */
	.scroll-wrap {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		width: 90%;
		height: 80rpx;
		line-height: 80rpx;
		margin-left: 5%;
		margin-top: 25upx;
		padding: 0;
		border-radius: 10upx;
		justify-content: space-between;
	}

	.scroll-wrap .scroll-tit {
		width: 100upx;
		height: 80rpx;
		line-height: 80rpx;
		display: flex;
		align-items: left;
		background-color: #FFFFFF;
		border-radius: 14upx;
		color: #9152d4;
		font-weight: bold;
	}

	.scroll-wrap .scroll-more {
		width: 100upx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: right;
		color: #9152d4;
	}

	.scroll-wrap .swiper {
		width: 90%;
		height: 80rpx;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
	}

	.scroll-wrap .swiper-item {
		width: 100%;
		display: block;
		height: 80rpx;
		line-height: 80rpx;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap
	}

	.iconfonts {
		font-size:100rpx;
	}
	
</style>
