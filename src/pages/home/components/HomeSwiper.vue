<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="list.length">
			<swiper-slide v-for="item in list" :key ="item.id">
				<img class="swiper-img" :src="item.imgUrl" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
 <script>
 export default {
	name: 'HomeSwiper',
	props: ['list'],
	data (){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
        paginationClickable: true,
				autoplay: 3000,
				loop: true,
			},
		}
	}
 }
 </script>
 
<style lang="stylus" scoped>
	.wrapper >>>.swiper-pagination-bullet-active
		background: #fff 
	.wrapper
		width: 100%
		height: 0
		padding-bottom : 32%
		background: #eee
		.swiper-img
			width: 100%
</style>
 