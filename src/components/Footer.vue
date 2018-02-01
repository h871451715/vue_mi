<template>
<div id="footer">
	<ul>
		<li>
			<router-link to='/' ref='one'>
				<span class="iconfont icon-shouye"></span><br />
				<i>首页</i>
			</router-link>
		</li>
		<li>
			<router-link to='/cate' ref='two'>
				<span class="iconfont icon-fenlei"></span><br />
				<i>分类</i>
			</router-link>
		</li>
		<li>
			<router-link to='/' ref='thr'>
				<span class="iconfont icon-gouwuche1"></span><br />
				<i>购物车</i>
			</router-link>
		</li>
		<li>
			<router-link to='/' ref='four'>
				<span class="iconfont icon-tubiao-"></span><br />
				<i>我的</i>
			</router-link>
		</li>
	</ul>
</div>

			
			
			
			
</template>

<script>
	export default{
		name:'mi-footer',
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
		*{margin: 0; padding: 0;}
		.selected{color: #ff6700;}
	#footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 999;
		width: 100%;
		height: 50px;
		text-align: center;
		border: 1px solid #ccc;
		color: #000;
		background: #fff;
	}
	ul{
		display: flex;
		justify-content: space-around;
	}
	li{
		list-style: none;
		font-size: 16px;
	}
	i{font-style:normal ;}
	span{
		display: inline-block;
		padding-top: 5px;
		font-size: 22.5px;
	}
</style>