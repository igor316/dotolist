export function index (login) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([{
        text: `The First for ${login}`,
        createdAt: new Date(),
      }, {
        text: `The Second for ${login}`,
        createdAt: new Date(),
      }, {
        text: `The Third for ${login}`,
        createdAt: new Date(),
      }])
    }, 2000)
  })
}
