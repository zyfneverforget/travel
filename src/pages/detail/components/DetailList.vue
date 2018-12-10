<template>
	<div class="detail-list">
		<div class="list-content" v-for="(item,index) in list" :key="index">
			<span @click="show" class="iconfont down" v-show='item.children'>&#xe62d;</span>
			<div class="list-title border-bottom">
				<span class="list-icon"></span>
				{{item.title}}
			</div>
			<div class="children" v-if="item.children">
				<detail-list v-show="isShow" :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name : 'DetailList',
	props : {
		list : Array
	},
	data (){
		return {
			isShow : false
		}
	},
	methods :{
		show (){
			this.isShow = !this.isShow
		}
	}
}
</script>

<style lang="stylus" scoped>
.detail-list
	background : white
	.list-content
		position : relative
		.down
			position : absolute 
			right: .16rem
			top: .22rem
			z-index : 1
			font-size : .28rem
			color : #bbb
		.list-title
			font-size : .32rem
			line-height : .8rem
			padding: 0 .2rem
		.list-icon
			position : relative
			display : inline-block
			top: .1rem
			left : .1rem
			width: .36rem
			height : .36rem
			background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
			margin-right : .1rem
			background-size: .4rem 3rem
		.children
			padding : 0 .2rem
</style>
