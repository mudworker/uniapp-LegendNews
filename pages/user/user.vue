<template>
	<view class="user">
		<view class="top">
			<image src="../../static/images/history.png" mode=""></image>
			<text>浏览记录</text>
		</view>
		<view class="content">
			<view class="row" v-for="item in historyList">
				<newsbox :item="item"></newsbox>
			</view>
		</view>
		<view class="noHistory" v-if="!historyList.length">
			<image src="../../static/images/nohis.png" mode="widthFix"></image>
			<view class="text">暂无浏览记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList: []
			};
		},
		onShow() {
			this.getHistory()
		},
		methods: {
			// 获取缓存浏览记录
			getHistory() {
				let historyList = uni.getStorageSync("historyList") || [];
				this.historyList = historyList;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.user {
		.top {
			padding: 50rpx 0;
			background-color: #f8f8f8;
			color: #666;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 150rpx;
				height: 150rpx
			}

			text {
				font-size: 38rpx;
				padding-top: 20rpx;
			}
		}

		.content {
			padding: 20rpx;

			.row {
				border-bottom: 1px dashed #efefef;
				padding: 15rpx 0;
			}
		}

		.noHistory {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 500rpx;
			}
			
			.text{
				font-size: 30rpx;
				color:#888;
			}
		}
	}
</style>