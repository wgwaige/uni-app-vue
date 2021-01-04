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
		<!-- <svg class="iconfonts icon" aria-hidden="true">
			<use xlink:href="#icon-zhangdan"></use>
		</svg> -->
		<view class="scroll-wrap">
			<view class="scroll-tit">公告</view>
			<swiper class="swiper" circular :vertical="true" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in publicList" :key="index" @click="gotoInfo(item)">
					<view class="swiper-item">{{item.title}}</view>
				</swiper-item>
			</swiper>
			<view class="scroll-more" @click="gotoMore()">更多</view>
		</view>
		<view class="section-nav">
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-zijinzhuanchu"></use>
					</svg>
				</view>
				<view class="nav-tit">转账</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-zijinzhanghu"></use>
					</svg>
				</view>
				<view class="nav-tit">贷款</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-jijinzhanghu"></use>
					</svg>
				</view>
				<view class="nav-tit">账户</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-zijinjijin"></use>
					</svg>
				</view>
				<view class="nav-tit">基金</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-jijincunchu"></use>
					</svg>
				</view>
				<view class="nav-tit">存款</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-zhangdan"></use>
					</svg>
				</view>
				<view class="nav-tit">账单</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-tiaoyan"></use>
					</svg>
				</view>
				<view class="nav-tit">调研</view>
			</view>
			<view class="nav">
				<view class="nav-icon">
					<svg class="iconfonts icon" aria-hidden="true">
						<use xlink:href="#icon-zhanghu"></use>
					</svg>
				</view>
				<view class="nav-tit">账户</view>
			</view>
		</view>
		<view class="interval"></view>
		<!-- 特殊专区 -->
		<view class="section">
			<view class="section-tit">特殊专区</view>
			<view class="section-more">查看更多</view>
		</view>
		<view class="special">
			<view class="special-left">

			</view>
			<view class="special-right">
				<view class="special-gxd"></view>
				<view class="special-hlb"></view>
			</view>
		</view>
		<!-- 热销产品 -->
		<view class="section">
			<view class="section-tit">热销产品</view>
			<view class="section-more">查看更多</view>
		</view>
		<view class="hot-product">
			<view class="hot-left">
				<view class="hot-left-pec">5.01%</view>
				<view class="hot-left-tip">预期年化收益率</view>
			</view>
			<view class="hot-right">
				<view class="hot-right-tit">月月盈</view>
				<view class="hot-right-ito">活期产品｜定期收益</view>
			</view>
		</view>
		<view class="hot-product">
			<view class="hot-left">
				<view class="hot-left-pec">4.80%</view>
				<view class="hot-left-tip">预期年化收益率</view>
			</view>
			<view class="hot-right">
				<view class="hot-right-tit">幸福盈</view>
				<view class="hot-right-ito">活期产品｜期限灵活选择多</view>
			</view>
		</view>
		<view class="hot-product">
			<view class="hot-left">
				<view class="hot-left-pec">3.98%</view>
				<view class="hot-left-tip">预期年化收益率</view>
			</view>
			<view class="hot-right">
				<view class="hot-right-tit">周周盈</view>
				<view class="hot-right-ito">定期｜七天｜自动转存</view>
			</view>
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
						title: "公告栏上下滚动测试",
						content: "http://www.baidu.com/",
					},
					{
						title: "公告栏上下滚动测试222",
						content: "http://www.baidu.com/",
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
	@import url("./home.css");
</style>
