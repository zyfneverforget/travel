<template>
	<div class="home">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
	</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomRecommend.vue'
export default {
	name: 'Home',
	components :{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend
	}
}
</script>

<style lang="stylus" scoped>

</style>
