document.addEventListener('DOMContentLoaded', function() {
    const propertyListings = document.getElementById('property-listings');
    const searchParams = new URLSearchParams(window.location.search);
    const searchTerm = searchParams.get('q');

    if (searchTerm) {
        fetch(`https://nyumba-api.onrender.com/api/houses/search/?q=${searchTerm}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    const notFoundMessage = document.createElement('div');
                    notFoundMessage.classList.add('not-found-message');
                    notFoundMessage.innerHTML = `<p>No properties found matching your search term. 🙁 </p>`;
                    propertyListings.appendChild(notFoundMessage);
                } else {
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
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                const errorMessage = document.createElement('div');
                errorMessage.classList.add('error-message');
                errorMessage.innerHTML = `<p>Failed to fetch data. Please try again later. 🙁 </p>`;
                propertyListings.appendChild(errorMessage);
            });
    }
});
