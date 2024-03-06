document.addEventListener('DOMContentLoaded', function() {
    const propertyListings = document.getElementById('property-listings');

    fetch('https://nyumba-api.onrender.com/api/houses/search/?q=villa')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(property => {
                const propertyElement = document.createElement('div');
                propertyElement.classList.add('property');

                propertyElement.innerHTML = `
                    <h2>${property.location}</h2>
                    <p>Category: ${property.category}</p>
                    <p>Bedrooms: ${property.bed_rooms}</p>
                    <p>Price Per Month: ${property.price_per_month}</p>
                    <p>Date Added: ${property.date_added}</p>
                    <p>Amenities: ${property.amenities}</p>
                    <p>Agent: ${property.agent_who_added}</p>
                `;

                propertyListings.appendChild(propertyElement);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            const errorMessage = document.createElement('div');
            errorMessage.textContent = 'Failed to fetch data. Please try again later.';
            propertyListings.appendChild(errorMessage);
        });
});
