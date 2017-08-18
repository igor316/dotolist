export function doLogin (login, password) {
  return new Promise((resolve, reject) => {
    if (password === 'password') {
      resolve({ login, email: 'test@test.com' })
    } else {
      reject({ status: 400 })
    }
  })
}
