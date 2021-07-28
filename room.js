var roomname = "";
var username = "";
var message = "";
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
function adduser() {
    roomname = localStorage.getItem("roomname");
    username = localStorage.getItem("xyz");
    console.log(username);
    console.log(roomname);
    document.getElementById("username").innerHTML = "Welcome " + username;
    document.getElementById("roomname").innerHTML = "Room " + roomname;
}
function logout() {
    localStorage.removeItem("roomname");
    localStorage.removeItem("xyz");
    window.location = "klmn.html";
}
function send() {
    message = document.getElementById("message_input").value;
    console.log(message);
    firebase.database().ref().push({
        name: username,
        msg: message,
        likes: 0
    });
    document.getElementById("message_input").value = "";
}