<template>
	<view class="detail">
		<view class="title">{{detail.title}}</view>
		<view class="info">
			<view class="author">作者：{{detail.author}}</view>
			<view class="time">发布日期：{{detail.posttime}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
		<view class="desc">
			声明：本站的内容均采集与腾讯新闻，如果侵权请联系管理（513894357@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from '@/utils/tool.js'
	export default {
		data() {
			return {
				params: null,
				detail: {}
			}
		},
		onLoad(params) {
			this.params = params
			this.getDetial()
		},
		methods: {
			getDetial() {
				uni.request({
					url: 'https://ku.qingnian8.com/dataApi/news/detail.php',
					data: this.params,
					success: res => {
						// 修改图片样式 直接用css穿透的话，小程序里面会有问题
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width: 100%"')
						res.data.posttime = parseTime(res.data.posttime)
						this.detail = res.data
						// 存入历史记录缓存
						this.saveHistory()

						// 改变导航头
						uni.setNavigationBarTitle({
							title: res.data.title
						})
					}
				})
			},
			// 存储历史记录
			saveHistory() {
				let historyList = uni.getStorageSync('historyList') || []
				let item = {
					id: this.detail.id,
					classid: this.detail.classid,
					picurl: this.detail.picurl,
					title: this.detail.title,
					viewtime: parseTime(Date.now())
				}
				// 如果已经存在这条记录，则删除后重新在头部插入
				let index = historyList.findIndex(it => {
					return it.id == item.id
				})
				if (index >= 0) {
					historyList.splice(index, 1)
				}
				historyList.unshift(item)
				uni.setStorageSync('historyList', historyList)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.detail {
		padding: 50rpx 30rpx;

		.title {
			font-size: 50rpx;
			line-height: 1.6em;
		}

		.info {
			padding: 0 30rpx;
			margin: 50rpx 0;
			height: 80rpx;
			background: #f6f6f6;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 22rpx;
			color: #888;
		}

		.content {
			padding-bottom: 50rpx;
		}

		.desc {
			background: #FEF0F0;
			font-size: 26rpx;
			padding: 20rpx;
			color: #F89898;
			line-height: 1.8em;
		}
	}
</style>