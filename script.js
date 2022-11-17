const notificationsContainer = document.querySelectorAll(
  '.notification-container'
)
const circles = document.querySelectorAll('.circle')
const button = document.querySelector('.rightside')
let count = document.querySelector('.counter')
let number = circles.length

let html = `${number}`
count.innerHTML = html

notificationsContainer.forEach((content) => {
  const seen = content.children[0].children[1].children.namedItem('ss')
  content.addEventListener(
    'click',
    (e) => {
      content.setAttribute('style', 'background-color:white ')
      seen.style.display = 'none'
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
  notificationsContainer.forEach((content) => {
    content.setAttribute('style', 'background-color:white ')
  })
  circles.forEach((circle) => {
    circle.setAttribute('style', 'display:none')
  })
  html = 0
  count.innerHTML = html
})
