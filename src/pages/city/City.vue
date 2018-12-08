<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
		<alphabet @change="onChange" :cities="cities"></alphabet>
	</div>
</template>

<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import Alphabet from './components/Alphabet'
import axios from 'axios'
export default {
	name: 'City',
	components:{ CityHeader, CitySearch,CityList,Alphabet},
	data (){
		return {
			cities: null,
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo (){
			axios.get('/api/city.json')
			.then((res)=>{
				let data = res.data.data
				this.hotCities = data.hotCities
				this.cities = data.cities
			})
		},
		onChange(letter){
			this.letter = letter
		}
	},
	mounted (){
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>

</style>
