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
  const searchBox = document.getElementById('search-box');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', function() {
      const searchTerm = searchBox.value.trim();
      if (searchTerm !== '') {
          window.location.href = `listing.html?q=${encodeURIComponent(searchTerm)}`;
      }
  });
});
