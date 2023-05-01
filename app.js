const firebaseConfig = {
    apiKey: "AIzaSyD1niLEaW1nxLrm5Fg_YE6flPp8wFGEsPI",
    authDomain: "finalsact-7c952.firebaseapp.com",
    databaseURL: "https://finalsact-7c952-default-rtdb.firebaseio.com",
    projectId: "finalsact-7c952",
    storageBucket: "finalsact-7c952.appspot.com",
    messagingSenderId: "803065078662",
    appId: "1:803065078662:web:1ef0adca8cc3582e810207",
    measurementId: "G-5F4C38EFWE"
  };
    firebase.initializeApp(firebaseConfig);
    
    // Get a reference to the database service
    var database = firebase.database();
    
    // Get a reference to the table
    var table = document.getElementById('table');
    
    // Function to fetch all data from Firebase and display it in the table
    function fetchData() {
      var ref = database.ref('users');
      ref.on('value', function(snapshot) {
        // Clear the table first
        table.innerHTML = '<thead><tr><th>First Name</th><th>Last Name</th><th>Username</th><th>Password</th><th>Favorite Subject</th></tr></thead><tbody>';
    
        // Loop through the data and add each row to the table
        snapshot.forEach(function(childSnapshot) {
          var childData = childSnapshot.val();
          table.innerHTML += '<tr><td>' + childData.firstname + '</td><td>' + childData.lastname + '</td><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.favourite_subject + '</td></tr>';
        });
    
        // Close the table body
        table.innerHTML += '</tbody>';
      });
    }
    
    // Call the fetchData function to display the data when the page loads
    fetchData();