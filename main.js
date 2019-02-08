const userInput = document.querySelector("input");
const userName = document.querySelector(".user-name");

userInput.addEventListener('keyup', (e) => { 
    userName.textContent = e.target.value;
})
