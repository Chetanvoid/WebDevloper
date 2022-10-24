const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    
   // for copy the hex-cpode automatically 
    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// initial  call for refrace the page
getColor();