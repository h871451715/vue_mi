<template>
	<div id="register">
		<header>
			<div class="register-header-contain">
				<img src="../../../assets/mi.jpg" class="register-header-img" />
				<p>小米账号登录</p>
			</div>
		</header>
		<section>
			<div class="register-content-one">
				<p>
					<!--<span class="bef-phone">+86</span>-->
					<input type="text" placeholder="手机号" ref='username' />
				</p>
				<p>
					<input type="password" placeholder="密码"  ref='password'/>
					
				</p>

			</div>
			<!--提示-->
			<div class='register-tip' ref="registerTip">{{msg}}</div>
			<div class="register-content-two">
				<button @click="Register">立即登录/注册</button>
			</div>
			<div class="register-content-thr">
				<button class='phone-lr'>
					<router-link to='/user/login'>用户名密码登录</router-link>
				</button>
			</div>
			<div class="register-content-four">
				<fieldset class="content-four-tit">
					<legend>其他方式登录</legend>
				</fieldset>
				<ul class="content-four-list">
					<li>
						<a href="#">
							<span class="iconfont icon-QQ"></span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="iconfont icon-xinlang"></span>
						</a>
					</li>
					<li>
						<a href="#">
							<span class="iconfont icon-zhifubao"></span>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<footer>
			<ul>
				<li>
					<a href="#">简体</a>
				</li>
				<li>|</li>
				<li>
					<a href="#">繁体</a>
				</li>
				<li>|</li>
				<li>
					<a href="#">English</a>
				</li>
				<li>|</li>
				<li>
					<a href="#">常见问题</a>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'Register',
		data() {
			return {
				msg: ''
			}
		},
		computed: {
			inp() {
				return this.msg

			}
		},
		methods: {
			Register() {
				var regu = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				var regp = /^[a-zA-Z0-9]\w{5,17}$/
				var username = this.$refs.username.value
				var password = this.$refs.password.value
				console.log(regu.test(username))
				if(regu.test(username)) {
					if(regp.test(password)) {
						this.$axios.post('http://10.9.171.95:3000/user/reg', `username=${username}&password=${password}`).then(
							res => {
								console.log("test", this.$refs.registerTip);
								//console.log(res.data)
								//tip.style.display = 'block'
								res.data.msgCode == 0 ? this.msg = '用户名未注册' :this.msg = '注册成功'
								this.$refs.registerTip.style.display = 'block'
								console.log(this.msg)
							})
						}
				} else {
					this.msg = '请输入正确的手机号'
					this.$refs.registerTip.style.display = 'block'
					console.log(this.msg)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#register {
		overflow: auto;
		height: 100%;
		padding: 0 20px;
	}
	
	.register-header-contain {
		padding: 40px 0 22px;
	}
	
	.register-header-img {
		height: 50px;
		width: 50px;
		margin: 0 auto 22px;
	}
	
	section {
		margin-bottom: 30px;
	}
	
	.register-content-one p {
		margin: 0 auto;
	}
	
	.register-content-one p input {
		width: 100%;
		padding: .12rem 0;
		outline: none;
		border: none;
		font-size: 0.16rem;
	}
	/*.register-content-one p .bef-phone{
		display:inline-block;
		width: 40px;
		padding: 20px 0;
	}*/
	.register-content-one p:nth-child(1) input {
		border-top-left-radius: 0.15rem;
		border-top-right-radius: 0.15rem;
	}
	
	.register-content-one p:nth-child(2) input {
		border-bottom-left-radius: 0.15rem;
		border-bottom-right-radius: 0.15rem;
	}
	
	.register-tip {
		padding-top: 5px;
		display: none;
		color: orangered;
		font-size: 16px;
	}
	
	.register-content-two {
		padding-top: 24px;
		margin-bottom: 14px;
	}
	
	.register-content-two button {
		width: 100%;
		padding: .1rem 0;
		border-radius: .2rem;
		border: none;
		background: #33b4ff;
		outline: none;
		color: #fff;
		font-size: 0.16rem;
	}
	
	.register-content-thr {
		margin-bottom: 14px;
	}
	
	.register-content-thr button {
		width: 100%;
		padding: .1rem 0;
		border-radius: .2rem;
		background: #fff;
		outline: none;
		border: none;
		font-size: 0.16rem;
	}
	
	.register-content-four {
		padding-top: 15px;
	}
	
	.content-four-tit {
		border: none;
		border-top: 1px dashed #bdbdbd;
		padding-top: 10px;
	}
	
	.content-four-list {
		padding-top: 10px;
		display: flex;
		justify-content: center;
	}
	
	.content-four-list li span {
		font-size: 45px;
	}
	
	.content-four-list li:nth-child(1) span {
		color: #0288d1;
	}
	
	.content-four-list li:nth-child(2) span {
		color: #d32f2f;
		margin: 0 48px;
	}
	
	.content-four-list li:nth-child(3) span {
		color: #00aaee;
	}
	
	.content-four-bottom {
		padding-top: 50px;
		display: flex;
		justify-content: center;
	}
	
	
	footer ul {
		display: flex;
		justify-content: space-around;
		font-size: 16px;
	}
</style>