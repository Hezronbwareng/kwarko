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


// Dummy data for rental properties (replace with real data from database)
const rentalProperties = [
  { id: 1, name: "Property 1", address: "123 Main St", price: 1500, image: "property1.jpg" },
  { id: 2, name: "Property 2", address: "456 Oak St", price: 2000, image: "property2.jpg" },
  { id: 3, name: "Property 3", address: "789 Elm St", price: 1800, image: "property3.jpg" },
  { id: 4, name: "Property 3", address: "789 Elm St", price: 1800, image: "property4.jpg" },
  { id: 5, name: "Property 3", address: "789 Elm St", price: 1800, image: "property5.jpg" },
  { id: 6, name: "Property 3", address: "789 Elm St", price: 1800, image: "property6.jpg" },
  { id: 7, name: "Property 3", address: "789 Elm St", price: 1800, image: "property7.jpg" },
  { id: 8, name: "Property 3", address: "789 Elm St", price: 1800, image: "property8.jpg" }
];

// Function to display rental properties
function displayRentalProperties() {
  const rentalList = document.getElementById('rentalList');

  // Clear existing content
  rentalList.innerHTML = '';

  // Loop through rental properties and create HTML elements
  rentalProperties.forEach(property => {
      const propertyCard = document.createElement('div');
      propertyCard.classList.add('propertyCard');
      propertyCard.innerHTML = `
          <img src="${property.image}" alt="${property.name}">
          <h2>${property.name}</h2>
          <p>Address: ${property.address}</p>
          <p>Price: $${property.price}/month</p>
          <button onclick="editProperty(${property.id})">Edit</button>
          <button onclick="deleteProperty(${property.id})">Delete</button>
      `;
      rentalList.appendChild(propertyCard);
  });
}

// Function to add a new property
function addProperty() {
  // Implement logic to add a new property (e.g., show a form)
  console.log('Add new property');
}

// Function to edit a property
function editProperty(propertyId) {
  // Implement logic to edit a property (e.g., show a form pre-filled with property details)
  console.log('Edit property with ID:', propertyId);
}

// Function to delete a property
function deleteProperty(propertyId) {
  // Implement logic to delete a property (e.g., confirm deletion and remove property from list)
  console.log('Delete property with ID:', propertyId);
}

// Display rental properties when the page loads
window.onload = displayRentalProperties;
