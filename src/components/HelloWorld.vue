<template>
	<div class="hello text-center my-5">
		<img alt="Vue logo" src="@/assets/img/logo.png">
		<h1>Welcome to clean-vuejs-starter !</h1>
		<p>
			For a good start to a great VueJS project, created by
			<a href="https://github.com/clemissile" target="_blank" rel="noopener">clemissile</a>.
		</p>

		<h3>Installed Vue Plugins</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
			<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
			<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
		</ul>

		<h3>CSS Frameworks</h3>
		<ul>
			<li><a href="https://getbootstrap.com/" target="_blank" rel="noopener">Bootstrap</a></li>
			<li><a href="https://materialdesignicons.com/" target="_blank" rel="noopener">Material Design Icons</a></li>
		</ul>

		<h3>Other plugins</h3>
		<ul>
			<li><a href="https://www.npmjs.com/package/vue-mq" target="_blank" rel="noopener">vue-mq</a></li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld'
}
</script>

<style lang="scss" scoped>
.hello {
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
}

</style>
