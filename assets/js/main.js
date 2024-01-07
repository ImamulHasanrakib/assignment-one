const ageInput = document.querySelector('.age_details_wrapper .age_input')
const submitBtn = document.querySelector('.age_details_wrapper .submit_btn')
const resetBtn = document.querySelector('.age_details_wrapper .resetBtn')
const ageCard = document.querySelectorAll('.age_card')
const navItems = document.querySelector('.navbar .nav_items')
const navToggler = document.querySelector('.navbar .nav_toggler')

ageInput.addEventListener('input', (e) => {
  const ageValue = Number(e.target.value)

  if (ageValue === 0) {
    submitBtn.classList.remove('active')
  } else {
    submitBtn.classList.add('active')
  }
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()

  resetBtn.style.opacity = '1'
  resetBtn.style.pointerEvents = 'all'

  const ageValue = ageInput.value

  const activeIndex =
    ageValue < 18 ? 0 : ageValue >= 18 && ageValue <= 30 ? 1 : 2
  console.log(activeIndex)

  const AgeCardNumberArray = Array.from(
    { length: ageCard.length },
    (_, index) => index
  )
  const disableIndexes = AgeCardNumberArray.filter(
    (index) => index !== activeIndex
  )

  ageCard.forEach((card) => {
    ageCard[activeIndex].classList.add('active')
    disableIndexes.forEach((disableIndex) => {
      ageCard[disableIndex].classList.add('disable')
    })
  })

  submitBtn.style.opacity = '0.5'
  submitBtn.style.pointerEvents = 'none'
})

resetBtn.addEventListener('click', (e) => {
  e.preventDefault()
  resetBtn.style.opacity = '0.5'
  resetBtn.style.pointerEvents = 'none'

  submitBtn.style.opacity = '1'
  submitBtn.style.pointerEvents = 'all'

  ageCard.forEach((card) => {
    card.classList.remove('disable')
    card.classList.remove('active')
  })
  ageInput.value = ''
})

navToggler.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('active')
  navItems.classList.toggle('active')
  navToggler.classList.toggle('active')
})
