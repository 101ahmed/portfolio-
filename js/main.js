let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings : ['web developer', 'web developer', 'full stack  developer'],
    loop : true,
    typeSpeed : 150
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});


function sendEmail() 
{ Email.send({
    SecureToken : "52ea5b3b-9000-4a94-8854-2331312d4aed",
    To : 'alnonoahmed16@gmail.com',
    From : "alnonoahmed16@gmail.com",
    Subject : "envoyer email",
    Body : "firstname: " + document.getElementById("firstname").value
            + "<br> lastname: " + document.getElementById("lastname").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> phone: " + document.getElementById("phone").value
            + "<br> message: " + document.getElementById("message").value
}).then(
message => alert("message send succesfully")
);
}
    

function toggleMode() {
    var body = document.body;
    var toggleButton = document.querySelector('.mode-toggle');
    var toggleIcon = toggleButton.querySelector('i');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

