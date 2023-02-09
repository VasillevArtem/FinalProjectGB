
const trialButton = document.querySelector(".sign-button");
const inputPasswordElement = document.querySelector(".input_pass");
const repeatInputPasswordElement = document.querySelector(".input_pass-re");

trialButton.addEventListener("click", function (e) {
  if (
    inputPasswordElement.value !== repeatInputPasswordElement.value ||
    inputPasswordElement.value === "" ||
    repeatInputPasswordElement.value === ""
  ) {
    e.preventDefault();
    if (inputPasswordElement.classList.contains("input-correct")) {
      inputPasswordElement.classList.remove("input-correct");
      repeatInputPasswordElement.classList.remove("input-correct");
    }
    inputPasswordElement.classList.add("input-error");
    repeatInputPasswordElement.classList.add("input-error");
  } else {
    e.preventDefault();
    if (inputPasswordElement.classList.contains("input-error")) {
      inputPasswordElement.classList.remove("input-error");
      repeatInputPasswordElement.classList.remove("input-error");
    }
    inputPasswordElement.classList.add("input-correct");
    repeatInputPasswordElement.classList.add("input-correct");
  }
});
