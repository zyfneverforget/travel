<template>
	<div class="banner-wrapper">
		<div class="banner" @click="isShow = !isShow">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
			<div class="banner-title">
				<p class="title-left">深圳野生动物园</p>
				<p class="title-right">22</p>
			</div>
		</div>
			<gallary @close="closeGallary" v-show="isShow"></gallary>
	</div>
</template>

<script>
import Gallary from '@/common/gallary/Gallary'
export default {
	name : 'DetailBanner',
	data (){
		return {
			isShow : false
		}
	},
	methods :{
		closeGallary() {
			this.isShow = false
		}
	},
	components: {Gallary}
}
</script>

<style lang="stylus" scoped>
	.banner
		position : relative
		overflow : hidden
		.banner-img
			width: 100%
		.banner-title
			position : absolute
			left: 0
			bottom: 0
			right: 0
			font-size: .36rem
			display : flex
			color: #eee
			padding: 0.1rem .2rem 0.1rem .2rem
			background-image : linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
			.title-left	
				flex :1
				height: .44rem
				line-height: .44rem
</style>
