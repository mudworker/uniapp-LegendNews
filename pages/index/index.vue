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
		<view class="nodata" v-if="newsList.length===0">
			<image src="../../static/images/nodata.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				navList: [],
				newsList: []
			}
		},
		onLoad() {
			this.getNavList()
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
				this.getNewsList(item.id)
			},
			// 获取新闻列表
			getNewsList(id = 50) {
				uni.request({
					url: 'https://ku.qingnian8.com/dataApi/news/newslist.php',
					data: {
						cid: id
					},
					success: res => {
						this.newsList = res.data
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
	}
</style>