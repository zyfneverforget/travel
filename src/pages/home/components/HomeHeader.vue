<template>
	<div class="home-header">
		<div class="header-left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe632;</span>
			输入城市/景点/游玩主题
		</div>
		<router-link tag="div" to="/city" class="header-right">
			{{this.$store.state.city}}
			<span class="iconfont">&#xe62d;</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
	.home-header
		display : flex
		font-size: .28rem
		height: .88rem
		background : #00bcd4
		line-height: .88rem
		color : #fff
		.header-left
			padding-left : 0.1rem
		.header-right
			margin-right: 0.1rem
		.header-input
			flex: 1
			height: 0.64rem
			line-height: 0.64rem
			margin-top :0.12rem
			background : #fff 
			border-radius: 0.1rem
			color : #ccc
			margin-left: 0.15rem
			margin-right: 0.1rem
			padding-left: 0.1rem 
</style>
 