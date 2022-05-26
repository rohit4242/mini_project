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
    var params = {

        from_name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_puwcrp8","template_1yrho9l",params).then
    (function(response) {
        console.log("SUCCESS!", response.status);
        alert("Your message has been sent!");
    })
       
})
