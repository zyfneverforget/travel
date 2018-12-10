<template>
	<div class="home-recommend">
		<div class="recommend-list">周末去哪</div>
		<ul>
			<li @click="toDetail(item.id)" class="recommend-item border-bottom" v-for="item in recommendList" :key="item.id">
				<img class="item-img " :src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name : 'HomeRecommend',
	props: ['recommendList'],
	methods :{
		toDetail(id){
			this.$router.push({ name: 'Detail', params: { id }})
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
	.recommend-list
		line-height : 0.8rem
		background : #eee
		text-indent: 0.2rem
		margin-top: .2rem
	.recommend-item
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: 0.1rem
		.item-info
			flex :1
			padding: 0.1rem
			min-width: 0
			.item-title
				line-height: 0.54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: 0.4rem
				ellipsis()
				color: #ccc
			.item-button
				line-height: .44rem
				margin-top : .16rem
				background: #ff9300
				padding: 0 0.2rem
				border-radius: .06rem
				color : #fff
				
</style>
