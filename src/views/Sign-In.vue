<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
	<div class="sign-in">
		
		<a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle" style="width: 100%;">

			<!-- Sign In Form Column -->
			<a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
				<h1 class="mb-15">Sign In</h1>
				<h5 class="font-regular text-muted">Enter your username and password to sign in</h5>

				<!-- Sign In Form -->
				<a-form
					id="components-form-demo-normal-login"
					:form="form"
					class="login-form"
					@submit="handleSubmit"
					:hideRequiredMark="true"
				>
					<a-form-item class="mb-10" label="Username" :colon="false">
						<a-input 
						v-decorator="[
						'username',
						{ rules: [{ required: true, message: 'Please input your username!' }] },
						]" placeholder="Username" />
					</a-form-item>
					<a-form-item class="mb-5" label="Password" :colon="false">
						<a-input
						v-decorator="[
						'password',
						{ rules: [{ required: true, message: 'Please input your password!' }] },
						]" type="password" placeholder="Password" />
					</a-form-item>
					<!-- <a-form-item class="mb-10">
    					<a-switch v-model="rememberMe" /> Remember Me
					</a-form-item> -->
					<a-form-item>
						<a-button type="primary" block html-type="submit" class="login-form-button" :loading="loading">
							SIGN IN
						</a-button>
					</a-form-item>
				</a-form>
				<!-- / Sign In Form -->

				<!-- <p class="font-semibold text-muted">Don't have an account? <router-link to="/sign-in" class="font-bold text-dark">Sign Up</router-link></p> -->
			</a-col>
			<!-- / Sign In Form Column -->

			<!-- Sign In Image Column -->
			<a-col :span="24" :md="12" :lg="12" :xl="12" class="text-center">
				<img class="banner-logo" src="images/fbise-logo.jpg" alt="">
			</a-col>
			<!-- Sign In Image Column -->

		</a-row>
		
	</div>
</template>

<script>
	import api from '../services/api';

	export default ({
		data() {
			return {
				loading: false,
				// Binded model property for "Sign In Form" switch button for "Remember Me" .
				rememberMe: true,
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit(e) {
				e.preventDefault();
				
				this.form.validateFields((err, values) => {
					if ( !err ) {
						this.loading = true;
						api.post('/users/login', {
							username: values.username,
							password: values.password
						})
						.then(response => {
							// When a user logs in or obtains an authentication token
							localStorage.setItem('authToken', response.data.token);
							localStorage.setItem('role', response.data.role);
							if(response.data.role === 'management') this.$router.push({ name: 'Landing Page' });
							else if(response.data.role === 'checker') this.$router.push({ name: 'Upload paper' });
							else alert('page design is in progress');
							this.loading = false;
						})
						.catch(error => {
							this.loading = false;
							console.error(error);
						});
					}
				});
			},
		},
	})

</script>

<style lang="scss">
	body {
		background-color: #ffffff;
	}
	.sign-in{
		height: calc(100vh - 40px);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.banner-logo{
		width: 100%;
		max-width: 300px ;
	}
</style>