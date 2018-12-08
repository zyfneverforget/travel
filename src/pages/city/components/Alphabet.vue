<template>
	<div class="alphabet" >
		<ul class="alphabet-list" >
			<li class="item" v-for="(city,key) in cities" 
			:key="key"
			@click="change(key)"
			>{{key}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Alphabet',
	props:['cities'],
	data() {
		return {
			date : false
		}
	},
	methods :{
		change (key) {
			this.$emit('change',key)
		},

	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.alphabet-list
		position : absolute
		top: 1.88rem
		right: 0.1em
		bottom: 0
		width: .4rem
		display: flex
		flex-direction: column
		justify-content : center
		.item
			text-align center
			line-height : .38rem
			color: $bgColor
</style>
