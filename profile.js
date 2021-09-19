
// const logout = () => {
//     let storename = localStorage.getItem("name")
//     document.getElementById("username").innerHTML = null;
//     document.getElementById("username").innerHTML = `<h1>Bye ${storename}</h1>`;
//     setTimeout(function () {
//         window.location.replace("index.html")
//     }, 1000
//     )
// }
// const back = () => {
//     window.location.replace("profile.html")
// }
const Startgame = () => {
    window.location.replace("level1.html")
}

let logout = () => {
    firebase.auth().signOut()
        .then(() => {
            window.location.replace("login.html")
        })
}

let getData = () => {
    var useruid = localStorage.getItem("name")
    console.log(useruid)
    firebase.database().ref(`/user/${useruid}`).once('value', (data) => {
        let labelname = document.getElementById("username")
        labelname.style.textTransform = "capitalize"
        labelname.style.color = "green"
        labelname.innerHTML = `<h1>${data.username}}</h1>`
    })

}
getData();