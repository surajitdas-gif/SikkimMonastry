document.addEventListener('DOMContentLoaded', function () {

    const detailedAgencies = [
        {
            name: "Adarsh Tours, Treks & Expedition",
            image: "sikkim1.jpg",
            location: "Gangtok, Sikkim",
            specialization: "Sikkim Tours & Treks",
            description: "Comprehensive tour and trek operator based in Gangtok, offering a wide range of services for exploring Sikkim.",
            rating: 4.7,
            contact: {
                phone: "+91 97332 78527",
                email: "sikkimtour@gmail.com",
                website: "www.adarshtours.com"
            },
            services: ["Monastery Tours", "Trekking Packages", "North Sikkim Trips", "Custom Itineraries"],
            websiteUrl: "https://www.adarshtours.com/"
        },
        {
            name: "Sikkim Tours & Travels",
            image: "sikkim2.jpg",
            location: "Gangtok, Sikkim",
            specialization: "All Sikkim",
            description: "A well-known agency providing extensive travel services and packages for all major destinations across Sikkim.",
            rating: 4.8,
            contact: {
                phone: "+91 70766 01882",
                email: "sikkimtours@yahoo.com",
                website: "www.sikkimtours.com"
            },
            services: ["Complete Monastery Circuit", "Cultural Tours", "Family Packages", "Honeymoon Trips"],
            websiteUrl: "https://www.sikkimtours.com/"
        },
        {
            name: "Ease Tours & Treks",
            image: "sikkim3.jpg",
            location: "Gangtok, Sikkim",
            specialization: "Adventure & Treks",
            description: "Specializes in adventure tourism and trekking, offering curated experiences for thrill-seekers in Sikkim.",
            rating: 4.6,
            contact: {
                phone: "+91 95932 67846",
                email: "easetours@gmail.com",
                website: "easetourssikkim.com"
            },
            services: ["Trekking Expeditions", "Monastery Hiking Trails", "Adventure Sports", "Village Tourism"],
            websiteUrl: "https://easetourssikkim.com/"
        },
        {
            name: "North Sikkim Sharing",
            image: "sikkim4.jpg",
            location: "North Sikkim Specialist",
            specialization: "Budget North Sikkim",
            description: "A budget-friendly specialist for North Sikkim, offering shared and private tours to Lachen, Lachung, and Gurudongmar Lake.",
            rating: 4.9,
            contact: {
                phone: "+91 73169 66824",
                email: "Contact form on site",
                website: "www.northsikkimsharing.com"
            },
            services: ["Shared North Sikkim Tours", "Lachen & Lachung Packages", "Zero Point Trips", "Gurudongmar Lake Visits"],
            websiteUrl: "https://www.northsikkimsharing.com/"
        },
        {
            name: "Your Tours & Travels",
            image: "sikkim5.jpeg",
            location: "Sikkim & Darjeeling",
            specialization: "DMC for Sikkim & Darjeeling",
            description: "A professional Destination Management Company (DMC) providing comprehensive travel packages and local services for Sikkim and Darjeeling.",
            rating: 4.8,
            contact: {
                phone: "+91 97320 60000",
                email: "Contact form on site",
                website: "www.yourtours.in"
            },
            services: ["Sikkim & Darjeeling Packages", "Hotel Bookings", "Transportation Services", "Monastery Sightseeing"],
            websiteUrl: "https://www.yourtours.in/"
        },
        {
            name: "Sikkim Adventure Tourism",
            image: "sikkim6.jpg",
            location: "Sikkim & North Bengal",
            specialization: "Adventure & Regional Tours",
            description: "Offers adventure and tour packages with operations covering both Sikkim and the Siliguri region.",
            rating: 4.6,
            contact: {
                phone: "+91 81455 84286",
                email: "help@northbengaltourism.com",
                website: "sikkimadventuretourism.com"
            },
            services: ["Trekking", "River Rafting", "Paragliding", "Monastery Visits"],
            websiteUrl: "https://sikkimadventuretourism.com/"
        },
        {
            name: "TripView Travel",
            image: "sikkim7.jpg",
            location: "Sikkim Local Agency",
            specialization: "Local Sikkim Tours",
            description: "A local travel agency in Sikkim providing various tour packages and travel services for visitors.",
            rating: 4.5,
            contact: {
                phone: "Available on site",
                email: "Contact form on site",
                website: "tripviewtravel.com"
            },
            services: ["Customized Tours", "Local Sightseeing", "Monastery Visits", "Hotel Arrangements"],
            websiteUrl: "https://tripviewtravel.com/travel-agency-sikkim/"
        },
        {
            name: "Marcopolo World Travels",
            image: "sikkim8.jpg",
            location: "Gangtok, Sikkim",
            specialization: "Regional & Cross-border",
            description: "An experienced travel agency in Gangtok with a strong network for tours across Sikkim and neighboring regions.",
            rating: 4.7,
            contact: {
                phone: "+91 94341 44194",
                email: "mwtgangtok@gmail.com",
                website: "N/A"
            },
            services: ["Sikkim Tours", "Bhutan & Nepal Trips", "Cultural Monastery Visits", "Buddhist Circuit Tours"],
            websiteUrl: ""
        },
        {
            name: "Blue Sky Tours and Treks",
            image: "sikkim9.jpg",
            location: "Gangtok, Sikkim",
            specialization: "Tours & Treks",
            description: "Gangtok-based agency offering local tours and trekking services. Known for personalized itineraries.",
            rating: 4.5,
            contact: {
                phone: "+91 87983 04933",
                email: "blueskytourism@yahoo.com",
                website: "N/A"
            },
            services: ["Local Sightseeing", "Trekking", "East Sikkim Monastery Tour", "Car Rentals"],
            websiteUrl: ""
        },
        {
            name: "Namgyal Treks & Tours",
            image: "sikkim10.jpg",
            location: "Gangtok, Sikkim",
            specialization: "Sightseeing & Trekking",
            description: "Specializes in sightseeing tours and trekking adventures, providing experienced guides for exploring Sikkim's beauty.",
            rating: 4.6,
            contact: {
                phone: "+91 70762 80069",
                email: "namgyaltreks@gmail.com",
                website: "N/A"
            },
            services: ["Trekking", "Monastery Sightseeing", "Pemayangtse Tour", "Yuksom Trips"],
            websiteUrl: ""
        },
        {
            name: "Thomas Cook India",
            image: "sikkim11.jpg",
            location: "National Operator",
            specialization: "Package Tours",
            description: "A major national tour operator providing structured holiday packages for Sikkim, including monastery sightseeing tours.",
            rating: 4.5,
            contact: {
                phone: "Use website/call center",
                email: "Use website",
                website: "www.thomascook.in"
            },
            services: ["All-inclusive Packages", "Guided Tours", "Flight & Hotel Bundles", "Sikkim Monastery Tours"],
            websiteUrl: "https://www.thomascook.in/"
        },
        {
            name: "MakeMyTrip / Goibibo",
             image: "sikkim12.jpg",
            location: "Online Travel Agency",
            specialization: "Online Bookings",
            description: "Leading Online Travel Agencies (OTAs) where you can book flights, hotels, and holiday packages for Sikkim offered by various local partners.",
            rating: 4.8,
            contact: {
                phone: "Via app/website support",
                email: "Via app/website support",
                website: "www.makemytrip.com"
            },
            services: ["Sikkim Holiday Packages", "Hotel Booking", "Flight Tickets", "Car Rentals"],
            websiteUrl: "https://www.makemytrip.com/holidays/india/sikkim-travel-packages.html"
        },
    ];

    const container = document.getElementById('agency-details-list');
    const searchInput = document.getElementById('searchInput');

    function generateRatingStars(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa fa-star"></i>';
        }
        if (halfStar) {
            starsHTML += '<i class="fa fa-star-half-alt"></i>';
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa fa-star-o" aria-hidden="true"></i>';
        }
        return starsHTML;
    }

    function renderAgencyDetails(agenciesToRender) {
        if (!container) return;

        if (agenciesToRender.length === 0) {
            container.innerHTML = '<p class="no-results">No agencies found matching your search criteria.</p>';
            return;
        }

        let allCardsHTML = '';
        agenciesToRender.forEach(agency => {
            const servicesList = agency.services.map(service => `<li>${service}</li>`).join('');
            
            const websiteButtonHTML = agency.websiteUrl ? 
                `<a href="${agency.websiteUrl}" class="agency-details-btn" target="_blank" rel="noopener noreferrer">Visit Agency Website</a>` :
                '';

            const cardHTML = `
                <div class="agency-card-detailed">
                    <div class="agency-img-container">
                        <img src="${agency.image}" alt="${agency.name}" class="agency-img-detailed">
                    </div>
                    <div class="agency-content-detailed">
                        <div class="agency-header">
                             <div class="agency-header-title">
                                <h3 class="agency-title-detailed">${agency.name}</h3>
                                <div class="agency-specialization">
                                    <i class="fa-solid fa-compass"></i> ${agency.specialization}
                                </div>
                            </div>
                            <div class="agency-rating" title="${agency.rating} out of 5 stars">
                                ${generateRatingStars(agency.rating)}
                            </div>
                        </div>
                        <div class="agency-info-grid">
                            <div class="info-block">
                                <h4><i class="fa fa-info-circle"></i>About</h4>
                                <p>${agency.description}</p>
                            </div>
                            <div class="info-block">
                                <h4><i class="fa fa-gopuram"></i>Featured Services</h4>
                                <ul>${servicesList}</ul>
                            </div>
                             <div class="info-block">
                                <h4><i class="fa fa-map-marker-alt"></i>Contact Details</h4>
                                <p><i class="fa fa-location-dot"></i>${agency.location}</p>
                                <p><i class="fa fa-phone"></i>${agency.contact.phone}</p>
                                <p><i class="fa fa-envelope"></i>${agency.contact.email}</p>
                            </div>
                        </div>
                        ${websiteButtonHTML}
                    </div>
                </div>
            `;
            allCardsHTML += cardHTML;
        });
        container.innerHTML = allCardsHTML;
    }

    function filterAgencies() {
        const query = searchInput.value.toLowerCase().trim();
        const filteredAgencies = detailedAgencies.filter(agency => {
            const searchableText = [
                agency.name,
                agency.location,
                agency.description,
                agency.specialization,
                ...agency.services
            ].join(' ').toLowerCase();
            
            return searchableText.includes(query);
        });
        renderAgencyDetails(filteredAgencies);
    }

    searchInput.addEventListener('keyup', filterAgencies);
    
    renderAgencyDetails(detailedAgencies);
});