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



const agentSearchForm = document.getElementById('agentSearchForm');
const searchResultsContainer = document.getElementById('searchResults');

agentSearchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('priceRange').value;
    const propertyType = document.getElementById('propertyType').value;
    
    // Simulate search results (replace with real data from database)
    const searchResults = [
        { name: 'Agent 1', location: 'Nairobi', rating: 4.5 },
        { name: 'Agent 2', location: 'Nakuru ', rating: 4.2 },
        { name: 'Agent 3', location: 'Eldoret', rating: 4.5 },
        { name: 'Agent 4', location: 'Kisumu', rating: 4.2 },
        // Add more search results as needed
    ];
    
    // Display search results
    displaySearchResults(searchResults);
});

function displaySearchResults(results) {
    // Clear previous search results
    searchResultsContainer.innerHTML = '';
    
    // Display new search results
    results.forEach(result => {
        const agentCard = document.createElement('div');
        agentCard.classList.add('agent-card');
        agentCard.innerHTML = `
            <h2>${result.name}</h2>
            <p>Location: ${result.location}</p>
            <p>Rating: ${result.rating}</p>
        `;
        searchResultsContainer.appendChild(agentCard);
    });
}
