<template>
	<div id="header">
		<ul>
			<li>
				<slot name='left'></slot>
			</li>
			<li>
				<slot name='center'></slot>
			</li>
			<li>
				<slot name='right'></slot>
			</li>
		</ul>
		<slot name='nav'></slot>
	</div>
</template>

<script>
	export default{
		name:'mi-header'
	}
</script>

<style scoped="scoped">
	*{margin: 0; padding: 0;}
	#header{
		width: 100%;
		height:50px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		text-align: center;
		line-height: 50px;
		background: #f2f2f2;
	}
	#header ul{
		display: flex;
		justify-content: space-around;
		background: #f2f2f2;
	}
	#header ul li{
		list-style: none;
		
		}
</style>