export function doLogin (login, password) {
  return new Promise((resolve, reject) => {
    if (login === 'asd' && password === 'password') {
      resolve({ login: 'asd', email: 'test@test.com' })
    } else {
      reject({ status: 400 })
    }
  })
}
