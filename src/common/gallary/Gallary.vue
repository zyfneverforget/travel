<template>
	<div @click="close" class="gallary">
		<div class="wrapper">
			<swiper :options="swiperOption" >
			<swiper-slide v-for="(item,index) in list" :key ="index">
				<img class="swiper-img" :src="item" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
	</div>
	</div>
</template>

<script>
export default {
	name : 'Gallery',
	data (){
		return {
			swiperOption :{
				pagination: '.swiper-pagination',
				paginationType : 'fraction',
				observeParents : true,
				observer : true
			},
			list: ["http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg", "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"]
		}
	},
	methods: {
		close(){
			this.$emit('close')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.gallary >>> .swiper-container
		overflow : inherit 
	.gallary
		position : fixed
		top: 0
		left: 0
		right: 0
		bottom : 0
		background : black
		display : flex
		flex-direction : column
		z-index : 2
		justify-content : center
		.wrapper
			width : 100%
			height: 0
			padding-bottom: 100%
			.swiper-img
				width: 100%
			.swiper-pagination
				color: #fff 
				font-size: .36rem
				bottom : -1rem
</style>
