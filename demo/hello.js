function validateForm() {
    var name = document.forms["surveyForm"]["name"].value;
    var email = document.forms["surveyForm"]["email"].value;
    var age = document.forms["surveyForm"]["number"].value;
    
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
    
    if (email == "") {
      alert("Please enter your email.");
      return false;
    }
    
    if (number == "") {
      alert("Please enter your age.");
      return false;
    }
}