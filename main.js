var userInput = document.getElementById("user-input");
var userName = document.getElementById("user-name");

userInput.addEventListener('keyup', (event) => { 
    userName.textContent = event.target.value;
})
