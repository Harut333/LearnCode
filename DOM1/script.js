let sign_page = document.querySelector(".container")

let sign_email = document.getElementById("sign_input_em")
let sign_psw = document.getElementById("sign_input_pass")
let age = document.getElementById("sign_input_age")
let sign_btn = document.getElementById("sign_btn")
let login_page = document.getElementById("loginn")


//login


let login_email = document.getElementById("login_email")
let login_psw = document.getElementById("login_psw")

sign_btn.addEventListener("click", () => {
    if (age.value >= 18) {

        if (sign_email.value.length !== 0 && sign_psw.value.legth !== 0) {

            sign_page.style.display = "none"
        }
    }
    else {
        alert("you must be ove 18 years old")
    }
})