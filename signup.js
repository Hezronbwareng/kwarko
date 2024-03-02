/* SELECTING  HTML FORM  ELEMENTS  */
const form = document.getElementById("register-form")
const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const confirmPasswordEl = document.getElementById("confirm-password")
const icons = document.querySelectorAll(".input-div i")



/* SELECTING THE ERROR TEXT BOXES */
const emailErrorBox = document.getElementById("email-error")
const passwordErrorBox = document.getElementById("password-error")
const confirmPasswordErrorBox = document.getElementById("confirm-password-error")

/* ENDPOINT FOR POSTING DATA */
const URL = "https://nyumba-api.onrender.com/api/users/register/"

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
confirmPasswordEl.addEventListener("input", () => hideErrorMessage(confirmPasswordEl, confirmPasswordErrorBox));

/* FUNCTION TO HANDLE FORM VALIDATION AND ERROR MESSAGES */
function validateForm() {
    let isValid = true;

    // Clear all error messages
    emailErrorBox.textContent = "";
    passwordErrorBox.textContent = "";
    confirmPasswordErrorBox.textContent = "";

    if (emailEl.value.trim() === "") {
        emailErrorBox.textContent = "Please fill in this field";
        isValid = false;
    }

    if (passwordEl.value.trim() === "") {
        passwordErrorBox.textContent = "Please fill in this field";
        isValid = false;
    } else if (passwordEl.value.length < 8) {
        passwordErrorBox.textContent = "Password should contain more than 8 characters";
        isValid = false;
    }

    if (confirmPasswordEl.value.trim() === "") {
        confirmPasswordErrorBox.textContent = "Please fill in this field";
        isValid = false;
    } else if (passwordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrorBox.textContent = "Passwords don't match";
        isValid = false;
    }

    return isValid;
}



/* CODE TO HANDLE POSTING OF FORM DATA */
form.addEventListener("submit", event => {
    event.preventDefault();

    if (validateForm()) {
        const formData = {
            email: emailEl.value,
            password: confirmPasswordEl.value
        };

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
            // Display success message to the user
            displaySuccessMessage("Registration successful!");
            form.reset();
            // Redirect to another page upon successful form submission
            setTimeout(() => {
                // window.location.href = "index.html";
            }, 3000); // Redirect after 3 seconds
        })
        .catch(error => {
            console.error(error);
            displayErrorMessage("Registration failed. Please try again.");
        });
    }
});

function displaySuccessMessage(message) {
    const successMessage = document.createElement("div");
    successMessage.classList.add("success-message");
    successMessage.textContent = message;

    // Append success message to the form or any other suitable location
    form.appendChild(successMessage);

    // Remove the success message after a certain period of time
    setTimeout(() => {
        successMessage.remove();
    }, 3000); // Remove after 3 seconds
}

function displayErrorMessage(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;

    // Append error message to the form or any other suitable location
    form.appendChild(errorMessage);

    // Remove the error message after a certain period of time
    setTimeout(() => {
        errorMessage.remove();
    }, 3000); // Remove after 3 seconds
}
