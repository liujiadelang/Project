<template>
	<view>
		<!-- 状态栏 -->
		<page-status></page-status>
		<pageHeader></pageHeader>
	</view>
</template>

<script>
	import pageHeader from '../home/pageHeader.vue'
	import interfaces from "../../../utils/interfaces.js"
	
	export default {
		data() {
			return {
				categoryList : []
			}
		},
		onLoad() {
			this.initData();
		},
		methods: {
			initData(){
				this.request({
					url : interfaces.getCategory,
					success : (res) => {
						this.categoryList = res.data;
						console.log(this.categoryList)
					}
				})
			}
		},
		components:{
			pageHeader
		}
	}
</script>

<style>

</style>
