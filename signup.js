const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat)){
        
        return true;
    }
    else {
        
        return false;
    }
}

signupButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    if (name === "" || (!/^[ A-Za-z]+$/.test(name))){ 
        alert("Please enter a valid name!");
        document.getElementById("password-field").value="";
    }
    else if (email === "" || ValidateEmail(email) == false){
        alert("Please enter a valid email address!");
        document.getElementById("password-field").value="";
    }
    else if (username === ""){
        alert("Please enter a valid username!");
        document.getElementById("password-field").value="";
    }
    else if (password === "") {
        alert("Please enter a valid Password!");   
        document.getElementById("password-field").value="";
    }
    else if (password.length < 7) {
        document.getElementById("password-field").value="";
        alert("Password should be atleast 7 characters long!");        
    }
    else {
        alert("You have successfully signed up!");
        location.reload();
    }
})