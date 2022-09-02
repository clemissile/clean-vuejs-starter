import { http } from '@/plugins/http';

export default {
  namespaced: true,

  state: {
    citiesEndpoint: '/communes',
    cities: [],
  },

  getters: {
    citiesEndpoint: state => state.citiesEndpoint,
    cities: state => state.cities,
  },

  actions: {
    getCitiesByZipCode({ commit, state }, zipCode) {
      return http
        .get(`${state.citiesEndpoint}?codePostal=${zipCode}`)
        .then(response => {
          commit('SET_CITIES', response.data);
        })
        .catch(error => {
          throw new Error(error);
        });
    },
  },

  mutations: {
    SET_CITIES(state, cities) {
      state.cities = cities;
    },
  },
};
