<template>
	<view class="newsbox">
		<view class="pic">
			<image src="../../static/images/0.jpg" mode="aspectFil"></image>
		</view>
		<view class="text">
			<view class="title">
				新闻标题恶趣味驱蚊器恶气恶气恶趣味请问请问
			</view>
			<view class="info">
				<text>作者名称</text>
				<text>998浏览</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.newsbox {
		display: flex;
		justify-content: space-between;

		.pic {
			width: 230rpx;
			height: 160rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.text {
			flex: 1;
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			
			.title {
				font-size: 36rpx;
				color: #333;
				@include ellipsis-line(2);
			}

			.info {
				font-size: 26rpx;
				color: #999;
				text{
					padding-right: 20rpx;
				}
			}
		}
	}
</style>