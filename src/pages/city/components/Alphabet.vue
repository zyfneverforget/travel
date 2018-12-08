<template>
	<div class="alphabet">
		<ul class="alphabet-list">
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
			<li class="item">A</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Alphabet'
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
	.alphabet-list
		position : absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		display: flex
		flex-direction: column
		justify-content : center
		.item
			text-align center
			line-height : .44rem
			color: $bgColor
</style>
