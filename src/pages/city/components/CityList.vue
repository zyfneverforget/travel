<template>
	<div class="city-list">
		<div class="scroll">
			<div class="area">
				<div class="title border-topbottom">当前</div>
				<div class="button-list clearfix">
					<div class="button-wrapper">
						<div class="button">{{currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门</div>
				<div class="button-list clearfix">
					<div class="button-wrapper" v-for="item in hotCities" :key="item.id">
						<div @click="selectCity(item.name)" class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(items,key) in cities" :key="key">
				<div class="title border-topbottom" :ref="key" >{{key}}</div>
				<div class="list-item" v-for="city in items" :key="city.id">
					<div @click="selectCity(city.name)" class="item border-bottom">{{city.name}}</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex' 
export default {
	name: 'CityList',
	props: ['hotCities','cities','letter'],
	data (){
		return {
			scroll: null,
		}
	},
	computed :{
		...mapState({
			currentCity : 'city'
		})
	},
	methods:{
		selectCity (name){
			this.$store.commit('changeCity',name)
			this.$router.push({ path: '/'})
		}
	},
	mounted (){
		let wrapper = document.querySelector('.city-list')
		this.scroll =  new BScroll(wrapper,{ click: true})
	},
	watch :{
		letter (newVal){
			if(newVal){
				let element = this.$refs[newVal][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color : #ccc
		&:after
			border-color: #ccc
	.border-bottom		
		&:before
			border-color : #ccc
	.city-list
		overflow: hidden
		position :absolute
		top: 1.60rem
		left: 0
		bottom: 0
		right: 0
		.title
			line-height: .54rem
			background :#eee
			padding-left: 0.2rem
			color :#666
			font-size: .3rem
		.button-list
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				width: 33.33%
				float: left
				.button
					margin: .1rem
					text-align: center
					border: .02rem solid #ccc
					padding: .1rem 0
					border-radius: .06rem 
		.list-item
			.item
				line-height: .76rem
				padding-left: .2rem			
</style>
