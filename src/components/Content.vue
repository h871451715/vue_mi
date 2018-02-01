<template>
	<div id="content">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'mi-content'
	}
</script>

<style scoped="scoped">
	*{margin: 0; padding: 0;}
	#content{
		width: 100%;
		overflow: auto;
		}
</style>