<template>
	<div class="home-weekend">
		<div class="weekend-list">热销推荐</div>
		<ul>
			<li class="weekend-item border-bottom" v-for="item in weekendList" :key="item.id">
				<div class="item-wrapper">
					<img class="item-img " :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: ['weekendList'],
		data () {
		return {
			
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.weekend-list
	line-height : 0.8rem
	background : #eee
	text-indent: 0.2rem
	margin-top: .2rem
.item-wrapper
	overflow :hidden
	height: 0
	padding-bottom: 33.9%
	.item-img
		width: 100%
.item-info
	padding: 0.1rem
	.item-title
		line-height: 0.54rem
		font-size: .32rem
		ellipsis()
	.item-desc
		line-height: 0.4rem
		ellipsis()
		color: #ccc
</style>
