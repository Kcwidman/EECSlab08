document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#button").addEventListener("click", validator);
})

let validator = function() 
{
    let upperInput = document.querySelector("#upperInput").value;
    let lowerInput = document.querySelector("#lowerInput").value;
    let result = "";
    upperInput += "";
    lowerInput += "";
    if(upperInput != lowerInput)
    {
        result += "The passwords don't match\n";
    }
    if(upperInput.length < 8 || lowerInput.length < 8)
    {
        result += "Must be 8 or more characters\n";
    }
    if(!result)
    {
        result = "Passwords validated\n";
    }
    document.querySelector("#result").innerText = result;
}