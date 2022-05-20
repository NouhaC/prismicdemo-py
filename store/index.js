export const state = () => ({
  partials: {},
})

export const mutations = {
  SET_PARTIALS(state, partials) {
    state.partials = partials
  },
  SET_ERROR(state, error) {
    state.partials = error
  },
}

// Fetch the Prismic partials (header, navigation & footer) from prismic and add them to the store.
export const actions = {
  async fetchPartials({ commit }, $prismic) {
    try {
      const partails = (await $prismic.api.getSingle('partials')).data

      commit('SET_PARTIALS', partails)
    } catch (e) {
      const error = 'Please create a menu document'

      commit('SET_ERROR', error)
    }
  },
}
