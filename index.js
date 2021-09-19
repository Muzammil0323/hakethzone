// localStorage.setItem("object",JSON.stringify(obj))
var labelSucces = document.getElementById("alert-success")
var labelDanger = document.getElementById("alert-danger")
// var obj ={}
const pagedown = () => {

    labelSucces.style.display = "none"
    labelDanger.style.display = "none"

    // setTimeout()
    // {window.location.replace("login.html")
    //     ,2000
    // }
    // localStorage.setItem("name",localStorage).value;
    // localStorage.setItem.getElementbyid("email").value
    // localStorage.setItem.getElementbyid("password").value

    // Name and Password from the register-form

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    if (name.value != "" && email.value != "" && pass.value != "") {

        store();
    } else {
        labelDanger.style.display = "block"
        labelDanger.innerHTML = (`<strong>Danger!</strong> Plzz Fill The Boxs`)
    }


    // storing input from register-form
    function store() {
        localStorage.setItem('name', name.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pass', pass.value);
        labelSucces.style.display = "block"
        labelSucces.innerHTML = `<strong>Success!</strong> Sign up Succesfully`;
        remove();
        setTimeout(function () {
            window.location.replace("login.html");
        }, 1000
        );
    }

    function remove() {
        document.getElementById('name').value = null;
        document.getElementById('email').value = null;
        document.getElementById('password').value = null;
    }

    // debugger
    // if (localStorage.getItem("name") === document.getElementById('name').value) {
    //     alert("Succesfully")
    // } else {
    //     alert("ERROR")
    // }


    // check if stored data from register-form is equal to entered data in the   login-form
    // function check() {

    //     // stored data from the register-form
    //     let storedName = localStorage.getItem('name');
    //     let storedEmail = localStorage.getItem('email')
    //     let storedPass = localStorage.getItem('pass');

    //     // entered data from the login-form
    //     let userName = document.getElementById('userName');
    //     let userEmail = document.getElementById('userEmail')
    //     let userPass = document.getElementById('userPass');

    //     // check if stored data from register-form is equal to data from login form
    //     if (userEmail.value === storedEmail || userPass.value === storedPass) {
    //         alert('You are loged in.');
    //     } else {
    //         alert('ERROR');
    //     }
    // }
    // check();
}