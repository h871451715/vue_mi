<template>
	<div id="login">
		<header>
			<div class="login-header-contain">
				<img src="../../../assets/mi.jpg" class="login-header-img" />
				<p>小米账号登录</p>
			</div>
		</header>
		<section>
			<div class="login-content-one">
				<p>
					<input type="text" placeholder="邮箱/手机号/小米ID" name="username" />
				</p>
				<p>
					<input type="password" placeholder="密码" name="password" />
					<span></span>
				</p>

			</div>
			<div class="login-tip" ref="loginTip">{{msg}}</div>
			<div class="login-content-two">
				<button @click="Lgsend">登录</button>
			</div>
			<div class="login-content-thr">
				<button class='phone-lr'>
					<router-link to='/user/register'>手机短信登录/注册</router-link>
				</button>
			</div>
			<div class="login-content-four">
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
				<ol class="content-four-bottom">
					<li>
						<a href="#">立即注册</a>
					</li>
					<li>|</li>
					<li>
						<a href="#">忘记密码？</a>
					</li>
				</ol>
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
		name: 'Login',
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
			Lgsend() {
				var regu = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
				var regp = /^[a-zA-Z0-9]\w{5,17}$/
				var tip = document.getElementsByClassName('login-tip')[0]
				var username = document.getElementsByName('username')[0].value
				var password = document.getElementsByName('password')[0].value
				//				this.$store.dispatch('getUserData',{username,password})
				console.log(regu.test(username))
				console.log(regp.test(password))
				if(regu.test(username)) {
					if(regp.test(password)) {
						this.$axios.post('http://10.9.171.95:3000/user/login', `username=${username}&password=${password}`).then(
							res => {
								console.log("test", this.$refs.loginTip);
								console.log(res)
								
								res.data.msgCode == 0 ? this.msg = '用户名未注册' : res.data.msgCode == 1 ? this.msg = '登陆成功' : this.msg = '密码错误'
								this.$refs.loginTip.style.display = 'block'
								if(res.data.msgCode == 1){
									window.localStorage.setItem("u_token",res.data.token)
									location.href='/'
								}
								console.log(this.msg)
							})
					}
				} else {
					this.msg = '请输入用户名或密码'
					this.$refs.loginTip.style.display = 'block'
					console.log(this.msg)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#login {
		overflow: auto;
		height: 100%;
		padding: 0 20px;
	}
	
	.login-header-contain {
		padding: 40px 0 22px;
	}
	
	.login-header-img {
		height: 50px;
		width: 50px;
		margin: 0 auto 22px;
	}
	
	section {
		margin-bottom: 30px;
	}
	
	.login-content-one p {
		margin: 0 auto;
	}
	
	.login-content-one p input {
		width: 100%;
		padding: .12rem 0;
		outline: none;
		border: none;
		font-size: 0.16rem;
	}
	
	.login-content-one p:nth-child(1) input {
		border-top-left-radius: 0.15rem;
		border-top-right-radius: 0.15rem;
	}
	
	.login-content-one p:nth-child(2) input {
		border-bottom-left-radius: 0.15rem;
		border-bottom-right-radius: 0.15rem;
	}
	
	.login-tip {
		padding-top: 5px;
		display: none;
		color: orangered;
		font-size: 16px;
	}
	
	.login-content-two {
		padding-top: 24px;
		margin-bottom: 14px;
	}
	
	.login-content-two button {
		width: 100%;
		padding: .1rem 0;
		border-radius: .2rem;
		border: none;
		background: #33b4ff;
		outline: none;
		color: #fff;
		font-size: 0.16rem;
	}
	
	.login-content-thr {
		margin-bottom: 14px;
	}
	
	.login-content-thr button {
		width: 100%;
		padding: .1rem 0;
		border-radius: .2rem;
		background: #fff;
		outline: none;
		border: none;
		font-size: 0.16rem;
	}
	
	.login-content-four {
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
	
	.content-four-bottom li:nth-child(2) {
		margin: 0 20px;
	}
	
	.content-four-bottom li a {
		font-size: 16px;
	}
	
	footer ul {
		display: flex;
		justify-content: space-around;
		font-size: 16px;
	}
</style>