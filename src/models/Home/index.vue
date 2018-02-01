<template>
	<div id="home">
		<mi-header class='home-header'>
				<p slot='left' class="home-header-left">
				<span class="iconfont icon-xiaomi"></span>
			</p>
			<p slot='center' class="home-header-center">
				<span class="iconfont icon-icon-">
					<input type="text" placeholder="搜索商品名称"/>
				</span>

			</p>
			<p slot='right' class="home-header-right">
				<span class="iconfont icon-tubiao-"></span>
			</p>
			<div class="home-header-nav"  slot='nav'>
					<ul>
						<li v-for='(ele,index) in navData' :key="index">
							<a href="#">{{ele}}</a>
						</li>
					</ul>
			</div>
		</mi-header>

		<mi-content class='home-content'>
			<div class="content-total-cate">
				<div class="total-cate-top">
					<div class="one">
						<a href="#">
							<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d1a791322ba4f9d42682723127e784a0.jpg?thumb=1&w=720&h=360" alt="" />
						</a>
					</div>
					<div class="two">
						<ul>
							<li>
								<router-link to='/detail'>
									<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2e1e83fb4712c10a18bf224b5446b5aa.jpg?thumb=1&w=144&h=152"/>
								</router-link>

							</li>
							<li>
								<router-link to='/detail'>
								<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/61528fff3197929aff5993d50f016480.jpg?thumb=1&w=144&h=152" alt="" />
								</router-link>
							</li>
							<li>
								<router-link to='/detail'>
								<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/43684b1f2fd5e9db05971677dd3cddf0.jpg?thumb=1&w=144&h=152"/>
								</router-link>
							</li>
							<li>
								<router-link to='/detail'>
								<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe71b4b9ddafcc5dbfdffe4d6943c3ff.png?thumb=1&w=144&h=152"/>
								</router-link>
							</li>
							<li>
								<router-link to='/detail'>
								<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/25c0b7a89785dfa619cdfdf18b995afa.png?thumb=1&w=144&h=152"/>
								</router-link>
							</li>
						</ul>
					</div>
					<div class='thr'>
						<h2>
							<a href="#">
								<img src="//i8.mifile.cn/v1/a1/2aa68eff-c92a-69de-53b9-500eaf9fd8eb!720x144.webp"/>
							</a>
						</h2>
						<div class="thr-content">
							<ul class="thr-content-list">
								<li>
									<router-link to='/detail'>
									<img src="//i8.mifile.cn/v1/a1/1ad0bf40-4817-d434-2b05-102c37a8ef9e!696x436.webp"/>
									<dl>
										<dt>
											<p>红米5 plus</p>
											<p>千元全面屏，4000mAh大电量</p>
										</dt>
										<dd>
											<p>￥999元起</p>
											<p class="btn">
												立即购买
											</p>
										</dd>
									</dl>
									</router-link>
								</li>
								<li>
									<router-link to='/detail'>
									<img src="//i8.mifile.cn/v1/a1/155ff52d-d72f-c603-89c4-29dbbffa3753!696x436.webp" alt="" />
									<dl>
										<dt>
											<p>红米5 plus</p>
											<p>千元全面屏，4000mAh大电量</p>
										</dt>
										<dd>
											<p>￥999元起</p>
											<p class="btn">
												立即购买
											</p>
										</dd>
									</dl>
									</router-link>
								</li>
								<li>
									<router-link to='/detail'>
									<img src="//i8.mifile.cn/v1/a1/a29a9775-4248-ab55-719f-9d98350a24a8!696x436.webp" alt="" />
									<dl>
										<dt>
											<p>红米5 plus</p>
											<p>千元全面屏，4000mAh大电量</p>
										</dt>
										<dd>
											<p>￥999元起</p>
											<p class="btn">
												立即购买
											</p>
										</dd>
									</dl>
									</router-link>
								</li>
								<li>
									<router-link to='/detail'>
									<img src="//i8.mifile.cn/v1/a1/ecfc69e1-6d24-4448-1e2c-6ddf810edf0b!696x436.webp" alt="" />
									<dl>
										<dt>
											<p>红米5 plus</p>
											<p>千元全面屏，4000mAh大电量</p>
										</dt>
										<dd>
											<p>￥999元起</p>
											<p class="btn">
												立即购买
											</p>
										</dd>
									</dl>
									</router-link>
								</li>
								<li>
									<router-link to='/detail'>
									<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/651c0882fef457df95973926257d7639.jpg?thumb=1&w=696&h=436" alt="" />
									<dl>
										<dt>
											<p>红米5 plus</p>
											<p>千元全面屏，4000mAh大电量</p>
										</dt>
										<dd>
											<p>￥999元起</p>
											<p class="btn">
												立即购买
											</p>
										</dd>
									</dl>
									</router-link>
								</li>
							</ul>
							<ol class="thr-content-ol">
								<li>
									<router-link to='detail'>
										<img src="//i8.mifile.cn/v1/a1/43543f60-15be-5296-4c93-8eebed31037d!344x280.webp" alt="" />
									</router-link>
								</li>
								<li>
									<router-link to='detail'>
										<img src="" alt="" />
									</router-link>
								</li>
								<li>
									<router-link to='detail'>
										<img src="" alt="" />
									</router-link>
								</li>
								<li>
									<router-link to='detail'>
										<img src="" alt="" />
									</router-link>
								</li>
								<li>
									<router-link to='detail'>
										<img src="" alt="" />
									</router-link>
								</li>
								<li>
									<router-link to='detail'>
										<img src="" alt="" />
									</router-link>
								</li>
							</ol>
						</div>
					</div>

				</div>
				</div class="total-cate-list">
					<ul>
						<li></li>
					</ul>
				<div>
			</div>
		</mi-content>
		<mi-footer></mi-footer>
	</div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
	export default{
		name:'Home',
		data(){
			return {
				navData:['年货节','推荐','智能','电视','电脑','全面屏','生活周边','盒子','艺术'],
			}
		},
		methods:{
			selected(){

			}
		},
		mounted(){
			var u_token = window.localStorage.getItem("u_token")
			console.log(u_token)
      axios.get(`http://10.9.171.95:3000/cart/changeNumber?token=${u_token}&number=4&cart_id=1`).then(res=>{
        console.log(res)
      })

		}
	}
