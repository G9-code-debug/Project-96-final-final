Roomnames = [];
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
var roomname = document.getElementById("input_roomname");
var username = localStorage.getItem("xyz");
function addroom() {
    Roomnames.push(roomname);
    localStorage.setItem("roomname", roomname);
    window.location = "room.html";
    row = "<div class='room_name' id='+Roomnames+' onclick='redirectToRoomName(this.id)'>#" + Roomnames + "</div><hr>";
}