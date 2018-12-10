<template>
	<div class="detail">
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list :list ="list"></detail-list>
		<div class="content"></div>
	</div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
export default {
	name: 'Detail',
	components: {DetailBanner,DetailHeader,DetailList},
	data (){
		return {
			list :[{
        "title": "大门票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        },{
          "title": "成人五馆联票"
        }]
      }, {
        "title": "亲子票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height : 30rem
</style>

