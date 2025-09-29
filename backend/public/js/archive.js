document.addEventListener('DOMContentLoaded', function() {
    
    // Data remains the same as the previous step
    const monasteryData = {
        "Rumtek": {
            images: [
                'murals.png',
                'documents.png',
                'manuscripts.png'
            ],
            "Murals": "The walls of Rumtek Monastery, the seat of the Karmapa in exile, are adorned with vibrant and intricate murals that serve as visual representations of Buddhist teachings. The main prayer hall features splendid depictions of the Kagyu lineage, showcasing the masters who have upheld this tradition. Alongside them are paintings of the eight great Bodhisattvas, beings who have dedicated themselves to the enlightenment of all. A particularly noteworthy mural is that of Lord Ganapathy (Ganesha), a testament to the confluence of Hindu and Buddhist traditions in the region. The entrance is guarded by imposing images of the Four Guardian Kings, protectors of the cardinal directions.",
            "Manuscripts": "Rumtek Monastery houses a significant library containing a complete set of the Kangyur (the translated words of the Buddha) and the Tengyur (the translated commentaries on the teachings). These sacred texts form the cornerstone of the Tibetan Buddhist canon. The library also holds a collection of rare manuscripts, including biographies of eminent figures in the Kagyu lineage.",
            "Documents": "The monastery's archives contain a wealth of historical documents. The British Library's Endangered Archives Programme has digitized a selection of these, providing a valuable resource for researchers. These digitized records include monastic accounts, documents relating to a land dispute, and records of a case against a former head lama, offering insights into the administrative and social history of the monastery."
        },
        "Enchey": {
            images: [
                'murals.png',
                'documents.png',
                'manuscripts.png'
            ],
            "Murals": "Enchey Monastery, meaning the \"Solitary Temple,\" is renowned for its beautiful murals. The walls of the main prayer hall are covered with paintings of the four religious kings who are considered the primary protectors of the Buddhist doctrine in the four cardinal directions. The murals also depict a vast pantheon of Mahayana Buddhist deities, creating a visually immersive spiritual experience for visitors and devotees.",
            "Manuscripts": "While a detailed public catalogue is not readily available, Enchey Monastery is known to preserve a collection of ancient manuscripts and scriptures. These texts are carefully stored within the monastery, reflecting its role as a center for the preservation of Buddhist literature.",
            "Documents": "Historical records of Enchey Monastery trace its origins to the revered Lama Drupthob Karpo, who is believed to have subdued local spirits and established a hermitage at the site. Documents pertaining to the monastery's history, its administration, and its connection to the Nyingma school of Tibetan Buddhism are maintained within its precincts."
        },
        "Dubdi": {
            images: [
                'murals.png',
                'documents.png',
                'manuscripts.png'
            ],
            "Murals": "As the oldest monastery in Sikkim, established in 1701, Dubdi Monastery, or the \"Hermit's Cell,\" features murals of immense historical and artistic value. The interior walls are exquisitely painted with images of divinities, saints, and other revered figures from the Buddhist pantheon. These murals, though aged, continue to radiate a powerful spiritual aura.",
            "Manuscripts": "Dubdi is home to a rare collection of manuscripts and ritual texts. While a specific inventory is not publicly accessible, these ancient texts are considered invaluable to the heritage of Sikkimese Buddhism and the Nyingma tradition to which the monastery belongs.",
            "Documents": "The foundational history of Dubdi Monastery is intrinsically linked to the establishment of the kingdom of Sikkim. Historical documents narrate the story of its founder, Lhatsun Namkha Jigme, and the two other lamas who consecrated the first Chogyal (king) of Sikkim. These records are vital for understanding the early history of both the monastery and the state."
        },
        "Pemayangtse": {
            images: [
                'murals.png',
                'documents.png',
                'manuscripts.png'
            ],
            "Murals": "The murals of Pemayangtse Monastery, the \"Perfect Sublime Lotus,\" are particularly noted for their depiction of Guru Padmasambhava, the 8th-century master who is credited with establishing Buddhism in Tibet and the Himalayas. The monastery's walls showcase intricate paintings of Guru Rinpoche's eight manifestations, each representing a different aspect of his life and teachings.",
            "Manuscripts": "The first floor of the Pemayangtse Monastery is dedicated to housing a collection of ancient manuscripts and religious texts. These scriptures are an essential part of the monastery's role as a premier center of the Nyingma order in Sikkim.",
            "Documents": "Pemayangtse Monastery has a deep and well-documented historical connection with the Chogyal dynasty of Sikkim. Archival documents detail the patronage the monastery received from the kings, its role in the state's religious affairs, and its involvement in significant historical events, including the establishment of the Lho-Mon-Tsong-Sum, a council of the three major communities of Sikkim."
        }
    };

    const archiveContainer = document.getElementById('archive-container');

    function renderMonasterySections() {
        let finalHTML = '';
        const categoryOrder = ['Murals', 'Manuscripts', 'Documents'];

        for (const monasteryName in monasteryData) {
            // This part of the loop that creates the monastery sections remains unchanged
            const monastery = monasteryData[monasteryName];
            const slidesHTML = monastery.images.map(imgSrc => `<div class="slide"><img src="${imgSrc}" alt="${monasteryName} Archive Image"></div>`).join('');
            const galleryHTML = `
                <div class="featured-gallery-container" data-total-slides="${monastery.images.length}" data-current-slide="0">
                    <div class="slider-viewport">
                        <div class="slides-container">${slidesHTML}</div>
                    </div>
                    ${monastery.images.length > 1 ? `
                        <button class="slider-btn prev-btn"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="slider-btn next-btn"><i class="fa-solid fa-chevron-right"></i></button>
                    ` : ''}
                </div>`;
            const textDetailsHTML = categoryOrder.map(category => {
                const text = monastery[category];
                if (!text) return '';
                const paragraphId = `desc-${monasteryName.toLowerCase().replace(/\s+/g, '-')}-${category.toLowerCase()}`;
                return `
                    <div class="category-block">
                        <h3 class="category-title">${category}</h3><hr>
                        <p class="item-description collapsed" id="${paragraphId}">${text}</p>
                        <a class="view-more-link" data-target="${paragraphId}">
                            <span>View More</span> <i class="fa-solid fa-chevron-down"></i>
                        </a>
                    </div>`;
            }).join('');
            finalHTML += `
                <section class="monastery-section">
                    <h2 class="monastery-title">${monasteryName}</h2>
                    <div class="content-wrapper">
                        ${galleryHTML}
                        <div class="text-details-container">
                            ${textDetailsHTML}
                        </div>
                    </div>
                </section>
            `;
        }

        // --- NEW --- Add the "Further Resources" section at the end ---
        const resourcesHTML = `
            <section class="resources-section">
                <h2 class="resources-title">Further Resources</h2>
                <p class="resources-text">
                    For those seeking more in-depth information, the Namgyal Institute of Tibetology in Gangtok houses a vast collection of Tibetan Buddhist manuscripts, thangkas, and statues, some of which originate from or are related to these monasteries. The Sikkim State Archives may also hold official documents and records pertaining to the history and administration of these monastic institutions. Furthermore, academic journals and publications on Himalayan art, religion, and history can offer scholarly analyses of the murals and manuscripts of these venerable centers of Sikkimese culture.
                </p>
            </section>
        `;
        finalHTML += resourcesHTML;
        // --- END OF NEW PART ---

        archiveContainer.innerHTML = finalHTML;

        document.querySelectorAll('.featured-gallery-container').forEach(gallery => {
            updateGalleryHeight(gallery);
        });
    }

    // All other functions (updateGalleryHeight, handleSlider, event listener) remain the same
    function updateGalleryHeight(gallery) {
        const currentSlideIndex = parseInt(gallery.dataset.currentSlide, 10);
        const currentImage = gallery.querySelectorAll('.slide img')[currentSlideIndex];
        const updateHeight = () => {
            const containerWidth = currentImage.clientWidth;
            if (currentImage.naturalWidth > 0) {
                const newHeight = (currentImage.naturalHeight / currentImage.naturalWidth) * containerWidth;
                gallery.style.height = `${newHeight}px`;
            }
        };
        if (currentImage.complete) {
            updateHeight();
        } else {
            currentImage.addEventListener('load', updateHeight, { once: true });
        }
    }

    function handleSlider(button) {
        const gallery = button.closest('.featured-gallery-container');
        const slidesContainer = gallery.querySelector('.slides-container');
        const totalSlides = parseInt(gallery.dataset.totalSlides, 10);
        let currentSlide = parseInt(gallery.dataset.currentSlide, 10);
        if (button.classList.contains('next-btn')) {
            currentSlide = (currentSlide + 1) % totalSlides;
        } else {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        }
        gallery.dataset.currentSlide = currentSlide;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateGalleryHeight(gallery);
    }

    archiveContainer.addEventListener('click', function(e) {
        const viewMoreLink = e.target.closest('.view-more-link');
        const sliderButton = e.target.closest('.slider-btn');
        if (viewMoreLink) {
            e.preventDefault();
            const paragraphId = viewMoreLink.dataset.target;
            const paragraph = document.getElementById(paragraphId);
            const textSpan = viewMoreLink.querySelector('span');
            if (paragraph) {
                const isCollapsed = paragraph.classList.contains('collapsed');
                paragraph.classList.toggle('collapsed');
                viewMoreLink.classList.toggle('expanded', !isCollapsed);
                textSpan.textContent = isCollapsed ? 'View Less' : 'View More';
            }
        }
        if (sliderButton) {
            handleSlider(sliderButton);
        }
    });
    
    renderMonasterySections();
});