<template>
	<div class="about">
		<h1>This is an about page</h1>

		<div class="search">
			<input v-model="params.codePostal" placeholder="Code Postal" />

			<button @click.prevent="search" :disabled="params.codePostal.length !== 5">
				Rechercher
			</button>
		</div>

		<div class="results">
			<ul>
				<li v-for="(v, idx) in villes" :key="idx">
					{{ v.nom }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "About",

	data() {
		return {
			params: { 
				codePostal: "" 
			}
		}
	},

	computed: {
		...mapGetters({
			villes: "villes/villes"
		})
	},

	methods: {
		...mapActions({
            getVilles: "villes/getVilles"
        }),

		search() {
			this.getVilles(this.params);
		}
	}
}
</script>

<style lang="scss" scoped>
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
		color: $primary;
	}
</style>