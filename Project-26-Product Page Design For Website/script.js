let productImg = document.getElementById("productImg")
let btns = document.querySelectorAll(".btn")

btns[0].addEventListener("click", (e) => {
    productImg.src = "images/image1.png"
    btns.forEach(btn=>{
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
})

btns[1].addEventListener("click", (e) => {
    productImg.src = "images/image2.png"
    btns.forEach(btn=>{
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
})

btns[2].addEventListener("click", (e) => {
    productImg.src = "images/image3.png"
    btns.forEach(btn=>{
        btn.classList.remove("active")
    })
    e.target.classList.add("active")
 })




// Anoother way
// let productImg = document.getElementById("productImg");
// let btns = document.querySelectorAll(".btn");

// btns.forEach((btn, index) => {
//     btn.addEventListener("click", (e) => {
//         productImg.src = `images/image${index + 1}.png`;
        
        
//         btns.forEach(b => b.classList.remove("active"));

        
//         e.target.classList.add("active");
//     });
// });