function validateAlphabets(event) {
	var charCode = (event.which) ? event.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	  return true;
	}
	document.getElementById("Name").innerHTML =
		"Numbers are disabled";
	  return false;
	}

	function validation() 
	{
        var name = document.getElementById("name").value;
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var emails = document.getElementById("emails").value;

        if (name == "") {
          document.getElementById("Name").innerHTML =
            "  Please fill the Name field";
          return false;
        }
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;

        if(format.test(name)){
          document.getElementById("Name").innerHTML =
            "No Special Characters allowed";
        } else {
          document.getElementById("Name").innerHTML =
            " ";
        }
        if (emails == "") {
          document.getElementById("email").innerHTML =
            "  Please fill the email id field";
          return false;
        }
        if (emails.indexOf("@automania.in") <= 0) {
          document.getElementById("email").innerHTML = "  Invalid Email";
          return false;
        }
        else
        {
          document.getElementById("email").innerHTML = " ";
        }

        if (
          emails.charAt(emails.length - 4) != "." &&
          emails.charAt(emails.length - 3) != "."
        ) {
          document.getElementById("email").innerHTML = "  Invalid Email";
          return false;
        }

        if (user == "") {
          document.getElementById("user").innerHTML =
            "  Please fill the username field";
          return false;
        }
        if (user.length <= 3 || user.length > 20) {
          document.getElementById("user").innerHTML =
            "  Username lenght must be between 3 and 20";
          return false;
        }
        if (!isNaN(user)) {
          document.getElementById("user").innerHTML =
            "  only characters are allowed";
          return false;
        }

        if (pass == "") {
          document.getElementById("pass").innerHTML =
            "  Please fill the password field";
          return false;
        }
        if (pass.length <= 8 || pass.length > 20) {
          document.getElementById("pass").innerHTML =
            "Passwords lenght must be between  8 and 20";
          return false;
          
        
        }

        re = /[0-9]/;
        if(!re.test(pass)) {
          document.getElementById("pass").innerHTML =
            "Password should contain a number";
          return false;
        pass.focus();
        return false;
        }

        re = /[a-z]/;
        if(!re.test(pass)) {
          document.getElementById("pass").innerHTML =
            "Password should contain a lowercase character";
          return false;
        pass.focus();
        return false;
        }

        re = /[A-Z]/;
        if(!re.test(pass)) {
          document.getElementById("pass").innerHTML =
            "Password should contain a uppercase character";
          return false;
        pass.focus();
        return false;
        }

        var re = /[!@#\$%\^\&*\)\(+=._-]/
        if(!re.test(pass)) {
          document.getElementById("pass").innerHTML =
            "Password should contain a special character";
          return false;
        pass.focus();
        return false;
        }
	}