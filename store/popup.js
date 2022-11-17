export const state = () => ({
  popupOpened: false,
  typeCallback: false,
  typeDemonstration: false,
  typeContent: false,
  arrayContent: []
})

export const mutations = {
  updateCallback (state, flag) {
    state.popupOpened = flag
    state.typeCallback = flag
  },
  updateDemonstration (state, flag) {
    state.popupOpened = flag
    state.typeDemonstration = flag
  },
  updateContent (state, { flag, array = [] }) {
    this.commit('popup/updateArrayContent', array)
    state.popupOpened = flag
    state.typeContent = flag
  },
  updateArrayContent (state, array) {
    state.arrayContent = array
  }
}
