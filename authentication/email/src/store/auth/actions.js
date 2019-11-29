import { Notify } from 'quasar'

export const createNewUser = async function ({ commit }, data) {
  const $fb = this.$fb
  const { email, password } = data
  commit('common/setLoading', true, { root: true })
  try {
    const res = await $fb.createUserWithEmail(email, password)
    return res.user
  } catch (err) {
    Notify.create({
      message: `An error as occured: ${err}`,
      color: 'negative'
    })
  } finally {
    commit('common/setLoading', false, { root: true })
  }
}

export const loginUser = async function ({ commit }, payload) {
  const $fb = this.$fb
  const { email, password } = payload
  commit('common/setLoading', true, { root: true })
  try {
    const res = await $fb.loginWithEmail(email, password)
    return res.user
  } catch (err) {
    Notify.create({
      message: `An error as occured: ${err}`,
      color: 'negative'
    })
  } finally {
    commit('common/setLoading', false, { root: true })
  }
}

export const logoutUser = async function ({ commit }, payload) {
  const $fb = this.$fb
  await $fb.logoutUser()
}