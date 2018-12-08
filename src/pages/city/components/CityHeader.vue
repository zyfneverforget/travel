<template>
	<div class="city-header">
		<router-link to="/" tag="span" class="iconfont back">
			&#xe624;
		</router-link>
		城市选择
	</div>
</template>

<script>
export default {
	name : 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.city-header
		height: .86rem
		line-height : .86rem
		text-align : center
		color : #fff
		background : $bgColor
		font-size : .32rem
		.back
			position : absolute
			top: 0
			left: 0
			padding-left: .2rem
			font-size: .4rem
</style>
