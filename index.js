
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

document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button
    const createAccountButton = document.getElementById("create-account-button");

    // Add an event listener to the button
    createAccountButton.addEventListener("click", function() {
        // Redirect to the registration page when the button is clicked
        window.location.href = "registration.html";
    });
});


// Validation form for the petition
const validateForm = () => {
  let containsErrors = false;
  const petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) 
  {
    const trimmedValue = petitionInputs[i].value.trim();
    console.log(`Checking input: ${petitionInputs[i].name},                 trimmed value: '${trimmedValue}', length:           ${trimmedValue.length}`);
    if (trimmedValue.length <= 2) {
      console.log(`Error found in input: ${petitionInputs[i].name}`);
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Specific validation for email
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;
  if (!emailValue.includes('.com')) {
      containsErrors = true;
      emailInput.classList.add('error');
  } else {
      emailInput.classList.remove('error');
  }

  if (!containsErrors) {
    console.log("No errors found. Adding signature.");
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }
  
 
};



signNowButton.addEventListener('click', validateForm);
