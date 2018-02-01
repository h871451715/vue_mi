<template>
	<div id="cate">
		<mi-header>
			<a href="javascript:history.go(-1);" slot='left'><</a>
			<span slot='center'>分类</span>
			<span class="iconfont icon-fangdajing" slot="right"></span>
		</mi-header>
		<mi-content>
			<div class='cate-content-left'>
				<ul>
					<li><a href="#"><span>新品</span></a></li>
					<li><a href="#"><span>手机</span></a></li>
					<li><a href="#"><span>电视</span></a></li>
					<li><a href="#"><span>电脑</span></a></li>
					<li><a href="#"><span>家电</span></a></li>
					<li><a href="#"><span>路由</span></a></li>
					<li><a href="#"><span>智能</span></a></li>
					<li><a href="#"><span>儿童</span></a></li>
					<li><a href="#"><span>电源</span></a></li>
					<li><a href="#"><span>耳机</span></a></li>
					<li><a href="#"><span>音响</span></a></li>
					<li><a href="#"><span>礼品</span></a></li>
					<li><a href="#"><span>生活</span></a></li>
					<li><a href=""><span>米粉卡</span></a></li>
					<li><a href="#"><span>零售店</span></a></li>
				</ul>
			</div>
			<div class='cate-content-right'>
				<h1>
					<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9697e47fba19edeeb0439ed30827afff.jpg?thumb=1&w=500&h=200"/>
				</h1>
				<div class="cate-content">
					<h3>手机</h3>
					<ul>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/dd2cdf91ccdadcbe9776050eebb5b437!120x120.png" alt="" />
								<p>红米5</p>
							</router-link>
						</li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/5b0e5782bbd17756bbe62b0fd0105070!120x120.png" alt="" />
								<p>红米5 plus</p>
							</router-link>
						</li>
						<li>
						<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/95e18c104b398643101805287a00ad2b!120x120.png" alt="" />
								<p>小米MIX2</p>
							</router-link></li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/7bb843bdb8e1f61f4567f1e2acb43262!120x120.png" alt="" />
								<p>小米Note3</p>
							</router-link>
						</li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/f0e283f74845939fd24d53f7fb1d35c1!120x120.png" alt="" />
								<p>小米6</p>
							</router-link>
						</li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/f50a66098acdec2fa16e5d30a7f50769!120x120.png" alt="" />
								<p>小米5X</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="cate-content">
					<h3>电视</h3>
					<ul>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/0ceafb0119fb20b519f422240ff7bdb0!120x120.png" alt="" />
								<p>32英寸</p>
							</router-link>
						</li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/9870612fa0f3700a4031219b6f628b7d!120x120.png" alt="" />
								<p>43英寸</p>
							</router-link>
						</li>
						<li>
						<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/e47f77da9d3b5d994d11fd7c6cce7b97!120x120.png" alt="" />
								<p>55英寸</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="cate-content">
					<h3>电脑</h3>
					<ul>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/e86a2f01f65b88869b78f2c54cc7f258!120x120.png" alt="" />
								<p>15.6英寸</p>
							</router-link>
						</li>
						<li>
							<router-link to='detail'>
								<img src="//i8.mifile.cn/b2c-mimall-media/f0d7f8167e14f0c70fd84aa6cb321cb6!120x120.png" alt="" />
								<p>17.2英寸</p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			
		</mi-content>
		<mi-footer></mi-footer>
	</div>

</template>

<script>
	export default{
		name:'Cate',
		data(){
			return{
				cateData:[]
			}
		},
		methods:{
			
		},
		mounted(){
			//this.$store.dispatch('getcateData')
		}
	}
</script>

<style scoped="scoped">
	img{width: 60px;}
	.cate-content-left{
		position: fixed;
		left: 0;
		top: 50px;
		bottom: 50px;
		background: #FFFFFF;
		width: 100px;
		overflow: auto;
		}
	.cate-content-left ul li{
		float: left;
		text-align: center;
		height: 20px;
		width: 100%;
		margin: 20px 0;
		font-size: 16px;
	}
	
	h1{
		width: 100%;
	}
	h1 img{
		width: 80%;
		margin: 0 auto;
	}
	.cate-content-right{
		position: fixed;
		left: 85px;
		top: 50px;
		bottom: 50px;
		right: 0;
		background: #FFFFFF;
		overflow: auto;
	}
	.cate-content{
		margin-top: 30px;
	}
	.cate-content ul{
		margin-top: 20px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		font-size: 16px;
	}
	.cate-content ul li{
		width: 33.3%;
		margin-top: 10px;
	}
</style>