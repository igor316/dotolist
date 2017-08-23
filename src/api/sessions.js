import firebase from './firebase'

export async function doLogin (email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password)

  return firebase.auth().currentUser
}

export async function createUser (email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password)

  const user = firebase.auth().currentUser

  await firebase.database().ref('/users').update({ [user.uid]: { email } })

  return user
}

export function currentAccount () {
  return firebase.auth().currentUser
}
