<template>
	<div class="home">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
export default {
	name: 'Home',
	components :{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	}
}
</script>

<style lang="stylus" scoped>

</style>
