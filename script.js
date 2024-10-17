document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    fetchResults(location);
});

function fetchResults(location) {
    // Simulated API response
    const petFriendlyPlaces = [
        { name: 'Dog Park', location: 'Central Park' },
        { name: 'Pet-friendly Cafe', location: 'Main Street' },
        { name: 'Beach with Pets Allowed', location: 'Sunny Beach' },
    ];

    displayResults(petFriendlyPlaces);
}

function displayResults(places) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    if (places.length === 0) {
        resultsList.innerHTML = '<li>No results found.</li>';
        return;
    }

    places.forEach(place => {
        const li = document.createElement('li');
        li.textContent = `${place.name} - ${place.location}`;
        resultsList.appendChild(li);
    });
}
