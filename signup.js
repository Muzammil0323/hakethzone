
let errorDiv;
let succesDiv;

function startLoader() {

    
    errorDiv = document.getElementById("alert-danger");
    succesDiv = document.getElementById('alert-success');

    errorDiv.style.display = "none";
    succesDiv.style.display = 'none';
   


}


function stopLoader() {
    errorDiv.style.display = "none"
    
}

function showError(err) {
    errorDiv.innerHTML = err.message;
    errorDiv.style.display = "block"
   

}




function signup() {

    let username = document.getElementById("name")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    
    
    startLoader();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            firebase.database().ref(`users/${res.user.uid}`).set({
                username: username.value,
                email: email.value,
                password: password.value,
                
            })
                .then(() => {

                    succesDiv.innerHTML = "User register succesfully";
                    succesDiv.style.display = 'block'
                    username.value = "";
                    email.value = "";
                    password.value = "";
                    stopLoader();
                    setTimeout(() => {
                        window.location.replace("login.html")
                    }, 1000)
                })
                .catch((err) => {
                    showError(err);
                })
        })
        .catch((err) => {

            showError(err);

        })
}
function login() {
    
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    startLoader();

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((res) => {
            let succesDiv = document.getElementById('alert-success');
            succesDiv.innerHTML = "User login succesfully";
            succesDiv.style.display = 'block'
            email.value = "";
            password.value = ""
            stopLoader(); 
            localStorage.setItem("name" , res.user.uid)
    setTimeout(() => {
                window.location = "profile.html"
            }, 1000)


            

        })
        .catch((err) => {
            showError(err);
        })

}
