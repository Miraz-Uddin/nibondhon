(function () {
  const main_form = document.querySelector("#main_form");
  const name_field = document.querySelector("#name_field");
  const username_field = document.querySelector("#username_field");
  const email_field = document.querySelector("#email_field");
  const phone_field = document.querySelector("#phone_field");
  const slug_field = document.querySelector("#slug_field");
  const password_field = document.querySelector("#password_field");
  const portfolio_field = document.querySelector("#portfolio_field");

  name_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, nameValidation(this.value));
  });
  username_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, usernameValidation(this.value));
  });
  email_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, emailValidation(this.value));
  });
  phone_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, false);
  });
  slug_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, false);
  });
  password_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, false);
  });
  portfolio_field.addEventListener("input", function (e) {
    e.preventDefault();
    popupMessage(this.id, false);
  });

  main_form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valueList = Array.from(e.target.children);
    isEmpty(valueList);
  });

  function popupMessage(fieldName, bool) {
    let isTrue = bool;
    const bad = document.querySelector(`#${fieldName}_error`);
    const good = document.querySelector(`#${fieldName}_success`);
    if (!isTrue) {
      if (Array.from(bad.classList).includes("d-none"))
        bad.classList.remove("d-none");
      good.classList.add("d-none");
    } else {
      if (Array.from(good.classList).includes("d-none"))
        good.classList.remove("d-none");
      bad.classList.add("d-none");
    }
  }

  function isEmpty(valueList) {
    let onlyInputs = valueList.filter((obj) => {
      if (obj.children[1] == "undefined" || obj.children[1] == null)
        return false;
      return true;
    });
    onlyInputs.map((x) => {
      if (Array.from(x.children[1].classList).includes("has-bug"))
        x.children[1].classList.remove("has-bug");
    });

    let problemIndex = -1;
    let booleanVal = false;
    for (let p = 0; p < onlyInputs.length; p++) {
      if (Array.from(onlyInputs[p].children[1].value).length == 0) {
        booleanVal = true;
        problemIndex = p;
        break;
      }
    }
    if (booleanVal)
      valueList[problemIndex].children[1].classList.add("has-bug");
  }

  function nameValidation(val) {
    return /^[a-zA-Z]{5,}$/.test(val);
  }

  function usernameValidation(val) {
    return /^[\S]{5}$/.test(val);
  }

  function emailValidation(val) {
    return /^\w{2,}@\w{2,20}\.\w{2,5}$/.test(val);
  }
})();
