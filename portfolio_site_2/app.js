(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



var submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body = "Name: "+name+"Email: "+mail+"Subject: "+subject+"Message: "+message;

    console.log(body);
    // Email.send({
    //     Host : "mail.therencho.com",
    //     Username : "tech@therencho.com",
    //     Password : "ewR~&r%2j#B@",
    //     To : 'contact@therencho.com',
    //     From : 
    //     Subject : 
    //     Body : 
    // }).then(
    //   message => alert(message)
    // );

    Email.send({
        SecureToken : "ab0a9f77-223b-4c0b-8a64-4944cd3742d3",
        To : 'them@website.com',
        From : mail,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})