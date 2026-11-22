alert("Hi Milan");
console.log("It is running successfully")
document.getElementById("myForm").addEventListener("submit", function(event)
{event.preventDefault(); let name=document.getElementById("name").value; email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
if (name==="")
{alert("Please enter your name");
    return;
}
if (email==="")
{alert("Please enter your email");
    return;
}
if (password.length<6)
{alert("Please enter your password");
    return;
}
alert("Registration successful");
} 
)