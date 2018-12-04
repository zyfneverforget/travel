<template>
	<div class="home-icons clearfixed">
		<swiper >
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
	data (){
		return{
			list: [{
        "id": "0001",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
        "desc": "景点门票两两发生地方使得大哥大哥"
      }, {
        "id": "0002",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
        "desc": "滑雪季"
      }, {
        "id": "0003",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
        "desc": "泡温泉"
      }, {
        "id": "0004",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
        "desc": "动植园"
      }, {
        "id": "0005",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
        "desc": "游乐园"
      }, {
        "id": "0006",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
        "desc": "必游榜单"
      }, {
        "id": "0007",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
        "desc": "演出"
      }, {
        "id": "0008",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
        "desc": "城市观光"
      }, {
        "id": "0009",
        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
        "desc": "一日游"
      }]
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
