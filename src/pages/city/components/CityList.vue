<template>
	<div class="city-list">
		<div class="scroll">
			<div class="area">
				<div class="title border-topbottom">当前</div>
				<div class="button-list clearfix">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门</div>
				<div class="button-list clearfix">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="list-item">
					<div class="item border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
					<div class="item  border-bottom">发货方</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CityList',
	data (){
		return {
			scroll: null,
		}
	},
	mounted (){
		let wrapper = document.querySelector('.city-list')
		this.scroll = new BScroll(wrapper)
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
		position absolute
		top: 1.58rem
		left: 0
		bottom: 0
		right: 0
		overflow: hidden
		.title
			line-height: .44rem
			background :#eee
			padding-left: 0.2rem
			color :#666
			font-size: .26rem
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
