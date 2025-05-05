let hearts = document.querySelectorAll(".heart")


//add to favorite
hearts.forEach((heart) => {
    heart.addEventListener("click",(e)=>{
        e.target.classList.toggle("fill-[#b1b1b1]")
        e.target.classList.toggle("fill-red-500")
    })
})