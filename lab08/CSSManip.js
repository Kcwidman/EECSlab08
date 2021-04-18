document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#button").addEventListener("click", activate);
})

let activate = function() 
{
    let borderRed = document.querySelector("#borderRed").value
    let borderGreen = document.querySelector("#borderGreen").value
    let borderBlue = document.querySelector("#borderBlue").value
    let borderWidth = document.querySelector("#borderWidth").value

    document.querySelector("#manip").style.borderStyle = "solid"
    document.querySelector("#manip").style.borderColor = rgb(borderRed, borderGreen, borderBlue)
    document.querySelector("#manip").style.borderWidth = borderWidth

    let backgroundRed = document.querySelector("#backgroundRed").value
    let backgroundGreen = document.querySelector("#backgroundGreen").value
    let backgroundBlue = document.querySelector("#backgroundBlue").value
    document.querySelector("#manip").style.backgroundColor = rgb(backgroundRed, backgroundGreen, backgroundBlue)
}

let rgb = function(r, g, b)
{
    return "rgb("+r+","+g+","+b+")";
}