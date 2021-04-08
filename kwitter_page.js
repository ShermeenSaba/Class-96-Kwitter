//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBD_Dr4Ce15txPpyrP-E8nzAv3PS-qgiLg",
      authDomain: "chatapp-153b0.firebaseapp.com",
      databaseURL: "https://chatapp-153b0.firebaseio.com",
      projectId: "chatapp-153b0",
      storageBucket: "chatapp-153b0.appspot.com",
      messagingSenderId: "470703819688",
      appId: "1:470703819688:web:285e7e4764f852c0fbeb9d",
      measurementId: "G-494ZFM35WF"
};
// Initialize Firebase
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({ name: user_name, message: msg, like: 0 });
      document.getElementById("msg").value = "";
}