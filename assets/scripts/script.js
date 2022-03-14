const form = document.querySelector("#register-form");
const Fname = document.querySelector("#fname");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const RepeatPassword = document.querySelector("#r_password");
const gender = document.querySelector("#gender");

function showError(input) {
    const formInput = input.parentElement;
    formInput.className = "form-control error";
    // formInput.innerText = message;
}

function showSuccess(input) {
    const formInput = input.parentElement;
    formInput.className = "form-control success";
}

function checkRequired(ArrayInput) {
    ArrayInput.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, "All field is required");
        } else {
            showSuccess(input);
        }
    });
}

function checkEmail(input) {}
function checkPasswordMatch(input1, input2) {}
function checkLength(input, max, min) {}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hello");
    checkRequired([
        Fname,
        username,
        email,
        phone,
        password,
        RepeatPassword,
        gender,
    ]);
});
