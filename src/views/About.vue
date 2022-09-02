<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="search">
      <input v-model="zipCode" placeholder="Code Postal" />

      <button @click.prevent="search" :disabled="zipCode.length !== 5">
        Rechercher
      </button>
    </div>

    <div class="results">
      <ul>
        <li v-for="(c, idx) in cities" :key="idx">
          {{ c.nom }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'About',

  data() {
    return {
      zipCode: '',
    };
  },

  computed: {
    ...mapGetters({
      cities: 'cities/cities',
    }),
  },

  methods: {
    ...mapActions({
      getCitiesByZipCode: 'cities/getCitiesByZipCode',
    }),

    search() {
      this.getCitiesByZipCode(this.zipCode);
    },
  },
};
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
