import { http } from "../../plugins/http";

export default {
    namespaced: true,

    state: {
        villesEndpoint: "communes",
        villes: []
    },

    getters: {
        villesEndpoint: state => state.villesEndpoint,
        villes: state => state.villes
    },

    actions: {
        getVilles({ commit, state }, params) {
            return new Promise((resolve, reject) => {
                http.get(state.villesEndpoint, { params: params })
                    .then(res => {
                        commit('VILLES', res.data);
                        resolve();
                    })
                    .catch((err) => {
                        reject(err)
                    });
            });
        }
    },

    mutations: {
        ['VILLES'](state, villes) {
            state.villes = villes;
        }  
    }
}