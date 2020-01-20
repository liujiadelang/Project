<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<!-- header -->
		<goodsHeader />
		商品详情页面
	</view>
</template>

<script>
	import goodsHeader from './goodsHeader.vue'
	import interfaces from '../../utils/interfaces.js'
	
	export default {
		data() {
			return {
				goodsInfo : {
					name : "",
					price : "",
					number : 1,
					spec : ""
				}
			}
		},
		onLoad(option) {
			console.log(option)
			this.goodsInfo = JSON.parse(option.goodsInfo)
		},
		methods: {
			
		},
		components: {
			goodsHeader,
		},
	}
</script>

<style>

</style>
