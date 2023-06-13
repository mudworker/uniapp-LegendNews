<template>
	<view class="login">
		<image src="../../static/images/bg.jpeg" mode="aspectFill"></image>
		<view class="form">
			<u--form labelPosition="left" labelWidth="60">
				<u-form-item label="用户名" prop="username">
					<u--input v-model="username" placeholder="请输入用户名" color="#fff" clearable />
				</u-form-item>
				<u-form-item label="密码" prop="password">
					<u--input v-model="password" placeholder="请输入密码" type="password" color="#fff" clearable />
				</u-form-item>

				<u-button type="primary" text="登陆 / 注册" @click="onSubmit"></u-button>
			</u--form>

			<u-button type="primary" text="使用微信登陆" @click="wxLogin"></u-button>
		</view>
		<u-notify ref="uNotify"></u-notify>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			};
		},
		created() {
			if (uni.getStorageSync('useId')) {
				uni.switchTab({
					url: "/pages/index/index"
				})
			}
		},
		methods: {
			onSubmit() {
				uni.setStorageSync('userId', this.username)
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			// 1、微信登陆（授权临时code）
			wxLogin() {
				const type = uni.getSystemInfoSync().uniPlatform
				if (type !== "mp-weixin") {
					this.$refs.uNotify.show({
						top: 10,
						type: 'warning',
						message: '微信登陆仅支持微信小程序',
						duration: 1000 * 2,
						safeAreaInsetTop: true
					})
					return
				}
				uni.login({
					provider: 'weixin',
					success: (res) => {
						this.getWxUserOpenId(res.code)
						this.getWxUserInfo()
					}
				});
			},
			// 2-1、根据code获取到openid，session_key
			getWxUserOpenId(code) {
				// const request = require('request');
				const appid = 'wxc63776f79a963444';
				const secret = '3810c6ee06b89fa1002fa7004fdbebd7';

				const url =
					`https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`;
				uni.request({
					url: url,
					success: (res) => {
						let {
							openid,
							session_key
						} = res.data
						console.log(openid, session_key)
					}
				});
			},
			// 2-2、授权后就可以通过getUserInfo获取到用户信息
			getWxUserInfo() {
				uni.getUserInfo({
					provider: 'weixin',
					success: (res) => {
						console.log(res.userInfo)
						uni.setStorageSync('userInfo', res.userInfo)
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;

		position: relative;

		image {
			width: 100%;
			height: 100%;
			z-index: 1;
		}

		.form {
			z-index: 10;
			@include px2res(top, 500);
			width: 100%;
			padding: 40rpx 60rpx;
			box-sizing: border-box;
			position: absolute;
			backdrop-filter: blur(20rpx);

			/deep/ span {
				color: #fff !important;
			}

			/deep/ .u-button {
				margin-top: 30rpx;
			}
		}
	}
</style>