// JavaScript for FAQ toggle functionality

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const button = item.querySelector('.toggle-faq');
        const answer = item.querySelector('.answer');

        button.addEventListener('click', function() {
            const isOpen = item.classList.contains('open');

            // Toggle the "open" class for the item
            item.classList.toggle('open');

            // Toggle the answer visibility with smooth animation
            if (isOpen) {
                answer.style.maxHeight = 0;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});


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



var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64ae30ba94cf5d49dc630627/1h546smjj';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
