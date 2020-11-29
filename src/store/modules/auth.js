export default {
    namespaced: true,
    state: {
        user: null,
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        isGuest (state) {
            return state.user === null || state.user.guest === true
        }
    }
}