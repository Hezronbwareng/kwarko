/* SELECTING  HTML FORM  ELEMENTS  */
const form = document.getElementById("login-form")
const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const icons = document.querySelectorAll(".input-div i")

/* SELECTING THE ERROR TEXT BOXES */
const emailErrorBox = document.getElementById("email-error")
const passwordErrorBox = document.getElementById("password-error")


/* ENDPOINT FOR POSTING DATA */
const URL = "https://nyumba-api.onrender.com/api/users/get_token/"

/* PASSWORD VISIBILITY FEATURE */
icons.forEach(icon => {
    icon.addEventListener("click", ()=> {
        const inputField = icon.previousElementSibling
        if(inputField.type === "password"){
            icon.classList.replace("fa-eye-slash", "fa-eye")
            inputField.type = "text"
        } else if (inputField.type === "text"){
            icon.classList.replace("fa-eye", "fa-eye-slash")
            inputField.type = "password"
        }
    })
})


/* FUNCTION TO HIDE ERROR MESSAGE FOR SPECIFIC FIELD */
function hideErrorMessage(inputField, errorBox) {
    if (inputField === document.activeElement) {
        errorBox.textContent = "";
    }
}

/* EVENT LISTENERS TO HIDE ERROR MESSAGES WHEN USER STARTS TYPING */
emailEl.addEventListener("input", () => hideErrorMessage(emailEl, emailErrorBox));
passwordEl.addEventListener("input", () => hideErrorMessage(passwordEl, passwordErrorBox));

/* FUNCTION TO HANDLE FORM VALIDATION AND ERROR MESSAGES */
function validateForm() {
    let isValid = true;

    /* Clear all error messages */
    emailErrorBox.textContent = "";
    passwordErrorBox.textContent = "";

    if (emailEl.value.trim() === "") {
        emailErrorBox.textContent = "Please fill in this field";
        isValid = false;
    }

    if (passwordEl.value.trim() === "") {
        passwordErrorBox.textContent = "Please fill in this field";
        isValid = false;
    } else if(passwordEl.value.length < 8){
        passwordErrorBox.textContent = "Password should contain more than 8 characters"
        isValid = false
    }

    return isValid;
}




/* CODE TO HANDLE POSTING OF FORM DATA */
form.addEventListener("submit", event => {
    event.preventDefault();

    if (validateForm()) {
        const formData = {
            username:emailEl.value,
            password:passwordEl.value
        };

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to send data");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

               // Save token to localStorage
    const token = localStorage.setItem("token", data.token);

    // Check if the logged-in user is an admin (replace this condition with your actual admin check logic)
    if (data.isAdmin) {
        // Redirect to the admin panel URL
        window.location.href = "https://kwarko-admin-panel.vercel.app/";
    } else {
        // Display success message to the user
        displaySuccessMessage("Log in successful!");}

        // Reset form
        form.reset();

        // Redirect to another page after 3 seconds upon successful form submission
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000); 
        })
        .catch(error => {
            console.error(error);
            displayErrorMessage("Log in  failed. Please try again.");
        });
    }
});

function displaySuccessMessage(message) {
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = message;

    /* Append success message to the form */
    form.appendChild(successMessage);

    /* Remove the success message after 3 seconds  certain period of time */
    setTimeout(() => {
        successMessage.remove();
    }, 3000); 
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    /* Append error message to the form */
    form.appendChild(errorMessage);

    /* Remove the error message after a certain period of time */
    setTimeout(() => {
        errorMessage.remove();
    }, 2000); 
}





