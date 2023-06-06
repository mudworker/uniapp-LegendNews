<template>
	<view class="newsbox" @click="toDetail(item.id)">
		<view class=" pic">
		<image :src="item.picurl" mode="aspectFil"></image>
	</view>
	<view class="text">
		<view class="title">
			{{item.title}}
		</view>
		<view class="info" v-if="!item.viewtime">
			<text>{{item.author}}</text>
			<text>{{item.hits}}浏览</text>
		</view>

		<view class="info" v-else>
			<text>浏览时间：{{item.viewtime}}</text>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		props: {
			item: {
				type: Object,
				default () {
					return {
						id: '',
						title: '',
						author: '',
						hits: '',
						picurl: '../../static/images/nopic.jpg',
					}
				}
			}
		},
		data() {
			return {};
		},
		methods: {
			// 跳转到详情页
			toDetail(index) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${index}`
				})
			}
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

				text {
					padding-right: 20rpx;
				}
			}
		}
	}
</style>