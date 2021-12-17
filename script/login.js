function switchForm() {
  var x = document.getElementById("formToSwitch1");
  var y = document.getElementById("formToSwitch2");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function getInfo() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (var i = 0; i < objPeople.length; i++) {
    // check is user input matches username and password of a current index of the objPeople array
    if (
      username == objPeople[i].username &&
      password == objPeople[i].password
    ) {
      console.log(username + " is logged in!!!");
      // stop the function if this is found to be true
      window.location.href = "CRM.html";
      return;
    }
  }
  console.log("incorrect username or password");
}
