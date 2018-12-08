<template>
	<div class="home-icons clearfixed">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(icons,index) in imgList" :key="index">
				<div class="icon" v-for="icon in icons" :key="icon.id">
					<div class='icon-wrapper'>
						<img class="icon-img" :src="icon.imgUrl" alt="">
					</div>
					<div class="icon-desc">{{icon.desc}}</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script> 
export default {
	name: 'HomeIcons',
	props: ['list'],
	data (){
		return{
			swiperOption:{
				autoplay : false
			}
		}
	},
	computed:{
		imgList (){
			let imgList = []
			this.list.forEach((item,i) => {
				let index = Math.floor(i/8)
				if(!imgList[index]){
					imgList[index] =[]
				}
				imgList[index].push(item)
			})
			return imgList
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.home-icons 
	height: 0
	padding-bottom: 50%
	overflow : hidden
.icon
	float : left
	padding-bottom: 25%
	width: 25%
	position : relative
	overflow : hidden
	height: 0
	.icon-wrapper
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0.44rem
		box-sizing: border-box
		padding: 0.1rem
		.icon-img
			height : 100%
			margin: 0 auto
			display : block
	.icon-desc
		position: absolute
		left: 0
		right: 0
		bottom: 0
		height: 0.44rem
		line-height: .44rem
		text-align center
		color: #333
		ellipsis()
</style>
