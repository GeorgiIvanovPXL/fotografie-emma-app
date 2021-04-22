const contactForm = document.getElementById('contact-form');

const fromEmail = document.getElementById('fromEmail');
const fromName = document.getElementById('from_name');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const errorElement = document.getElementById('error');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let messages = [];

    if (fromEmail.value === '' | fromEmail.value == null) {
        messages.push('Email is verplicht!');
    }

    if (fromName.value === '' | fromName.value == null) {
        messages.push('Naam is verplicht!');

    }
    if (subject.value === '' | subject.value == null) {
        messages.push('Onderwerp is verplicht!');

    }
    if (message.value === '' | message.value == null) {
        messages.push('Boodschap is verplicht!');

    }

    if (messages.length > 0) {
        errorElement.innerHTML = messages.join('\n <br> <br>');
        errorElement.style.display = "flex";
        errorElement.style.width = "50vw";
        errorElement.classList.add('container');
        errorElement.style.justifyContent = "center";
        errorElement.style.backgroundColor = "rgb(216, 62, 62)";
        errorElement.style.margin = "10px auto";
        errorElement.style.color = "#fff";
        errorElement.style.fontWeight = "bold";
        errorElement.style.fontFamily = "Roboto";
        errorElement.style.border = "1px solid rgb(216, 62, 62)";
        errorElement.style.padding = "10px";
        errorElement.style.borderRadius = "20px";
    } else {
        let Params = {
            from_email: fromEmail.value,
            reply_to: fromEmail.value,
            from_name: fromName.value,
            subject: subject.value,
            to_name: 'Emma Muroni',
            message: message.value


        };



        emailjs.send('service_0c1qqng', 'template_jefydrp', Params)
            .then(res => console.log("Bericht verzonden!"))
            .catch(err => console.log(err))


        setTimeout(function() {
            for (i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
            }
            message.value = "";

            contactForm.style.opacity = "0";

            errorElement.innerHTML = "Bericht verzonden!";
            errorElement.style.display = "flex";
            errorElement.style.width = "50vw";
            errorElement.classList.add('container');
            errorElement.style.justifyContent = "center";
            errorElement.style.backgroundColor = "rgb(41, 175, 59)";
            errorElement.style.margin = "10px auto";
            errorElement.style.color = "#fff";
            errorElement.style.fontWeight = "bold";
            errorElement.style.fontFamily = "Roboto";
            errorElement.style.border = "1px solid rgb(41, 175, 59)";
            errorElement.style.padding = "10px";
            errorElement.style.borderRadius = "20px";



        }, 3000);



    }






})