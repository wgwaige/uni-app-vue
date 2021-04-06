<template>
	<view>
		<view class="uni-padding-wrap">
			<form @submit="formSubmit" @reset="formReset">
				<view>
					<view class="uni-title">姓名</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<input class="uni-input" name="name" placeholder="请填写您的姓名" />
						</view>
					</view>
				</view>
				<view>
					<view class="uni-title">性别</view>
					<radio-group class="uni-flex" name="gender">
						<label>
							<radio value="男" />男
						</label>
						<label>
							<radio value="女" />女
						</label>
					</radio-group>
				</view>
				<view>
					<view class="uni-title">爱好</view>
					<checkbox-group class="uni-flex" name="loves">
						<label>
							<checkbox value="读书" />读书
						</label>
						<label>
							<checkbox value="写字" />写字
						</label>
					</checkbox-group>
				</view>
				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit" formType="submit" type="primary">Submit</button>
					<button type="default" formType="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import graceChecker from '../../js_sdk/graceui-dataChecker/graceChecker.js'
	export default {
		data() {
			return {
				title: '',
			}
		},
		methods: {
			formSubmit(e) {
				//定义表单规则
				var rule = [{
						name: "name",
						checkType: "string",
						checkRule: "1,3",
						errorMsg: "姓名应为1-3个字符"
					},
					{
						name: "gender",
						checkType: "in",
						checkRule: "男,女",
						errorMsg: "请选择性别"
					},
					{
						name: "loves",
						checkType: "notnull",
						checkRule: "",
						errorMsg: "请选择爱好"
					}
				];
				//进行表单检查
				var formData = e.detail.value;
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					uni.showToast({
						title: "验证通过!",
						icon: "none"
					});
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			formReset: function(e) {
				console.log("清空数据")
			}
		}
	}
</script>

<style>
</style>
