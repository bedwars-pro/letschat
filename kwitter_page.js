//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA_LzD0vHvHRF_A1T01ZB4JwQ6qc9JOx1w",
    authDomain: "project93-ce57b.firebaseapp.com",
    databaseURL: "https://project93-ce57b-default-rtdb.firebaseio.com",
    projectId: "project93-ce57b",
    storageBucket: "project93-ce57b.appspot.com",
    messagingSenderId: "790945877350",
    appId: "1:790945877350:web:64f3adfe0083e3fc150ca7"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
    document.getElementById("msg").value="";
}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}