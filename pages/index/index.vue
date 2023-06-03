<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="item">类型</view>
			<view class="item">类型</view>
			<view class="item">类型</view>
			<view class="item">类型</view>
			<view class="item">类型</view>
			<view class="item">类型</view>
			<view class="item">类型</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="item in 10">
				<newsbox></newsbox>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.navscroll {
			height: 100rpx;
			background-color: #f7f8fa;
			white-space: nowrap;

			@include noshowscroll;

			.item {
				font-size: 40rpx;
				display: inline-block;
				line-height: 100rpx;
				padding: 0 30rpx;
				color: #333;
			}

		}

		.content {
			padding: 20rpx;

			.row {
				border-bottom: 1px dashed #efefef;
				padding: 15rpx 0;
			}
		}
	}
</style>