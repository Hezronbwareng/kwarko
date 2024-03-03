const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById("currentYear").textContent = currentYear;

const togglebutton = document.querySelector(".toggle-button");
const navMobile = document.querySelector(".nav-for-mobile");

togglebutton.addEventListener("click", () => {
  if (navMobile.classList.contains("active")) {
    navMobile.classList.remove("active");
    togglebutton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    togglebutton.style.color = "black";
  } else {
    navMobile.classList.add("active");
    togglebutton.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
    togglebutton.style.color = "red";
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('mortgage-form');
  const resultContainer = document.getElementById('mortgage-result');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const loanAmount = parseFloat(document.getElementById('loan-amount').value);
      const interestRate = parseFloat(document.getElementById('interest-rate').value);
      const loanTerm = parseInt(document.getElementById('loan-term').value);

      if (loanAmount && interestRate && loanTerm) {
          if (loanTerm >= 6) {
              
              const monthlyInterestRate = interestRate / 100 / 12;
              const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
              const totalPayment = monthlyPayment * loanTerm;
              
              resultContainer.textContent = `Your monthly payment: $${monthlyPayment.toFixed(2)}. Total payment over ${loanTerm} months: $${totalPayment.toFixed(2)}.`;
          } else {
              resultContainer.textContent = "Loan term must be at least 6 months.";
          }
      } else {
          resultContainer.textContent = "Please fill out all fields.";
      }
  });
});
