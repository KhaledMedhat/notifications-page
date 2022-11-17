const notificationsContainer = document.querySelectorAll(
  '.notification-container'
)
const circles = document.querySelectorAll('.circle')
const button = document.querySelector('.rightside')
const message = document.querySelector('.rizky-message')
const rizky = document.getElementById('rizky')
let count = document.querySelector('.counter')
let number = circles.length

let html = `${number}`
count.innerHTML = html

notificationsContainer.forEach((content) => {
  const seen = content.children[0].children[1].children.namedItem('ss')
  content.addEventListener(
    'click',
    (e) => {
      rizky.children[0].children[1].children[4].style.backgroundColor = 'white'
      rizky.children[0].children[1].children[4].style.border =
        '0.5px solid hsl(219, 12%, 42%)'
      rizky.children[0].children[1].children[4].children[0].style.paddingTop =
        '5px'
      rizky.children[0].children[1].children[4].children[0].style.paddingBottom =
        '4px'

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
  message.style.backgroundColor = 'white'
  html = 0
  count.innerHTML = html
})
