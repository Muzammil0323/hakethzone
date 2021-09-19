var alertDanger = document.getElementById("alert-danger")
var alertSucces = document.getElementById("alert-success")

//check if stored data from register-form is equal to entered data in the   login-form
const loginn = () => {
    alertDanger.style.display = "none"
    alertSucces.style.display = "none"
    // stored data from the register-form

    let storedEmail = localStorage.getItem('email')
    let storedPass = localStorage.getItem('pass');

    // entered data from the login-form
    let userEmail = document.getElementById('email')
    let userPass = document.getElementById('password');
    // null data check
    // debugger
    if (userEmail.value == "" && userPass.value == "") {
        alertDanger.style.display = "block"
        alertDanger.innerHTML = `<strong>Danger!</strong>Plzz Enter Email Password`
    }
    else {
        // check if stored data from register-form is equal to data from login form
        if (userEmail.value === storedEmail) {
            if (userPass.value === storedPass) {
                alertSucces.style.display = "block"
                alertSucces.innerHTML = `<strong>Success!</strong> Login Succesfully`
                setTimeout(function () {
                    window.location.replace('profile.html')
                }, 1000);
            }
            else {
                alertDanger.style.display = "block"
                alertDanger.innerHTML = `<strong>Danger!</strong> wrong password`
            }

        }
        else {
            alertDanger.style.display = "block"
            alertDanger.innerHTML = `<strong>Danger!</strong> wrong email`
        }
    }
}
const remove = () => {
    document.getElementById('email').value = null;
    document.getElementById('password').value = null;
}

remove();