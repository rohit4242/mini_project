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


    Email.send({
        Host : "smtp.gmail.com",
        Username : "rabariranchhod3@gmail.com",
        Password : "gdonzovdfvsfryyg",
        To : 'rabariranchhod3@gmail.com',
        From : mail,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})