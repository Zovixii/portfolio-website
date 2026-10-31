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
    const formStatus = document.querySelector("#form-status");
    
    
    
    
    //code to check validity
    
    //name
    if(name.length <= 2)
    {
        valid = false;
        document.getElementById("nameErrorText").classList.remove("hidden");

        document.getElementById("name").classList.remove("greenBorder")
        document.getElementById("name").classList.add("redBorder")
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

        document.getElementById("email").classList.remove("greenBorder")
        document.getElementById("email").classList.add("redBorder")
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

        document.getElementById("topic").classList.remove("greenBorder")
        document.getElementById("topic").classList.add("redBorder")
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

        document.getElementById("message").classList.remove("greenBorder")
        document.getElementById("message").classList.add("redBorder")
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

        document.getElementById("website").classList.remove("greenBorder")
        document.getElementById("website").classList.add("redBorder")
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
    else
    {
        event.preventDefault();

        formStatus.textContent = `Thanks for your feedback, ${name}`;

        //turns all borders to green upon successful validations
        const elements = document.getElementsByClassName("formElement");

        for (const element of elements)
        {
            element.classList.remove("redBorder")
            element.classList.add("greenBorder");
        }

        setTimeout(() =>
        {
            document.getElementById("contactBox").reset();
            for(const element of elements)
            {
                element.classList.remove("greenBorder")
            }
            updateCounter();

            formStatus.textContent = "";
        }, 4000)
    }
});


//comment counter
function updateCounter()
{
    const length = message.value.length;

    counter.textContent = `${length} / 15 characters minimum`;
    counter.style.color = length >= 15 ? "lightgreen" : "red";

}

message.addEventListener("input", updateCounter);

document.getElementById("resetFomr").addEventListener("click", updateCounter)
