document.getElementById("contact-form").onsubmit = () => {

    let isValid = true;

    clearErrors();

    // first and last name validation
    let fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    let lname = document.getElementById("lname").value.trim();
    if (lname === "") {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }

    // mailing list validation
    let mailListSelected = false;
    let mailList = document.getElementById("mail-list");

    if (mailList.checked) {
        mailListSelected = true;
    }

    // email validation
    let email = document.getElementById("email").value.trim();

    // check if email is valid
    if (email !== "") {
        if (!email.includes("@") || !email.includes(".")) {
            document.getElementById("err-email").style.display = "block";
            isValid = false;
        }
    }

    // email required if mailing list is checked
    if (mailListSelected && email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // LinkedIn  validation 
    let linkedin = document.getElementById("Linkedin").value.trim();

    if (linkedin !== "") {
    if (!linkedin.startsWith("https://linkedin.com/in/")) {
        document.getElementById("err-linkedin").style.display = "block";
        isValid = false;
    }
    }

    // How did we meet validation
    let hdwm = document.getElementById("HDWM").value;
    if (hdwm === "none") {
        document.getElementById("err-HDWM").style.display = "block";
        isValid = false;
    }

    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}