</script>

<style scoped="scoped">
	*{margin: 0; padding: 0;}
	img{display: block;}
	i{font-size: 12px;}
	li{
		box-sizing: border-box;
	}
	#header{
		height: 85px;
		font-size: 16px;
		}
	.home-header-left span{
		font-size: 30px;
		color: orange;
	}
	.home-header-center span{
		font-size: 20px;
	}
	.home-header-right span{
		font-size: 30px;
		color: #ccc;
	}
	.home-header-nav{
		height: 34px;
		/*width: 100%;*/
	    background: #f2f2f2;
 		overflow-x: auto;
	}
	.home-header-nav ul{
		height: 34px;
		width: 100%;
		line-height: 34px;
	}
	.home-header-nav ul li a{
		display: inline-block;
		float:left;
		font-size: 16px;
		height: 100%;
		width: 70px;
	}





	.home-content{
		    position: absolute;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    height: 100%;
		    overflow-x: hidden;
		    overflow-y: auto;
	        background: #fff;
    		color: #3c3c3c;
    		margin-top: 85px;
			}
	.home-content .select{
		position: absolute;
		left:0;
		top: 50px;
		width: 100%;
	}



	.total-cate-top a img{
		width: 100%;
		height: 188px;
		border: ;
	}

	.two ul{
		display: flex;
		width: 100%;
		}

	.two ul li{
		width: 25%;
	}
	.two ul li img{
		width: 100%;
		height: 100%;
	}
	.thr h2{
		width: 100%;
	}
	.thr h2 img{
			height: .7rem;
    		width: 100%;
	}


	.thr-content-list{
		width: 100%;
		overflow-y: auto;
	}
	.thr-content-list li{
		width: 100%;
		border: 8px solid rgb(224, 50, 26);
		border-top: none;
	}
	.thr-content-list li img{
		width: 100%;
	}
	.thr-content-list li dl{
		display: flex;
		justify-content: space-between;
		font-size: 16px;
	}
</style>
