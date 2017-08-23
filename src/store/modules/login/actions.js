import { sessions } from '../../../api'
import { DEFAULT_SET_LOCATION } from '@/store/plugins/router'
import { getValues } from '@/store/plugins/form'
import { createActionHelpers } from 'vuex-loading'
const { startLoading, endLoading } = createActionHelpers({
  moduleName: 'loading',
})

export async function doLogin ({ dispatch, commit }, { redirect, mode }) {
  const values = getValues('login')

  try {
    const res = await startLoading(dispatch, 'doLogin', () => {
      if (mode === 'Login') {
        return sessions.doLogin(values.email, values.password)
      }

      return sessions.createUser(values.email, values.password)
    })

    await dispatch('accountVerified', { redirect, accountData: { email: res.email, uid: res.uid } })

    endLoading(dispatch, 'doLogin')
  } catch (error) {
    console.error(error)
  }
}

export async function accountVerified ({ dispatch, commit }, { redirect, accountData }) {
  await dispatch(DEFAULT_SET_LOCATION, { path: redirect }, { root: true })

  commit('mainLayout/currentAccount', accountData, { root: true })
}
