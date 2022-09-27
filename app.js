
let sliderWrapper = document.querySelector('.sliderWrapper')
const list = document.querySelectorAll('li');

list.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        console.log("uclicked" + index)
        sliderWrapper.style.transform = `translateX(${-100 * index} vw)`
    })
})