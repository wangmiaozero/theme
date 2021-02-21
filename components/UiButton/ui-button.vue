<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: wangmiao
 * @Date: 2020-12-04 09:26:38
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-12-04 11:39:17
-->
<template>
	<view @tap="btnTap" 
	class="ui-button-component"
	 hover-class="ui-button-hover-class" 
	 :class="[type,{'plain':plain,'disabled':disabled}]" 
	 :style="{width:width,height:height,borderRadius:borderRadius}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name:'UiButton',
		props:{
			plain:{
				type:Boolean,
				default: false
			},
			width:{
				type:String,
				default: '310rpx'
			},
			height:{
				type:String,
				default: '100rpx'
			},
			type:{
				type: String,
				default: 'primary'
			},
			disabled: {
				type:Boolean,
				default: false
			},
			borderRadius:{
				type: String,
				default: '50rpx'
			}
		},
		methods:{
			btnTap() {
				this.$emit('tap')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ui-button-component {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size:32rpx;
		font-weight:400;
		line-height:44rpx;
		letter-spacing:2rpx;
		&.primary{
			background-color: var(--lk-theme-primary);
			color: #fff;
			&.disabled {
				background:rgba(238,238,238,1);
			}
			&.plain {
				background-color: $lk-transparent-bg;
				color: var(--lk-theme-primary);
				border:2rpx solid  var(--lk-theme-primary);
			}
		}
		&.cancel{
			background-color: $lk-transparent-bg;
			color: #fff;
			&.plain {
				background-color: $lk-transparent-bg;
				color:var(--lk-text-color-cancel);
				border:2rpx solid var(--lk-text-color-cancel);
			}
		}
		&.warn{
			background-color: var(--lk-btn-warn-bg);
			color: #fff;
			&.plain {
				background-color: $lk-transparent-bg;
				color:var(--lk-btn-warn-bg);
				border:2rpx solid var(--lk-btn-warn-bg);
			}
		}
		&.ui-button-hover-class {
			opacity: 0.5;
		}
		
	}
</style>
