// Monastery Data
const monasteries = [
    { name: "Rumtek Monastery", lat: 27.3301, lng: 88.5642, description: "Rumtek is the largest monastery in Sikkim, known for its beautiful architecture." },
    { name: "Pemayangtse Monastery", lat: 27.3245, lng: 88.3172, description: "Pemayangtse is one of the oldest monasteries, famous for its murals and festivals." },
    { name: "Tashiding Monastery", lat: 27.3561, lng: 88.4390, description: "Tashiding is an important pilgrimage site with rich spiritual heritage." },
    { name: "Enchey Monastery", lat: 27.3312, lng: 88.6132, description: "Enchey Monastery is known for its peaceful atmosphere and scenic location." },
    { name: "Dubdi Monastery", lat: 27.3380, lng: 88.3005, description: "Dubdi is the oldest monastery in Sikkim, often called the 'Hermitage of the Monk'." }
];

    function initMap() {
    // Center of the map
    const mapCenter = { lat: 27.3389, lng: 88.6065 };

    // Initialize map
    const map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 8,
        center: mapCenter
    });

    // Example monastery data
    const monasteries = {
        rumtek: { name: 'Rumtek Monastery', lat: 27.3385, lng: 88.6068, description: 'Largest monastery in Sikkim.' },
        pemayangtse: { name: 'Pemayangtse Monastery', lat: 27.3240, lng: 88.1970, description: 'One of the oldest monasteries.' },
        tashiding: { name: 'Tashiding Monastery', lat: 27.3280, lng: 88.2130, description: 'Heart-shaped hill monastery.' },
        enchey: { name: 'Enchey Monastery', lat: 27.3330, lng: 88.6130, description: 'Famous for Cham dance performances.' },
        dubdi: { name: 'Dubdi Monastery', lat: 27.3470, lng: 88.2550, description: 'Oldest monastery in Sikkim.' }
    };

    // Add markers
    Object.entries(monasteries).forEach(([id, monastery]) => {
        const marker = new google.maps.Marker({
            position: { lat: monastery.lat, lng: monastery.lng },
            map: map,
            title: monastery.name
        });

        marker.addListener('click', () => {
            showMonasteryDetails(monastery);
        });
    });

    // ===============================
    // Search Functionality
    // ===============================
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('mapSearch');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        const monastery = monasteries[query];

        if (monastery) {
            map.setCenter({ lat: monastery.lat, lng: monastery.lng });
            map.setZoom(15);
            showMonasteryDetails(monastery); // open modal automatically
        } else {
            alert('Monastery not found! Check spelling.');
        }
    });
}

// Show modal function
function showMonasteryDetails(monastery) {
    const modal = document.getElementById("monasteryModal");
    const modalContent = document.getElementById("monasteryDetails");
    modalContent.innerHTML = `
        <h2>${monastery.name}</h2>
        <p>${monastery.description}</p>
    `;
    modal.classList.add("active");
}

// Close modal
document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("monasteryModal").classList.remove("active");
});

// Initialize map when window loads
window.onload = initMap;



// Show Modal with Monastery Details
function showMonasteryModal(monastery) {
    const modal = document.getElementById("monasteryModal");
    const modalContent = document.getElementById("monasteryDetails");
    modalContent.innerHTML = `
        <h2>${monastery.name}</h2>
        <p>${monastery.description}</p>
    `;
    modal.classList.add("active");
}

// Close Modal
document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("monasteryModal").classList.remove("active");
});

// Initialize map when window loads
window.onload = initMap;
