function ValidateUser(inputText,password)
{       
        var valid = 0;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(inputText.value === "" || password.value == ""){
            alert("Please Enter username and password");
        }
        if(inputText.value.match(mailformat))
        {
            valid = 1;
        }
        if(valid == 1){
            if (password.value.search(/[A-Z]/i) < 0) {
                valid = 0;
                alert("Your password must contain at least one upper case letter.");
            }
            else if (password.value.search(/[a-z]/i) < 0) {
                valid = 0;
                alert("Your password must contain at least one letter.");
            }
            else if (password.value.search(/[0-9]/) < 0) {
                valid = 0;
                alert("Your password must contain at least one digit."); 
            }
            else if (password.value.search(/[!#$%^&*]/) > 0) {
                valid = 0;
                alert("Your password must not contain special character other than @"); 
            }
            else{
                alert("Email and Password are valid!")
            }
        }
        else{
            alert("Your Email is not Valid please Check!")
        }     
}