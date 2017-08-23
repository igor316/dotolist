import * as firebase from 'firebase'
import config from '../config'

firebase.initializeApp(config)

if (process.env.NODE_ENV === 'development') {
  window.firebase = firebase
}

export default firebase
