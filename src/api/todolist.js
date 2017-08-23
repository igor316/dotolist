import firebase from './firebase'

export async function index (uid) {
  const sanpshot = await firebase.database().ref(`/users/${uid}/todolist`).once('value')

  const res = sanpshot.val()

  if (!res) return []

  return Object.keys(res).filter(k => res.hasOwnProperty(k)).map(k => ({
    key: k,
    text: res[k].text,
    createdAt: res[k].createdAt,
  }))
}

export function create (uid, text, createdAt) {
  firebase.database().ref(`/users/${uid}/todolist`).push().set({
    text,
    createdAt: createdAt.toString(),
  })
}

export function remove (uid, key) {
  firebase.database().ref(`/users/${uid}/todolist/${key}`).remove()
}

export function onChange (uid, cb) {
  firebase.database().ref(`/users/${uid}/todolist`).on('value', snapshot => {
    const res = snapshot.val()

    if (!res) return []

    cb(Object.keys(res).filter(k => res.hasOwnProperty(k)).map(k => ({
      key: k,
      text: res[k].text,
      createdAt: res[k].createdAt,
    })))
  })
}
