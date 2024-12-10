const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("mousedown", function(){
    passwordInput.type = "text";
    togglePassword.src = "{% static 'assets/imgs/eye-on.svg' %}";
})

togglePassword.addEventListener("mouseup", function(){
    passwordInput.type = "password";
    togglePassword.src = "{% static 'assets/imgs/eye-off.svg' %}";
})

togglePassword.addEventListener("mouseleave", function(){
    passwordInput.type = "password";
    togglePassword.src = "{% static 'assets/imgs/eye-off.svg' %}";
})