function myFunction() {
    

  }

function comingSoon() {
    alert("COMING SOON !");

  }


// Hamburger menu ------------------
  
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});  

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

// Form Validation -----------------------

const form = document.getElementById('myForm');
const username = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
const phone = document.getElementById('inputPhone');
const dropdown = document.getElementById("inputDropdown");
console.log(dropdown)

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')

};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  
  

  if(usernameValue === '') {
      setError(username, 'Username is required');
  } else {
      setSuccess(username);
  }

  if(emailValue === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }

  if(phoneValue === '') {
      setError(phone, 'Phone number is required');
  } else if (phoneValue.length < 9 ) {
      setError(phone, 'Phone field must be at least 9 number.')
  } else {
      setSuccess(phone);
  }

  if(dropdown.value === 'Select') {
    setError(dropdown, 'Language is required');
} else {
    setSuccess(dropdown);
}
  

};

// EMAILJS -----------------------------------------

function sendMail() {
  var params = {
    inputName: document.getElementById('inputName').value,
    inputEmail: document.getElementById('inputEmail').value,
    inputPhone: document.getElementById('inputPhone').value,
    inputDropdown: document.getElementById('inputDropdown').value,

  };


const serviceID = "service_d4bic7s"
const templateID = "template_nzphdgn"

emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputDropdown").value = "";
    console.log(res);
    alert("your message sent successfully!");
  }).catch((err) => console.log(err));
  
};
