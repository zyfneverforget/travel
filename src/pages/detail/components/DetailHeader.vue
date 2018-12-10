<template>
	<div class="detail-header">
		<div class="header-fixed" :style="opacity" v-show="!isShow">
			<router-link tag="div" to="/" class="header-fixed-back iconfont">&#xe624;</router-link>
			<div class="header-title">深圳野生动物园</div>
		</div>
		<router-link 
			v-show="isShow" tag="div" to="/" class="header-abs-back">
			<div class="iconfont">&#xe624;</div>
		</router-link>	
	</div>	
</template>

<script>
export default {
	name : 'DetailHeader',
	data (){
		return {
			isShow : true,
			opacity :{
				opacity : 0
			}
		}
	},
	methods :{
		scroll (){
			let top = document.documentElement.scrollTop || document.body.scrollTop
			console.log(top)
			if( top > 30 ){
				let opacity = top / 120
				opacity = opacity > 1 ? 1 : opacity
				this.opacity = { opacity }
				this.isShow = false
			} else {
				this.isShow = true
			}
		}
	},
	activated (){
		window.addEventListener('scroll',this.scroll)
	},
	deactivated (){
		window.removeEventListener('scroll',this.scroll)
	}
}
</script>

<style lang="stylus" scoped>
	.header-fixed
		position : fixed
		top: 0
		left: 0
		display: flex
		font-size: .4rem
		height: .88rem
		background : #00bcd4
		line-height: .88rem
		color : #fff
		width : 100%
		z-index : 1
		.header-title
			flex : 1
			text-align : center
		.header-fixed-back
			padding: 0 .2rem
	.header-abs-back
		position : absolute
		top: 0.26rem
		left : .26rem
		padding : .2rem
		background : rgba(0,0,0,.8)
		border-radius: 50%
		color: #fff
		.iconfont
			font-size : .4rem
</style>
