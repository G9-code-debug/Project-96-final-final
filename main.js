var username = "";
var firebaseConfig = {
    apiKey: "AIzaSyCv7gdPmtPgDcLNKfYjDQCHRnb_kbY7CLE",
    authDomain: "kwitter-8363b.firebaseapp.com",
    databaseURL: "https://kwitter-8363b-default-rtdb.firebaseio.com",
    projectId: "kwitter-8363b",
    storageBucket: "kwitter-8363b.appspot.com",
    messagingSenderId: "1083873482336",
    appId: "1:1083873482336:web:ab492a92d7ec6d199e9505",
    measurementId: "G-VPVTGPG16E"
};
firebase.initializeApp(firebaseConfig);
function login() {
    if(document.getElementById("mnop").value == ""){
        alert("Please enter a name in order to access the app");
    }
    else{
        username = document.getElementById("mnop").value;
        localStorage.setItem("xyz", username);
        document.getElementById("mnop").value = "";
        console.log(username);
        window.location = "klmn.html";
        firebase.database().ref("/").child(username).update({
            purpose: "username"
          });
    }
}
