let themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function

const toggleDarkMode = () => {

   document.body.classList.toggle("dark-mode");


}

themeButton.addEventListener("click", toggleDarkMode);