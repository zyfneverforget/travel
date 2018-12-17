<template>
	<div class="detail">
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list :list ="categoryList"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import api from '@/axios/api.js'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {DetailBanner,DetailHeader,DetailList},
	data (){
		return {
			categoryList :[]
		}
	},
	methods: {
		getDetail (){
			axios.get('/api/detail.json')
			.then((res)=>{
				console.log(res.data.data)
				let data = res.data.data
				this.categoryList = data.categoryList
			})
		}
	},
	activated (){
		this.getDetail()
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height : 30rem
</style>

