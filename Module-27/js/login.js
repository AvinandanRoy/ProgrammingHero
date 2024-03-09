
document.getElementById('submititBtn').addEventListener("click",(event)=>{
    // get email address  emailIdget ,passwordGet
    const userEmail = document.getElementById('emailIdget').value;
    const userPass = document.getElementById('passwordGet').value ;

    if(userEmail === 'avinandan@gmail.com' && userPass === '1234'){
        console.log("Verifying Your Password");
    }
    else{
        alert("Enter valid E-mail and righ Password.")
    }

});