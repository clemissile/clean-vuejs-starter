<template>
	<div id="app">
		<Navigation />
		<transition name="fade" mode="out-in">
			<router-view />
		</transition>
		<Footer />
	</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "App",

	components: {
		Navigation,
		Footer
	}
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
