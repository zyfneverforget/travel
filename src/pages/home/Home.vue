<template>
	<div class="home">
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :weekendList="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import HomeIcons from './components/HomeIcons.vue'
import HomeRecommend from './components/HomRecommend.vue'
import HomeWeekend from './components/HomeWeekend.vue'
import axios from 'axios'
export default {
	name: 'Home',
	components :{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data (){
		return {
			swiperList: [],
			iconList : [],
			recommendList: [],
			weekendList: [],
		}
	},
	methods:{
		getHomeInfo (){
			axios.get('/api/index.json')
			.then((res)=>{
				let data = res.data.data
				this.swiperList = data.swiperList
				this.iconList  = data.iconList
				this.recommendList = data.recommendList
				this.weekendList = data.weekendList
			})
		}
	},
	mounted (){
		this.getHomeInfo()
	}
}
</script>

<style lang="stylus" scoped>

</style>
