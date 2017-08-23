import { currentAccount } from '@/api/sessions'

export default () => () => !!currentAccount()
