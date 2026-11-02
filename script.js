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
    if(name.length < 2)
    {
        valid = false;
        document.getElementById("nameErrorText").classList.remove("hidden");

        document.getElementById("name").classList.remove("greenBorder")
        document.getElementById("name").classList.add("redBorder")
        document.getElementById("name").setAttribute("aria-invalid", "true");
    }
    else
    {
        document.getElementById("nameErrorText").classList.add("hidden");
        document.getElementById("name").setAttribute("aria-invalid", "false");
    }
    
    //email
    if(!emailRegex.test(email))
    {
        valid = false
        document.getElementById("emailErrorText").classList.remove("hidden");

        document.getElementById("email").classList.remove("greenBorder")
        document.getElementById("email").classList.add("redBorder")
        document.getElementById("email").setAttribute("aria-invalid", "true");
    }
    else
    {
        document.getElementById("emailErrorText").classList.add("hidden");
        document.getElementById("email").setAttribute("aria-invalid", "false");
    }
    
    //dropdown
    if(topic === null)
    {
        valid = false
        document.getElementById("dropdownErrorText").classList.remove("hidden");

        document.getElementById("topic").classList.remove("greenBorder")
        document.getElementById("topic").classList.add("redBorder")
        document.getElementById("topic").setAttribute("aria-invalid", "true");
    }
    else
    {
        document.getElementById("dropdownErrorText").classList.add("hidden");
        document.getElementById("topic").setAttribute("aria-invalid", "false");
    }
    
    //message
    if(message.length < 15)
    {
        valid = false
        document.getElementById("messageErrorText").classList.remove("hidden");

        document.getElementById("message").classList.remove("greenBorder")
        document.getElementById("message").classList.add("redBorder")
        document.getElementById("message").setAttribute("aria-invalid", "true");
    }
    else
    {
        document.getElementById("messageErrorText").classList.add("hidden")
        document.getElementById("message").setAttribute("aria-invalid", "false");
    }
    
    //website
    if(website == "")
    {
        document.getElementById("websiteErrorText").classList.add("hidden");
        document.getElementById("website").setAttribute("aria-invalid", "false");

    }
    else if(!website.checkValidity())
    {
        valid = false
        document.getElementById("websiteErrorText").classList.remove("hidden");    

        document.getElementById("website").classList.remove("greenBorder")
        document.getElementById("website").classList.add("redBorder")
        document.getElementById("website").setAttribute("aria-invalid", "true");
    }
    else
    {
        document.getElementById("websiteErrorText").classList.add("hidden");
        document.getElementById("website").setAttribute("aria-invalid", "false");
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
            element.setAttribute("aria-invalid", "false");
        }

        fullFormReset(false);

        setTimeout(() =>
        {
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

    if(length == 0)
    {
        counter.style.color = "white"
    }

}

function fullFormReset(eraseSuccessMessage = true)
{
    const elements = document.getElementsByClassName("formElement")
    for (const element of elements)
    {
        element.classList.remove("greenBorder")
        element.classList.remove("redBorder")
    }

    const errors = document.getElementsByClassName("errorText")
    for (const error of errors)
    {
        error.classList.add("hidden")
    }

    setTimeout( () =>
    {
        updateCounter()
    }, 30)

    if(eraseSuccessMessage == true)
    {
        const formStatus = document.querySelector("#form-status");
        formStatus.textContent = "";
    }

    form.reset();
}

message.addEventListener("input", updateCounter);


document.getElementById("resetForm").addEventListener("click", fullFormReset)
