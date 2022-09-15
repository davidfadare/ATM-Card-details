// function validateForm() {
//   let x = document.forms['myForm']['fname'].value;
//   if (x == '') {
//     alert('Name must be filled out');
//     return false;
//   }
// }

// const correctInput = document.querySelector('.closed');
// const backToggle = document.querySelector('.open');

// correctInput.addEventListener('Click', () => {
//   if (backToggle.classList.contains('open')) {
//     backToggle.classList.add('active');
//     correctInput.classList.remove('active');
//   }
// });

// backToggle.addEventListener('click', () => {
//     if (correctInput.classList.contains('closed')) {
//       correctInput.classList.add('active');
//       backToggle
//       .classList.remove('active');
//     }
//   });

const cardName = document.querySelector('.card-holder-input');
const defaultCardName = document.querySelector('.bottom-left1');

const cardNumber = document.querySelector('.card-number-input');
const defaultCardNumber = document.querySelector('.centered1');

const monthInput = document.querySelector('.month-input');
const defaultMonthInput = document.querySelector('.default-month-input');

const yearInput = document.querySelector('.year-input');
const defaultYearInput = document.querySelector('.default-year-input');

const cvcNumber = document.querySelector('.cvc-input');
const defaultCvcNumber = document.querySelector('.centered2');

const expiry = Array.from(document.querySelectorAll('.expiry'));
const submit = document.getElementById('submit');
const thankYou = document.getElementById('thank-you-header');
const confirmSection = document.querySelector('.confirmation');
const continueBtn = document.getElementById('continue');
const form = document.getElementById('myform');
const expiryErrorMsg = document.getElementById('expiry-error');

cardName.oninput = () => {
  // let cardNameInput = cardName.value;
  // let formattedCardName = cardNameInput.replace(/^[A-Z a-z]+$/);
  // cardName.value = formattedCardName;
  // let  NameRaise = cardName.value;
  // let formattedCase = NameRaise.uppercase;
  // cardName.value = formattedCase;
  defaultCardName.innerText = cardName.value;
  // if(defaultCardName.innerHTML == "") {
  //   defaultCardName.innerHTML = cardName.placeholder;
  // }
};

cardNumber.oninput = () => {
  // defaultCardNumber.innerText = cardNumber.value;
  let cardNumberInput = cardNumber.value;

  let formattedCardNumber = cardNumberInput.replace(/[^\d]/g, '');
  formattedCardNumber = formattedCardNumber.substring(0, 16);

  let cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
  if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(' ');
  }
  if (cardNumberInput !== formattedCardNumber) {
    cardNumber.value = formattedCardNumber;
  }
  defaultCardNumber.innerText = cardNumber.value;
  //  if(cardNumber.value === ""){
  //    defaultCardName.innerHTML = cardNumber.placeholder;
  //  }
};

monthInput.oninput = () => {
  defaultMonthInput.innerText = monthInput.value;
};

yearInput.oninput = () => {
  defaultYearInput.innerText = yearInput.value;
};

cvcNumber.oninput = () => {
  // defaultCvcNumber.innerText = cvcNumber.value;
  let cvcNumberInput = cvcNumber.value;
  let formattedCvc = cvcNumberInput.replace(/[^\d]/g, '');
  formattedCvc = formattedCvc.substring(0, 3);
  cvcNumber.value = formattedCvc;
  // if (cvcNumber.value === ""){
  //   defaultCvcNumber.innerHTML ="000";
  // } else {
  //   defaultCvcNumber.innerHTML = cvcNumber.value;
  // }
  defaultCvcNumber.innerText = cvcNumber.value;
};

function massValidate() {
  function validateName() {
    let cardholderExp = /^[A-Z a-z]+$/;
    let errorMsg = document.getElementById('errorMsg');
    if (cardName.value.match(cardholderExp)) {
      errorMsg.textContent = '';
    } else {
      errorMsg.innerHTML = 'Please enter cardholder name!';
    }
  }

  function validateNumber() {
    let cardNumError = document.getElementById('card-num-error');
    if (cardNumber.value == '') {
      cardNumError.innerHTML = 'Wrong format, numbers only';
    } else if (cardNumber.value.length > 0 && cardNumber.value.length < 16) {
      cardNumError.innerHTML = 'Insufficient numbers';
    } else {
      cardNumError.innerHTML = '';
    }
  }

  function validateCvc() {
    let cvcErrorMsg = document.getElementById('error-cvc');
    if (cvcNumber.value == '') {
      cvcErrorMsg.innerHTML = 'Wrong format, numbers only';
    } else if (cvcNumber.value.length > 0 && cardNumber.value.length < 3) {
      cvcErrorMsg.innerHTML = 'Insufficient numbers';
    } else {
      cvcErrorMsg.innerHTML = '';
    }
  }

  validateName();
  validateNumber();
  validateCvc();

  if (
    defaultCardName.innerHTML == ' JANE APPLESEED ' ||
    defaultCardNumber.innerHTML == '0000 0000 0000 0000' ||
    defaultMonthInput.innerHTML == '00' ||
    defaultYearInput.innerHTML == '00' ||
    defaultCvcNumber.innerHTML == '000' ||
    (cardNumber.value.length > 0 && cardNumber.value.length < 16)
  ) {
    return false;
  } else {
    return true;
  }
}

submit.addEventListener('click', function () {
  massValidate();

  if (massValidate() == false) {
    event.preventDefault();
  } else {
    event.preventDefault();

    form.classList.add('hidden');
    confirmSection.classList.remove('hidden');
  }
});

continueBtn.addEventListener('click', function () {
  event.preventDefault();
  confirmSection.classList.add('hidden');
  form.classList.remove('hidden');
  defaultCardName.innerHTML == ' JANE APPLESEED ';
  defaultCardNumber.innerHTML == '0000 0000 0000 0000';
  defaultMonthInput.innerHTML == '00';
  defaultYearInput.innerHTML == '00';
  defaultCvcNumber.innerHTML == '000';
  cardName.value = '';
  cardNumber.value = '';
  expiry[0] = '';
  expiry[1] = '';
  cvcNumber.value = '';
  expiryErrorMsg.innerHTML = '';
});
