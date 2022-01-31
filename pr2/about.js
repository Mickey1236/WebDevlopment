// alert("All fields are mendotary")
function validate(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let floatingnumber = document.getElementById("floatingnumber").value;
    let pass = document.getElementById("floatingPassword").value;
    let floatingTextarea = document.getElementById("floatingTextarea").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(pass == " " && pass.length > 5){
      text= "please Enter Valid Password";
      error_message.innerHTML = text;
      return false;
    }
    
    if(isNaN(floatingnumber) || floatingnumber.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}