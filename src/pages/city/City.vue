<template>
	<div class="city">
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
		<alphabet v-show="isShow" @change="onChange" :cities="cities"></alphabet>
	</div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import Alphabet from './components/Alphabet'
import axios from 'axios'
import Cities from './components/cities.js'
export default {
	name: 'City',
	components:{ CityHeader, CitySearch,CityList,Alphabet},
	data (){
		return {
			cities : Cities,
			hotCities: [],
			//mock : Cities,
			letter: '',
			isShow : true,
			clientHeight: 0
		}
	},
	methods: {
		getCityInfo (){
			axios.get('http://rap2api.taobao.org/app/mock/119848/city')
			.then((res)=>{
				let data = res.data.data
				this.hotCities = data.hotCities
				//this.cities = data.cities
			})
		},
		onChange(letter){
			this.letter = letter
		}
	},
	mounted (){
		this.getCityInfo()
		this.clientHeight = document.documentElement.clientHeight
		 window.onresize = ()=>{
			if(document.documentElement.clientHeight < 500){
				this.isShow = false
			} else{
				this.isShow = true
			}
		 }
	},
}
</script>

<style lang="stylus" scoped>

</style>
