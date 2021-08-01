const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const otherDetails = document.getElementById("other-details");
const spouseSection = document.getElementById("spouse-section");
const spouseFName = document.getElementById("spouse-fname");
const spouseLName = document.getElementById("spouse-lname");
const modal = document.getElementById("modal");

var marriedStatus;
var gender;

const genderMaleButton = document.getElementById("male-button");
const genderFemaleButton = document.getElementById("female-button");

const marriedButton = document.getElementById("married-button");
const unmarriedButton = document.getElementById("unmarried-button");

const reset = document.getElementById("reset-button");
const save = document.getElementById("save-button");

const coolButton = document.getElementById("cool-button");

window.onload = function () {
  fname.focus();
};

genderMaleButton.addEventListener("click", (event) => {
  gender = "male";
  genderMaleButton.classList.add("color-green");
  genderFemaleButton.classList.remove("color-green");
  removeButtonError(genderMaleButton);
});
genderFemaleButton.addEventListener("click", (event) => {
  gender = "female";
  genderMaleButton.classList.remove("color-green");
  genderFemaleButton.classList.add("color-green");
  removeButtonError(genderMaleButton);
});
marriedButton.addEventListener("click", (e) => {
  marriedStatus = "married";
  marriedButton.classList.add("color-green");
  unmarriedButton.classList.remove("color-green");
  spouseSection.classList.add("set-visible");
  removeButtonError(marriedButton);
});
unmarriedButton.addEventListener("click", (e) => {
  marriedStatus = "unmarried";
  marriedButton.classList.remove("color-green");
  unmarriedButton.classList.add("color-green");
  spouseSection.classList.remove("set-visible");
  removeButtonError(marriedButton);
});
fname.addEventListener("keypress", (e) => {
  removeError(fname);
});
lname.addEventListener("keypress", (e) => {
  removeError(lname);
});
spouseFName.addEventListener("keypress", (e) => {
  removeError(spouseFName);
});
spouseLName.addEventListener("keypress", (e) => {
  removeError(spouseLName);
});
reset.addEventListener("click", (e) => {
  e.preventDefault();
  removeErrors();
  allClear();
});

coolButton.addEventListener("click", (e) => {
  modal.classList.remove("modal-visible");
  document.body.classList.remove("modal-open");
});
save.addEventListener("click", (e) => {
  e.preventDefault();
  const fnameVal = fname.value.trim();
  const lnameVal = lname.value.trim();
  const spouseFNameVal = spouseFName.value.trim();
  const spouseLNameVal = spouseLName.value.trim();
  let flag = true;

  if (!fnameVal) {
    setError(fname, "Please enter a valid first name");
    fname.focus();
    flag = false;
  }
  if (!lnameVal) {
    setError(lname, "Please enter a valid last name");
    if (fnameVal) {
      lname.focus();
    }
    flag = false;
  }
  if (!gender) {
    flag = false;
    setButtonError(genderMaleButton, "Please select a gender");
  }
  if (!marriedStatus) {
    flag = false;
    setButtonError(marriedButton, "Please select a marital status");
  }
  if (marriedStatus === "married") {
    if (!spouseFNameVal) {
      flag = false;
      setError(spouseFName, "Please enter a valid spouse first name");
      if (fnameVal && lnameVal) {
        spouseFName.focus();
      }
    }
    if (!spouseLNameVal) {
      flag = false;
      setError(spouseLName, "Please enter a valid spouse Last name");
      if (fnameVal && lnameVal && spouseFNameVal) {
        spouseLName.focus();
      }
    }
  }
  if (flag) allGood();
});

const allGood = () => {
  modal.classList.add("modal-visible");
  document.body.classList.add("modal-open");
  allClear();
};
const setError = (ele, msg) => {
  const item = ele.parentElement;
  const err = item.querySelector("small");
  err.innerText = msg;
  item.classList.add("error");
};

const removeError = (ele) => {
  const item = ele.parentElement;
  item.classList.remove("error");
};
const setButtonError = (ele, msg) => {
  const item = ele.parentElement.parentElement;
  const err = item.querySelector("small");
  err.innerText = msg;
  item.classList.add("error");
};
const removeButtonError = (ele, msg) => {
  const item = ele.parentElement.parentElement;

  item.classList.remove("error");
};
const removeErrors = () => {
  fname.parentElement.classList.remove("error");
  lname.parentElement.classList.remove("error");
  spouseFName.parentElement.classList.remove("error");
  spouseLName.parentElement.classList.remove("error");
  genderMaleButton.parentElement.parentElement.classList.remove("error");
  marriedButton.parentElement.parentElement.classList.remove("error");
};

const allClear = () => {
  fname.value = "";
  lname.value = "";
  marriedStatus = undefined;
  gender = undefined;
  spouseFName.value = "";
  spouseLName.value = "";
  otherDetails.value = "";
  marriedButton.classList.remove("color-green");
  unmarriedButton.classList.remove("color-green");
  genderMaleButton.classList.remove("color-green");
  genderFemaleButton.classList.remove("color-green");
  spouseSection.classList.remove("set-visible");
};
