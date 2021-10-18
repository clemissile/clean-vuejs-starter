export default {
    namespaced: true,

    state: {
    },

    getters: {
        getRoute: state => (route) => {
            return {
                name: `${route}`
            }
        }
    },

    actions: {
    },

    mutations: {
    }
}