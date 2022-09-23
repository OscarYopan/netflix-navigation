const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navEl = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
  navEl.forEach(nav => {
    nav.classList.add('visible')
  })
})

closeBtn.addEventListener('click', () => {
  navEl.forEach(nav => {
    nav.classList.remove('visible')
  })
})