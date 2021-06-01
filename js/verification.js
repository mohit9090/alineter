
const lowerLetter = document.getElementById("lowerLetter");
const capitalLetter = document.getElementById("capitalLetter");
const number = document.getElementById("number");
const minPwdLength = document.getElementById("minPwdLength");
const recheckPassword = document.getElementById("confirm-password");
const userPassword = document.getElementById("user-password");
const toggleUserPwd = document.getElementById("toggleUserPwd");
const toggleRecheckPwd = document.getElementById("toggleRecheckPwd");


const validators = [
  {
    validate : (val) => { return val.length; }
  },
  {
    validate : (val) => { return validateNumberField(val); }
  },
  {
    validate : (val) => { return validateEmail(val); }
  },
  {
    validate : (val) => { return validatePassword(val); }
  },
  {
    validate : (val) => { return validateRecheckPassword(val); }
  },
  {
    validate : (val) => { return validateCheckbox(val); }
  },
  {
    validate : (val) => { return validateMobileNum(val); }
  },
  {
    validate : (val) => { return validatePIN(val); }
  }
];

function validateNumberField(val) {
  let isNum = false;
  if(!val.length) {
    return isNum;
  }
  const numberRegex = /^\d+$/;
  isNum = numberRegex.test(val);
  return isNum;
}

function validateEmail(val) {
  let isEmail = false;
  if(!val.length) {
    return isEmail;
  }
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  isEmail =  emailRegex.test(val);
  return isEmail;
}

function hasLowerCase(val) {
  let lowerCaseRegex = /[a-z]/g;
  let hasLower = lowerCaseRegex.test(val);
  switchClass(hasLower, lowerLetter, "fulfilled--txt", "not-fulfilled--txt");
  return hasLower;
}

function hasUpperCase(val) {
  let upperCaseRegex = /[A-Z]/g;
  let hasUpper = upperCaseRegex.test(val); 
  switchClass(hasUpper, capitalLetter, "fulfilled--txt", "not-fulfilled--txt");      
  return hasUpper;
}

function hasNumbers(val) {
  let numberRegex = /[0-9]/g;
  let hasNumber = numberRegex.test(val);
  switchClass(hasNumber, number, "fulfilled--txt", "not-fulfilled--txt");
  return hasNumber;
}

function satisfyMinLength(val) {
  let gteMin = (val.length >= 8);
  switchClass(gteMin, minPwdLength, "fulfilled--txt", "not-fulfilled--txt");
  return gteMin;
}

function validatePassword(val) {

  let isLower = hasLowerCase(val);
  let isUpper = hasUpperCase(val);                  
  let isNumber = hasNumbers(val);
  let gteMin = satisfyMinLength(val); // greater than 8 characters
  
  if(recheckPassword.value.length > 0) {
    let isRecheckPwdMatched = validateRecheckPassword(recheckPassword.value);
    isRecheckPwdMatched ? recheckPassword.setAttribute("data-fulfill", "true") : recheckPassword.setAttribute("data-fulfill", "false");
    switchClass(isRecheckPwdMatched, recheckPassword, "fulfilled--all", "not-fulfilled--all");
  }

  if(isLower && isUpper && isNumber && gteMin) {
      replaceClass(toggleUserPwd, "not-fulfilled--all", "fulfilled--all");
      recheckPassword.removeAttribute("disabled");
      return true;
  } else {
    replaceClass(toggleUserPwd, "fulfilled--all", "not-fulfilled--all");
    disableRecheckPassword()
    return false;
  }

}

function disableRecheckPassword() {
  recheckPassword.value = "";
  recheckPassword.classList.remove("fulfilled--all", "not-fulfilled--all");
  recheckPassword.setAttribute("disabled", true);
  toggleRecheckPwd.classList.remove("fulfilled--all", "not-fulfilled--all");;         
}

function validateRecheckPassword(val) {
  let isSame = (userPassword.value === val);
  switchClass(isSame, toggleRecheckPwd, "fulfilled--all", "not-fulfilled--all");
  return isSame;
}

function validateCheckbox(val) {
  const tnc_checkbox = document.getElementById("accept-tnc");
  return tnc_checkbox.checked;
}

function validateMobileNum(val) {
  return val.length === 10 ? true : false;
}

function validatePIN(val) {
  return val.length === 6 ? true : false;
}


function ifValid(input, validatorID) {
  if (validatorID >= 0) {
    var result = validators[parseInt(validatorID)].validate(input.value);
    switchClass(result, input, "fulfilled--all", "not-fulfilled--all");
    result ? input.setAttribute("data-fulfill", "true") : input.setAttribute("data-fulfill", "false");
  }
}