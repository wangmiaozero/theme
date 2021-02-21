<template>
	<view class="prescription " :style="[...styleOptions]">
		<UiButton width="200rpx" type="cancel" plain height="80rpx" @click.native="onSwitch" style="margin-right: 30rpx;">返回对话</UiButton>
		<view class="content">
				<view class="box">
					文字
				</view>
				<view class="box" >
					文字
				</view>
				<view class="box">
					文字
				</view>
			</view>
	</view>
</template>

<script>
	import CreateModulesName from '@/mixin/createModulesName';
	// 微信小程序/支付宝小程序/百度小程序/字节跳动小程序/QQ小程序/360小程序
	// #ifdef MP 
	import UiButton from '@/components/UiButton/ui-button.vue'
	// #endif
	export default {
		mixins: [CreateModulesName],
		components: {
			// #ifdef MP
			UiButton
			// #endif
		},
		data() {
			return {
				styleOptions:{
					backgroundColor:''
				}
				
			};
		},
		computed: {
		},
		onLoad(option) {
			
		},
		onShow() {
			
		},
		
		mounted() {
	
		},
		onReady() {  //需要注意的是放在onload中是不行的
					const query = uni.createSelectorQuery().in(this);     //这样写就只会选择本页面组件的类名box的
					query.selectAll('.box').boundingClientRect(data => {   //回调函数，data中存储的是这些元素节点（每个节点的信息存为一个对象）的位置信息
					  console.log("得到布局位置信息" + JSON.stringify(data));
					  console.log("节点离页面顶部的距离为" + data[1].top);  //本页面共有三个，这里我只打印第二个的
					}).exec();
				},
		methods: {
			getRandomColor(type='rgb'){
				if(type=='rgb'){
					return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')';
				}else if(type == '#'){
					// 随机产生十六进制的颜色值
					let str = "#";
					for(let i = 0; i < 6; i++){
						let random = parseInt(Math.random() * 16);
						str += ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"][random]
					}
					return str;
				}
			},
			onSwitch(){
				// #ifdef H5
					// 读取变量
					let trim = window.document.documentElement.style.getPropertyValue('--lk-theme-primary').trim();
					console.log(trim,'读取变量')
					// 删除变量
					let del = window.document.documentElement.style.removeProperty('--lk-theme-primary');
					console.log(del,'删除变量')
					// 设置变量
					window.document.documentElement.style.setProperty('--lk-theme-primary', this.getRandomColor('#'));
					window.document.documentElement.style.setProperty('--test-theme-primary', this.getRandomColor('#'));
				// #endif
				// #ifdef MP 
					let view = uni.createSelectorQuery('page')
					// 思路利用：利用vuex 写一些集合对象style 通过js 动态改变
					this.styleOptions.backgroundColor = this.getRandomColor('#');
					console.log(view)
					
				// #endif
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.prescription {
		min-height: 100vh;
		background-color: #F4F4F7;
		position: relative;
		background-color: var(--lk-theme-primary);
		.prescription-foot {
			//position: fixed;
			left: 0px;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			background-color: #fff;
			height: 140rpx;
			width: 100%;
			bottom: 0;
			box-sizing: border-box;
			padding-right: 30rpx;
			box-shadow: 0px -2rpx 0px 0rpx rgba(238, 238, 238, 1);

		}
	}

	.server-box {
		overflow: hidden;
		padding: 0 20rpx;
		min-height: calc(100vh - 330rpx);
	}

	.pick-scroll-component {
		display: flex;
		max-height: calc(100vh - 330rpx);
	}

	.zero-data {
		display: flex;
		height: 100vh;
		text-align: center;
		max-height: calc(100vh - 330rpx);
	}
</style>
