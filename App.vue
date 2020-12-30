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
</style>
