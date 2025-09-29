class Monastery360 {
    constructor() {
        this.currentPage = 'home';
        this.isOnline = navigator.onLine;

        this.monasteries = {
            rumtek: {
                name: 'Rumtek Monastery',
                description: 'The largest monastery in Sikkim, known as the Dharma Chakra Centre. Built in the 1960s, it serves as the seat of the Karmapa.',
                founded: '1966',
                tradition: 'Kagyu School of Tibetan Buddhism',
                highlights: ['Golden Stupa', 'Main Prayer Hall', 'Monastery Museum', 'Traditional Architecture'],
                visitingHours: '6:00 AM - 6:00 PM',
                location: 'Gangtok, East Sikkim',
                lat: 27.3385,
                lng: 88.6068
            },
            pemayangtse: {
                name: 'Pemayangtse Monastery',
                description: 'One of the oldest and most important monasteries in Sikkim, meaning "Perfect Sublime Lotus". Founded in 1705.',
                founded: '1705',
                tradition: 'Nyingma School of Tibetan Buddhism',
                highlights: ['Seven-tiered Wooden Structure', 'Ancient Murals', 'Sacred Relics', 'Mountain Views'],
                visitingHours: '7:00 AM - 5:00 PM',
                location: 'Pelling, West Sikkim',
                lat: 27.3240,
                lng: 88.1970
            },
            tashiding: {
                name: 'Tashiding Monastery',
                description: 'Sacred monastery built on a heart-shaped hill, considered one of the holiest sites in Sikkim. Famous for its annual Bhumchu festival.',
                founded: '1717',
                tradition: 'Nyingma School of Tibetan Buddhism',
                highlights: ['Sacred Chortens', 'Bhumchu Festival', 'Hilltop Location', 'Prayer Flags'],
                visitingHours: '6:00 AM - 6:00 PM',
                location: 'Tashiding, West Sikkim',
                lat: 27.3280,
                lng: 88.2130
            },
            enchey: {
                name: 'Enchey Monastery',
                description: 'Built on a site blessed by Lama Druptob Karpo, this monastery is known for its annual Cham dance performances.',
                founded: '1909',
                tradition: 'Nyingma School of Tibetan Buddhism',
                highlights: ['Cham Dance Festival', 'City Views', 'Traditional Architecture', 'Sacred Masks'],
                visitingHours: '5:00 AM - 7:00 PM',
                location: 'Gangtok, East Sikkim',
                lat: 27.3330,
                lng: 88.6130
            },
            dubdi: {
                name: 'Dubdi Monastery',
                description: 'The oldest monastery in Sikkim, also known as Yuksom Monastery. Built by Lhatsun Chenpo in 1701.',
                founded: '1701',
                tradition: 'Nyingma School of Tibetan Buddhism',
                highlights: ['Historical Significance', 'Forest Setting', 'Ancient Artifacts', 'Meditation Caves'],
                visitingHours: '6:00 AM - 5:00 PM',
                location: 'Yuksom, West Sikkim',
                lat: 27.3470,
                lng: 88.2550
            }
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateCalendar();
        this.setupOfflineHandling();
        this.setupServiceWorker();
        this.initMap();
    }

    // ===============================
    // Event Listeners
    // ===============================
    setupEventListeners() {
        document.querySelectorAll('.nav-link, .cta-button, .feature-card').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.closest('[data-page]')?.dataset.page;
                if (page) this.navigateTo(page);
            });
        });

        document.getElementById('mobileMenuToggle').addEventListener('click', () => {
            document.getElementById('navMenu').classList.toggle('active');
        });

        document.getElementById('modalClose').addEventListener('click', () => {
            document.getElementById('monasteryModal').classList.remove('active');
        });

        document.getElementById('playTour').addEventListener('click', () => this.playVirtualTour());
        document.getElementById('pauseTour').addEventListener('click', () => this.pauseVirtualTour());
        document.getElementById('audioToggle').addEventListener('click', () => this.toggleAudio());
        document.getElementById('fullscreen').addEventListener('click', () => this.toggleFullscreen());

        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitBooking();
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('calendar-day') && e.target.classList.contains('has-event')) {
                this.showCalendarEvent(e.target.dataset.date);
            }
        });
    }

    // ===============================
    // Page Navigation
    // ===============================
    navigateTo(page) {
        document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
        document.getElementById(page).classList.add('active');
        this.currentPage = page;

        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector(`[data-page="${page}"]`)?.classList.add('active');

        document.getElementById('navMenu').classList.remove('active');
    }

    // ===============================
    // Monastery Details Modal
    // ===============================
    showMonasteryDetails(monasteryId) {
        const monastery = this.monasteries[monasteryId];
        if (!monastery) return;

        const detailsHTML = `
            <h2>${monastery.name}</h2>
            <p><strong>Founded:</strong> ${monastery.founded}</p>
            <p><strong>Tradition:</strong> ${monastery.tradition}</p>
            <p><strong>Location:</strong> ${monastery.location}</p>
            <p><strong>Visiting Hours:</strong> ${monastery.visitingHours}</p>
            <h3>Description</h3>
            <p>${monastery.description}</p>
            <h3>Highlights</h3>
            <ul>${monastery.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
            <div style="margin-top: 2rem;">
                <button class="cta-button" onclick="app.navigateTo('tours')" style="margin-right: 1rem;">🎥 Virtual Tour</button>
                <button class="cta-button" onclick="app.navigateTo('booking')">📅 Book Visit</button>
            </div>
        `;

        document.getElementById('monasteryDetails').innerHTML = detailsHTML;
        document.getElementById('monasteryModal').classList.add('active');
    }

    // ===============================
    // Google Map Initialization + Search
    // ===============================
    initMap() {
        const mapCenter = { lat: 27.3389, lng: 88.6065 };
        const map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 8,
            center: mapCenter
        });

        // Add markers
        Object.entries(this.monasteries).forEach(([id, monastery]) => {
            const marker = new google.maps.Marker({
                position: { lat: monastery.lat, lng: monastery.lng },
                map: map,
                title: monastery.name
            });

            marker.addListener('click', () => {
                this.showMonasteryDetails(id);
            });
        });

        // ✅ Select search input and button
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('mapSearch');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.toLowerCase().trim();

                const monasteryEntry = Object.entries(this.monasteries).find(
                    ([id, monastery]) => monastery.name.toLowerCase().includes(query)
                );

                if (monasteryEntry) {
                    const [id, monastery] = monasteryEntry;
                    map.setCenter({ lat: monastery.lat, lng: monastery.lng });
                    map.setZoom(15);
                    this.showMonasteryDetails(id);
                } else {
                    alert('Monastery not found! Try typing part of the name, e.g. "rumtek".');
                }
            });
        }
    }

    // ===============================
    // Virtual Tour
    // ===============================
    playVirtualTour() { /* your code */ }
    pauseVirtualTour() { /* your code */ }
    toggleAudio() { alert('Audio toggle clicked'); }
    toggleFullscreen() { /* your code */ }

    // ===============================
    // Booking
    // ===============================
    submitBooking() { /* your code */ }

    // ===============================
    // Archive & Calendar
    // ===============================
    openArchiveItem(type) { /* your code */ }
    generateCalendar() { /* your code */ }
    showCalendarEvent(date) { /* your code */ }

    // ===============================
    // Offline Handling & Service Worker
    // ===============================
    setupOfflineHandling() {
        const offlineIndicator = document.getElementById('offlineIndicator');
        window.addEventListener('online', () => { this.isOnline = true; offlineIndicator.classList.remove('show'); });
        window.addEventListener('offline', () => { this.isOnline = false; offlineIndicator.classList.add('show'); });
        if (!navigator.onLine) offlineIndicator.classList.add('show');
    }

    setupServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('Service Worker registered successfully'))
                .catch(() => console.log('Service Worker registration failed'));
        }
    }
}

// ===============================
// Initialize App
// ===============================
const app = new Monastery360();
window.app = app;
