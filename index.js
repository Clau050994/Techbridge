
//change to black mode
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

   document.body.classList.toggle("dark-mode");


}

themeButton.addEventListener("click", toggleDarkMode);


//Sign the form
let signNowButton = document.getElementById("sign-now-button");

let count = 3;

const addSignature = () => {
  const name = document.getElementById('name').value; 
  const hometown = document.getElementById('hometown').value; 
  const email = document.getElementById('email').value; 

  
  // Create a new paragraph element for the new signature
  const newSignature = document.createElement('p');

  // Format the new signature
  newSignature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

  // Find the signatures section on the page
  const signaturesSection =document.querySelector('.signatures');

  const oldCounter = document.getElementById('counter');
  oldCounter.remove()
  // Append the new signature to the signatures section
  signaturesSection.appendChild(newSignature);

  
  //Increase the count
  count = count + 1;
  const newCounter = document.createElement('p');
  newCounter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;
  newCounter.id = 'counter';
  signaturesSection.appendChild(newCounter);
  
}

// Add a click event listener to the sign now button
signNowButton.addEventListener('click', addSignature);



