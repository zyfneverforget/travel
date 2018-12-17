<template>
	<div class="city-search">
		<input　class="search-input" type="text" placeholder="输入城市名或拼音" v-model.trim="keywords">
		<div v-show="keywords" class="search-content">
			<ul>
				<li @click="selectCity(item.name)" class="item border-bottom" 
				v-for="item in list" :key="item.id">{{item.name}}</li>
				<li class="item border-bottom" v-show="!list.length">没有匹配结果</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CitySearch',
	props: ['cities'],
	data (){
		return {
			keywords : '',
			list: [],
			timer: null
		}
	},
	methods: {
		selectCity (name){
			this.$store.commit('changeCity',name)
			this.$router.push({ path: '/'})
			this.keywords = ''
		}
	},
	watch :{
		keywords (){
			let result = []
			if(this.timer){
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(()=>{
				for (let key in this.cities){
					this.cities[key].forEach((city)=>{
						if (city.spell.indexOf(this.keywords) > -1 || city.name.indexOf(this.keywords) > -1) {
							result.push(city)
						}
					})
				}
				this.list = result
			},150)
		}
	},
		mounted (){
		let wrapper = document.querySelector('.search-content')
		this.scroll =  new BScroll(wrapper,{ click: true})
	},
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.city-search
		height: .72rem
		padding: 0 .1rem
		background : $bgColor
		overflow: hidden
		.search-input
			box-sizing: border-box
			width : 100%
			height: .62rem
			line-height : .62rem
			text-align: center
			border-radius: .06rem
			color: #666
			padding : 0 .1rem
		.search-content
			position : absolute
			top: 1.6rem
			left: 0
			right: 0
			bottom: 0
			z-index: 1
			background : #eee
			overflow: hidden
		.item
			line-height: .62rem
			padding-left : .2rem
			color: #666
			background : #fff
</style>
