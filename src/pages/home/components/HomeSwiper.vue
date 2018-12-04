<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide>
				<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/4d/6706bf772c05ce02.jpg_750x200_773e75f0.jpg" alt="">
			</swiper-slide>
			<swiper-slide>
				<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg" alt="">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
 <script>
 export default {
	name: 'HomeSwiper',
	data (){
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
        paginationClickable: true,
				autoplay: 3000,
				loop: true,
			}
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
		padding-bottom : 26.7%
		background: #eee
		.swiper-img
			width: 100%
</style>
 