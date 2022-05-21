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
    var name = document.getElementById('name').value;
    const  mail = document.getElementById('email').value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    console.log("message sended");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "rohitluni123@gmail.com",
        Password : "B412970EE5E01E064E12B2EFA2A148DD0F9D",
        To : 'rohitluni123@gmail.com',
        From : mail,
        Subject : subject,
        Body : "Name: "+name+"<br> Email: "+mail+"<br> Subject: "+subject+"<br> Message: "+message
    }).then(
    message => alert(message)
    );
    
})
