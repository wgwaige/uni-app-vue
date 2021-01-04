<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {},
		methods: {}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	/*每个页面公共css */
	/* 引入官方css库 */
	@import "./common/uni.css";
	@import "./common/iconfont/iconfont.css";
	/* 引入动画库 */
	@import "./common/animate.css";

	body {
		max-width: 640px;
		margin: 0 auto;
		padding: 0;
		clear: both
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	.interval {
		width: 90%;
		height: 10px;
		background: #F1F1F1;
		margin-left: 5%;
		display: flex;
	}

	.section {
		width: 90%;
		display: flex;
		margin: 10px auto 10px auto;
		flex-flow: row;
		height: 100rpx;
		line-height: 100rpx;
		justify-content: space-between;
	}

	.section-tit {
		line-height: 100rpx;
		font-size: 36rpx;
		font-weight: 500;
	}

	.section-more {
		line-height: 100rpx;
		font-size: 32rpx;
		color: #999;
	}
</style>
