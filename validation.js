function validateAlphabets(event) {
	var charCode = (event.which) ? event.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
	  return true;
	}
	document.getElementById("Name").innerHTML =
		"Numbers are disabled";
	  return false;
	}

	function setFocus()
	{
		document.getElementById("name").focus();
	}


	function validation() 
	{
		if(document.getElementById("name").value.length == 0)
		{
			document.getElementById("Name").innerHTML =
		"Name field is empty";
			document.getElementById("name").focus();
		return false;
		}
		else
		{
			document.getElementById("Name").innerHTML =
		" ";
		}

		var name = document.getElementById("name").value;
		var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
		if(format.test(name)){
			document.getElementById("Name").innerHTML =
			  "No Special Characters allowed";
			  document.getElementById("name").focus();
			  return false;
		  } else {
			document.getElementById("Name").innerHTML =
			  " ";
		  }

		if(document.getElementById("address").value.length == 0)
		{
			document.getElementById("Address").innerHTML =
		"Adress field is empty";
			document.getElementById("address").focus();
		return false;
		}
		else
		{
			document.getElementById("Address").innerHTML =
		" ";
		}

		if(document.getElementById("email").value.length == 0)
		{
			document.getElementById("Email").innerHTML =
		"Email Address field is empty";
			document.getElementById("email").focus();
		return false;
		}
		else
		{
			document.getElementById("Email").innerHTML =
		" ";
		}

		format = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@christuniversity.in$/
		email = document.getElementById("email").value;
		if(!format.test(email)){
			document.getElementById("Email").innerHTML =
			  "Enter valid email address";
			  document.getElementById("email").focus();
			  return false;
		  } else {
			document.getElementById("Email").innerHTML =
			  " ";
		  }

		  

		if(document.getElementById("user").value.length == 0)
		{
			document.getElementById("User").innerHTML =
		"User field is empty";
			document.getElementById("user").focus();
		return false;
		}
		else
		{
			document.getElementById("User").innerHTML =
		" ";
		}

		if(document.getElementById("pass").value.length == 0)
		{
			document.getElementById("Pass").innerHTML =
		"Password is empty";
			document.getElementById("pass").focus();
		return false;
		}
		else
		{
			document.getElementById("Pass").innerHTML =
		" ";
		}
		pass = document.getElementById("pass").value
		
		  if (pass.length <= 8 || pass.length > 20) {
			document.getElementById("Pass").innerHTML =
			  "Passwords lenght must be between  8 and 20";
			  document.getElementById("pass").focus();
			return false;
		  }

		  re = /[0-9]/;
		  if(!re.test(pass)) {
			document.getElementById("Pass").innerHTML =
			  "Password should contain a number";
			  document.getElementById("pass").focus();
			return false;
		  }

		  re = /[a-z]/;
		  if(!re.test(pass)) {
			document.getElementById("Pass").innerHTML =
			  "Password should contain a lowercase";
			  document.getElementById("pass").focus();
			return false;
		  }


		  re = /[A-Z]/;
		  if(!re.test(pass)) {
			document.getElementById("Pass").innerHTML =
			  "Password should contain a uppercase";
			  document.getElementById("pass").focus();
			return false;
		  }

		  var re = /[!@#\$%\^\&*\)\(+=._-]/
		  if(!re.test(pass)) {
			document.getElementById("Pass").innerHTML =
			  "Password should contain a special char";
			  document.getElementById("pass").focus();
			return false;
		  }

		  

		
			var radios = document.getElementsByName("radio");
	   
			for (var i = 0, len = radios.length; i < len; i++) {
				 if (radios[i].checked) {
					successSubmit();
					 return true;
				 }
			}
			document.getElementById("recheck").innerHTML =
		"Select one radio";
			return false;

		
		
	}

	function successSubmit(){
		alert("successfully recored! Thank you for taking the survey")
	}