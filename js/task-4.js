const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    const emailInput = form.elements.email.value;
    const passwordInput = form.elements.password.value;

    const emailValue = emailInput.trim();
    const passwordValue = passwordInput.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in")
        return;
    };

    const formInfo = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formInfo);
    
})
