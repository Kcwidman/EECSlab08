document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#leftButton").addEventListener("click", prev);
    document.querySelector("#rightButton").addEventListener("click", next);
})

let index = 0;
let imgsArr = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg", "imgs/5.jpg"]

let prev = function() 
{
    if(index == 0) index = 4;
    else index -= 1;
    document.querySelector("#slideshow").setAttribute("src", imgsArr[index]);
}

let next = function()
{
    if(index == 4) index = 0;
    else index += 1;
    document.querySelector("#slideshow").setAttribute("src", imgsArr[index]);
}