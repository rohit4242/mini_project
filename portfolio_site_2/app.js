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

// Get the container element
var btnContainer = document.getElementById("blog_pages");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("blog");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


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
