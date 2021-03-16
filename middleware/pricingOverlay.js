export default function ({ store }) {
  if (store.state.showOverlay === true) {
    store.commit("toggleOverlay")
  }
}
