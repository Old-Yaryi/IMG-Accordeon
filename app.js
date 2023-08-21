const slides = document.querySelectorAll('.slide')
for (let slide of slides){
  slide.addEventListener('click', () => {
    clearActiveClasess()
    slide.classList.add('active')
  })
}
function clearActiveClasess() {
  slides.forEach((slide)=>{
    slide.classList.remove('active')
  })
}