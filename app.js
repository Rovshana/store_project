
let sliderWrapper = document.querySelector('.sliderWrapper')

const list = document.querySelectorAll('li');
// products
const currentProductImg = document.querySelector('.productImg');
        const productBrand = document.querySelector('.productBrand');
        const productPrice = document.querySelector('.productPrice');
        const productSizes = document.querySelectorAll('.size');
        const productColors = document.querySelectorAll('.color');
// product array
let products = [
    {id: 1,
        brand: "Hippie",
        price: 180,
        colors: [{
            code: "white",
            img: "./images/white_shoe1.png"
        },
        {
            code: "black",
            img: "./images/nike-black1.png"
        }
    ]
    },
    {id: 2,
        brand: "Blazer",
        price: 119,
        colors: [
            {
code: "black",
img: "./images/black_shoe1.png"
            },
        {
            code: "pink",
            img: "./images/pink_blazer.png"
        }
        ]
    },
    {id: 3,
        brand: "Air Force",
        price: 130,
        colors: [{
            code: "gray",
            img: "./images/sneaker1.png"

        },
            {
            code: "white",
            img: "./images/shoe_white.png"
        }
    ]

    },
    {id: 4,
        brand: "Jordon",
        price: 130,
        colors:[{
code: "blue",
img: "./images/jordon1.png"
        },
            
            {
            code: "yellow",
            img: "./images/yellow_shoe.png"
        }
    ]
    }
]

let choosenProduct = products
// slider start
list.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        // console.log("uclicked" + index)
        // current 
        sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
        // change chossen product
        const choosenProduct = products[index]
        console.log(choosenProduct)
        
        // change  text of product
        productBrand.textContent = choosenProduct.brand;
        productPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img
        console.log(currentProductImg)

        // changeing color of product
         productColors.forEach((item, index)=>{
            item.style.backgroundColor = choosenProduct.colors[index].code
         })



    })
})


// changing product color by clicking color of product
productColors.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        console.log('u clicked')
        currentProductImg.src = choosenProduct.colors[index].img
        console.log(currentProductImg)
    })
})


// changing product sizes 
productSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        productSizes.forEach((size)=>{
            size.style.backgroundColor = "white"
        size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})


// modal
const productBtn = document.querySelector('.productBtn');
const close = document.querySelector(".close")
const payment = document.querySelector(".payment");


productBtn.addEventListener('click', ()=>{
    payment.style.display ="flex"
});

close.addEventListener('click', ()=>{
    payment.style.display = "none"
})