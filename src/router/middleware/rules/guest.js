import store from "../../../store"

export default  (to, from, next) => {
    if (store.getters['auth/_auth']) {
        next({name: 'Dashboard'})
    } else {
        next()
    }
}