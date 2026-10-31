const form = document.getElementById("contactBox");

form.addEventListener("submit", function(event) 
{
    event.preventDefault();
    
    let valid = true;
    
    let formData = new FormData(form);
    
    const name = formData.get("name")
    const email = formData.get("email")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const topic = formData.get("topic")
    const message = formData.get("message")
    const website = document.getElementById("website");
    
    
    
    
    
    //code to check validity
    
    //name
    if(name.length <= 2)
    {
        valid = false;
        document.getElementById("nameErrorText").classList.remove("hidden");
    }
    else
    {
        document.getElementById("nameErrorText").classList.add("hidden");
    }
    
    //email
    if(!emailRegex.test(email))
    {
        valid = false
        document.getElementById("emailErrorText").classList.remove("hidden");
    }
    else
    {
        document.getElementById("emailErrorText").classList.add("hidden");
    }
    
    //dropdown
    if(topic === null)
    {
        valid = false
        document.getElementById("dropdownErrorText").classList.remove("hidden");
    }
    else
    {
        document.getElementById("dropdownErrorText").classList.add("hidden");
    }
    
    //message
    if(message.length < 15)
    {
        valid = false
        document.getElementById("messageErrorText").classList.remove("hidden");
    }
    else
    {
        document.getElementById("messageErrorText").classList.add("hidden")
    }
    
    //website
    if(website == "")
    {
        document.getElementById("websiteErrorText").classList.add("hidden");
    }
    else if(!website.checkValidity())
    {
        valid = false
        document.getElementById("websiteErrorText").classList.remove("hidden");    
    }
    else
    {
        document.getElementById("websiteErrorText").classList.add("hidden");
    }
    
    if(valid == false)
    {
        console.log("false alert!!")
        event.preventDefault();    
    }
});