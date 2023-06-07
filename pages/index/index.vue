<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="item" :class="index===navIndex?'active':''" v-for="(item,index) in navList" :key="item.id"
				@click="clickNav(item,index)">
				{{item.classname}}
			</view>
		</scroll-view>
		<view class="content">
			<view class="row" v-for="item in newsList" :key="item.id">
				<newsbox :item="item"></newsbox>
			</view>
		</view>
		<view class="nodata" v-if="!newsList.length&&isLoading!==1">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
		</view>
		<view class="loading" v-if="newsList.length">
			<view v-if="isLoading === 1">
				加载中...
			</view>
			<view v-if="isLoading === 2">
				没有更多了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				navList: [],
				newsList: [],
				currentPage: 1,
				isLoading: 0 // 0加载完成 1加载中 2没有更多了
			}
		},
		onLoad() {
			this.getNavList()
			this.getNewsList()
		},
		// 触底加载新数据
		onReachBottom() {
			if (this.isLoading === 2) return
			this.currentPage++
			this.getNewsList()
		},
		methods: {
			// 获取导航数据
			getNavList() {
				uni.request({
					url: 'https://ku.qingnian8.com/dataApi/news/navlist.php',
					success: res => {
						this.navList = res.data
					}
				})
			},
			// 点击导航切换
			clickNav(item, index) {
				this.navIndex = index
				this.currentPage = 1
				this.newsList = []
				this.isLoading = 0
				this.getNewsList(item.id)
			},
			// 获取新闻列表
			getNewsList(id = 50) {
				this.isLoading = 1
				uni.request({
					url: 'https://ku.qingnian8.com/dataApi/news/newslist.php',
					data: {
						cid: id,
						mum: 8,
						page: this.currentPage
					},
					success: res => {
						if (res.data.length === 0) {
							this.isLoading = 2
						} else {
							this.isLoading = 0
						}
						this.newsList = [...this.newsList, ...res.data]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.navscroll {
			height: 100rpx;
			background-color: #f7f8fa;
			white-space: nowrap;
			position: fixed;
			top: var(--window-top);
			left: 0;
			z-index: 10;

			@include noshowscroll;

			.item {
				font-size: 40rpx;
				display: inline-block;
				line-height: 100rpx;
				padding: 0 30rpx;
				color: #333;

				&.active {
					color: #31C27C;
				}
			}

		}

		.content {
			padding: 20rpx;
			padding-top: 100rpx;

			.row {
				border-bottom: 1px dashed #efefef;
				padding: 15rpx 0;
			}
		}

		.nodata {
			display: flex;
			justify-content: center;

			image {
				width: 360rpx;
			}
		}

		.loading {
			text-align: center;
			font-size: 26rpx;
			color: #888;

			view {
				padding: 10rpx 0;
			}
		}
	}
</style>