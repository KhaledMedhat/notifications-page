const notificationsContent = document.querySelectorAll('.noti-content')
const points = document.querySelectorAll('.point')
const button = document.querySelector('.read')
let count = document.querySelector('.counter')
let number = points.length

let html = `${number}`
count.innerHTML = html

notificationsContent.forEach((content) => {
  content.addEventListener(
    'click',
    (e) => {
      content.setAttribute('style', 'background-color:white ')
      content.children[0].children[2].classList.remove('point')
      if (number !== 0) {
        html = `${number - 1}`
        number--
        count.innerHTML = html
      }
    },
    { once: true }
  )
})

button.addEventListener('click', (e) => {
  notificationsContent.forEach((content) => {
    content.setAttribute('style', 'background-color:white ')
  })
  points.forEach((point) => {
    point.setAttribute('style', 'display:none')
  })
  html = 0
  count.innerHTML = html
})
