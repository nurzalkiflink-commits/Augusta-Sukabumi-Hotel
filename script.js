/* ==========================================================================
   Augusta Hotel & Resort - JavaScript Logic (Multi-page, Multibahasa, Multi-tema)
   Features: Theme Switcher, Language Switcher, Multi-page Room Filter,
             Restaurant Filter, Universal Modal, WhatsApp Booking Calculator
   ========================================================================== */

// 1. Multibahasa Room Data for Universal Modal & Pricing
const roomsData = {
    'Suite': {
        name: 'Suite Room',
        price: 1250000,
        image: 'images/rooms/suite.jpg',
        fallback: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Suite Room merupakan tipe kamar termewah dan paling luas yang kami miliki di Augusta Sukabumi. Dirancang khusus untuk memberikan pengalaman menginap berkelas dengan kenyamanan privasi yang maksimal. Sangat cocok bagi pasangan bulan madu maupun keluarga yang mendambakan kemewahan.',
        desc_en: 'Suite Room is the most luxurious and spacious room tier at Augusta Sukabumi. Specially designed to provide a high-class stay experience with maximum privacy and comfort. Perfectly suited for honeymoon couples or families seeking premium luxury.',
        amenities_id: [
            'Luas Kamar 54 m²',
            '1 Tempat Tidur King Size Premium',
            'Ruang Tamu & Ruang Keluarga Terpisah',
            'Balkon Pribadi dengan Pemandangan Gunung',
            'Bathtub Mewah & Shower Air Panas/Dingin',
            'Sarapan Gratis untuk 2 Orang',
            'Smart TV 50" dengan Akses Streaming',
            'Mini Bar Lengkap & Coffee Maker',
            'Akses Wi-Fi Kecepatan Tinggi Gratis',
            'Brankas Pribadi (Safe Deposit Box)',
            'Layanan VIP & Amenities Premium'
        ],
        amenities_en: [
            'Room Size 54 sqm',
            '1 Premium King Size Bed',
            'Separate Living Room & Family Lounge',
            'Private Balcony with Mountain View',
            'Luxurious Bathtub & Hot/Cold Shower',
            'Complimentary Breakfast for 2 Persons',
            '50" Smart TV with Streaming Access',
            'Fully Stocked Mini Bar & Coffee Maker',
            'Free High-Speed Wi-Fi Access',
            'In-Room Safe Deposit Box',
            'VIP Guest Services & Premium Amenities'
        ]
    },
    'Glamping': {
        name: 'Glamping Room',
        price: 950000,
        image: 'images/rooms/glamping.jpg',
        fallback: 'https://images.unsplash.com/photo-1533577116850-9cc662db0010?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Glamping (Glamorous Camping) Room menyajikan konsep menginap yang unik dan menyatu dengan keasrian alam Sukabumi tanpa mengorbankan kenyamanan fasilitas hotel berbintang. Bangunan kubah (dome) modern dengan interior hangat, dikelilingi taman hijau yang tenang.',
        desc_en: 'Glamping (Glamorous Camping) Room offers a unique stay experience, blending directly with the lush nature of Sukabumi without sacrificing the comfort of star-hotel facilities. A modern dome building with warm interiors, surrounded by peaceful green gardens.',
        amenities_id: [
            'Luas Area 36 m²',
            '1 Tempat Tidur Queen Size',
            'Teras Pribadi dengan Kursi & Hammock',
            'Pemandangan Taman Hijau Terbuka',
            'Kamar Mandi Semi-Outdoor dengan Water Heater',
            'Sarapan Gratis untuk 2 Orang',
            'Televisi LED 32"',
            'Perlengkapan Teh & Kopi',
            'Akses Wi-Fi Gratis',
            'Pendingin Ruangan (AC)',
            'Sensasi Bermalam Dekat Alam'
        ],
        amenities_en: [
            'Area Size 36 sqm',
            '1 Cozy Queen Size Bed',
            'Private Terrace with Chairs & Hammock',
            'Open Green Garden Views',
            'Semi-Outdoor Bathroom with Water Heater',
            'Complimentary Breakfast for 2 Persons',
            '32" LED Television',
            'In-room Tea & Coffee Facilities',
            'Free Wi-Fi Access',
            'Air Conditioning (AC)',
            'Authentic Nature Sleeping Experience'
        ]
    },
    'VIP': {
        name: 'VIP Room',
        price: 850000,
        image: 'images/rooms/vip.jpg',
        fallback: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        desc_id: 'VIP Room menawarkan kenyamanan eksklusif bagi Anda yang menghargai ketenangan dan detail estetika dalam ruangan. Berlokasi di sayap bangunan utama yang tenang, kamar ini dilengkapi dengan furnitur modern berkualitas tinggi dan pelayanan prima.',
        desc_en: 'VIP Room offers exclusive comfort for those who appreciate tranquility and aesthetic room details. Located in the quiet wing of the main building, this room is furnished with high-quality modern furniture and excellent hospitality services.',
        amenities_id: [
            'Luas Kamar 42 m²',
            '1 Tempat Tidur King Size',
            'Area Duduk Nyaman dengan Sofa Empuk',
            'Kamar Mandi Luas dengan Shower & Bathtub',
            'Sarapan Gratis untuk 2 Orang',
            'Smart TV 43" dengan Saluran Kabel',
            'Mini Kulkas & Coffee/Tea Maker',
            'Akses Wi-Fi Kecepatan Tinggi Gratis',
            'Balkon dengan Pemandangan Resort',
            'Layanan Pembersihan Kamar 2x Sehari',
            'Sandals & Bathrobes Eksklusif'
        ],
        amenities_en: [
            'Room Size 42 sqm',
            '1 Comfortable King Size Bed',
            'Cozy Seating Area with Plush Sofa',
            'Spacious Bathroom with Shower & Bathtub',
            'Complimentary Breakfast for 2 Persons',
            '43" Smart TV with Cable Channels',
            'Mini Refrigerator & Coffee/Tea Maker',
            'Free High-Speed Wi-Fi Access',
            'Balcony with Resort Scenic Views',
            'Twice-Daily Housekeeping Service',
            'Exclusive Room Slippers & Bathrobes'
        ]
    },
    'Deluxe 1': {
        name: 'Deluxe 1 (King Bed)',
        price: 700000,
        image: 'images/rooms/deluxe1.jpg',
        fallback: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Deluxe 1 merupakan kamar deluxe pilihan dengan 1 tempat tidur King Size berukuran besar. Kamar ini didesain bernuansa hangat dengan akses langsung ke arah taman tropis resort melalui teras luar pribadi yang teduh.',
        desc_en: 'Deluxe 1 is a premium deluxe room featuring 1 large King Size bed. The room is designed with warm tones, providing direct access to the resort’s tropical garden through a private shaded outdoor terrace.',
        amenities_id: [
            'Luas Kamar 32 m²',
            '1 Tempat Tidur King Size',
            'Teras Pribadi Menghadap Taman Tropis',
            'Kamar Mandi Modern dengan Shower Panas/Dingin',
            'Sarapan Gratis untuk 2 Orang',
            'Televisi LED 40" dengan Saluran Kabel',
            'Wi-Fi Gratis di dalam Kamar',
            'Pendingin Ruangan (AC) & Kipas Angin',
            'Meja Kerja & Kursi Santai',
            'Ketel Listrik & Air Mineral Gratis'
        ],
        amenities_en: [
            'Room Size 32 sqm',
            '1 King Size Double Bed',
            'Private Terrace Facing Tropical Garden',
            'Modern Bathroom with Hot/Cold Shower',
            'Complimentary Breakfast for 2 Persons',
            '40" LED TV with Cable Channels',
            'In-room Free Wi-Fi Access',
            'Air Conditioning (AC) & Ceiling Fan',
            'Work Desk & Lounge Chair',
            'Electric Kettle & Complimentary Bottled Water'
        ]
    },
    'Deluxe 2': {
        name: 'Deluxe 2 (Twin Bed)',
        price: 650000,
        image: 'images/rooms/deluxe2.jpg',
        fallback: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Deluxe 2 sangat ideal bagi Anda yang bepergian bersama rekan kerja atau anggota keluarga lainnya karena menyediakan 2 tempat tidur Single (Twin Beds) terpisah. Jendela kamar yang besar menghadap langsung ke arah kesegaran kolam renang utama.',
        desc_en: 'Deluxe 2 is highly ideal for those traveling with colleagues or family members, providing 2 separate Single (Twin Beds). The large room windows face directly towards the refreshing main swimming pool area.',
        amenities_id: [
            'Luas Kamar 32 m²',
            '2 Tempat Tidur Single (Twin Size)',
            'Pemandangan Langsung ke Kolam Renang',
            'Kamar Mandi Modern dengan Pancuran Air Hangat',
            'Sarapan Gratis untuk 2 Orang',
            'Televisi LED 40" dengan Saluran Kabel',
            'Wi-Fi Gratis di dalam Kamar',
            'Pendingin Ruangan (AC)',
            'Mini Kulkas & Perlengkapan Kopi/Teh',
            'Meja Rias & Lemari Pakaian Luas'
        ],
        amenities_en: [
            'Room Size 32 sqm',
            '2 Twin Single Beds',
            'Scenic Views Overlooking Swimming Pool',
            'Modern Bathroom with Hot Shower',
            'Complimentary Breakfast for 2 Persons',
            '40" LED TV with Cable Channels',
            'In-room Free Wi-Fi Access',
            'Air Conditioning (AC)',
            'Mini Refrigerator & Coffee/Tea Facilities',
            'Dressing Table & Large Wardrobe'
        ]
    },
    'Superior': {
        name: 'Superior Room',
        price: 550000,
        image: 'images/rooms/superior.jpg',
        fallback: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Superior Room adalah pilihan akomodasi yang sangat populer karena memadukan fungsionalitas modern, kehangatan tata ruang, dan harga yang sangat bersahabat bagi wisatawan keluarga maupun pebisnis.',
        desc_en: 'Superior Room is a highly popular accommodation choice, combining modern functionality, a warm layout, and a very friendly price tag for both leisure families and business travelers.',
        amenities_id: [
            'Luas Kamar 28 m²',
            '1 Tempat Tidur Queen Size',
            'Pemandangan Lanskap Asri',
            'Kamar Mandi Bersih dengan Shower',
            'Sarapan Gratis untuk 2 Orang',
            'Televisi LED 32" dengan Saluran Kabel',
            'Wi-Fi Gratis',
            'Pendingin Ruangan (AC)',
            'Ketel Listrik untuk Air Panas',
            'Meja Tulis Ringkas'
        ],
        amenities_en: [
            'Room Size 28 sqm',
            '1 Queen Size Bed',
            'Lush Green Landscape Views',
            'Clean Bathroom with Shower',
            'Complimentary Breakfast for 2 Persons',
            '32" LED TV with Cable Channels',
            'Free Wi-Fi Access',
            'Air Conditioning (AC)',
            'Electric Hot Water Kettle',
            'Compact Writing Desk'
        ]
    },
    'Standard': {
        name: 'Standard Room',
        price: 425000,
        image: 'images/rooms/standard.jpg',
        fallback: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
        desc_id: 'Standard Room kami menyajikan solusi akomodasi yang bersih, rapi, ekonomis, dan nyaman bagi Anda yang mengutamakan esensi fungsionalitas istirahat selama berada di Sukabumi.',
        desc_en: 'Our Standard Room offers a clean, tidy, economical, and comfortable lodging solution for those who prioritize the essential functionality of resting during their stay in Sukabumi.',
        amenities_id: [
            'Luas Kamar 22 m²',
            '1 Tempat Tidur Double Size',
            'Kamar Mandi Dalam dengan Pancuran Shower',
            'Sarapan Gratis untuk 1-2 Orang',
            'Televisi LED 32"',
            'Akses Wi-Fi Gratis',
            'Pendingin Ruangan (AC)',
            'Air Mineral Botol Gratis Setiap Hari',
            'Kamar yang Bersih & Higienis'
        ],
        amenities_en: [
            'Room Size 22 sqm',
            '1 Cozy Double Bed',
            'En-Suite Bathroom with Shower Unit',
            'Complimentary Breakfast for 1-2 Persons',
            '32" LED Television',
            'Free Wi-Fi Access',
            'Air Conditioning (AC)',
            'Complimentary Daily Bottled Water',
            'Squeaky Clean & Hygenic Room environment'
        ]
    }
};

// State Variables
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const slideInterval = 4000;

// Initialize Document
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme and Language First Paint (Before loading listeners)
    applySavedPreferences();

    // 2. Hero Slideshow Auto-play (only if elements exist)
    if (slides.length > 0) {
        setInterval(nextSlide, slideInterval);
    }

    // 3. Setup Default Dates for Booking Calculator (Tomorrow & Day After)
    initDefaultDates();

    // 4. Initial Pricing Calculation
    updateBookingCalculation();

    // 5. Setup Mobile Menu Toggle
    setupMobileMenu();
});

// ==========================================================================
// 2. Preferences Initializer (Language)
// ==========================================================================
function applySavedPreferences() {
    // Apply Language
    const savedLang = localStorage.getItem('augusta-lang');
    if (savedLang === 'en') {
        document.body.classList.add('lang-en-active');
    } else {
        document.body.classList.remove('lang-en-active');
    }
}

// Toggle Language (ID <-> EN)
function toggleLanguage() {
    const isEn = document.body.classList.contains('lang-en-active');
    if (isEn) {
        document.body.classList.remove('lang-en-active');
        localStorage.setItem('augusta-lang', 'id');
    } else {
        document.body.classList.add('lang-en-active');
        localStorage.setItem('augusta-lang', 'en');
    }
    
    // Recalculate prices if booking form is present (to adjust language labels)
    updateBookingCalculation();
}

// ==========================================================================
// 3. Slideshow Functions
// ==========================================================================
function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// ==========================================================================
// 4. Mobile Navigation Menu Logic
// ==========================================================================
function setupMobileMenu() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    if (navToggle && navbar) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
            navToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });

        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && !navToggle.contains(e.target) && navbar.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    }
}

// ==========================================================================
// 5. Interactive Tab Filters (Facilities, Restaurant Menu, & Rooms Page)
// ==========================================================================

// Rooms Page Category Filter
function filterRooms(category) {
    // 1. Update Filter Buttons active class
    const filterButtons = document.querySelectorAll('.rooms-filter-container .filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = Array.from(filterButtons).find(btn => btn.getAttribute('onclick').includes(category));
    if (activeBtn) activeBtn.classList.add('active');

    // 2. Filter Cards
    const roomCards = document.querySelectorAll('.rooms-grid .room-card');
    roomCards.forEach(card => {
        const cardCategory = card.getAttribute('data-room-type');
        
        // Category classification
        let matches = false;
        if (category === 'all') {
            matches = true;
        } else if (category === 'luxury') {
            matches = (cardCategory === 'Suite' || cardCategory === 'VIP');
        } else if (category === 'nature') {
            matches = (cardCategory === 'Glamping' || cardCategory === 'Deluxe 1');
        } else if (category === 'budget') {
            matches = (cardCategory === 'Deluxe 2' || cardCategory === 'Superior' || cardCategory === 'Standard');
        }

        if (matches) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Interactive Facilities Tab
function showFacility(facilityId) {
    const tabButtons = document.querySelectorAll('.facilities-tabs-header .tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = Array.from(tabButtons).find(btn => btn.getAttribute('onclick').includes(facilityId));
    if (activeBtn) activeBtn.classList.add('active');

    const contentItems = document.querySelectorAll('.facility-content-item');
    contentItems.forEach(item => item.classList.remove('active'));

    const targetContent = document.getElementById(`facility-${facilityId}`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

// Restaurant Page Menu Filter
function filterMenu(category) {
    const menuButtons = document.querySelectorAll('.menu-tabs .menu-tab-btn');
    menuButtons.forEach(btn => btn.classList.remove('active'));

    const activeBtn = Array.from(menuButtons).find(btn => btn.getAttribute('onclick').includes(category));
    if (activeBtn) activeBtn.classList.add('active');

    const menuCards = document.querySelectorAll('.menu-grid .menu-card');
    menuCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==========================================================================
// 6. Universal Room Details Modal Logic (Supporting Multibahasa)
// ==========================================================================
function openRoomModal(roomKey) {
    const data = roomsData[roomKey];
    if (!data) return;

    const isEn = document.body.classList.contains('lang-en-active');

    // Populate modal fields
    const modalImg = document.getElementById('modal-room-image');
    if (modalImg) {
        modalImg.src = data.image;
        modalImg.setAttribute('data-fallback', data.fallback);
        modalImg.alt = `Augusta ${data.name}`;
    }
    
    const modalTitle = document.getElementById('modal-room-title');
    if (modalTitle) modalTitle.innerText = data.name;

    const modalPrice = document.getElementById('modal-room-price');
    if (modalPrice) modalPrice.innerText = `${formatRupiah(data.price)} /malam`;

    const modalDesc = document.getElementById('modal-room-description');
    if (modalDesc) {
        modalDesc.innerText = isEn ? data.desc_en : data.desc_id;
    }

    // Populate Amenities List (Multibahasa)
    const amenitiesUl = document.getElementById('modal-amenities-list');
    if (amenitiesUl) {
        amenitiesUl.innerHTML = '';
        const activeAmenities = isEn ? data.amenities_en : data.amenities_id;
        activeAmenities.forEach(amenity => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${amenity}`;
            amenitiesUl.appendChild(li);
        });
    }

    // Setup modal booking redirect link
    const bookBtn = document.getElementById('modal-book-btn');
    if (bookBtn) {
        bookBtn.setAttribute('onclick', `bookRoomRedirect('${roomKey}'); closeRoomModal();`);
    }

    // Show Modal
    const modal = document.getElementById('room-detail-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeRoomModal() {
    const modal = document.getElementById('room-detail-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function closeRoomModalOutside(event) {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer && !modalContainer.contains(event.target)) {
        closeRoomModal();
    }
}

// Redirects room selections to the booking page with query param or pre-fills it
function bookRoomRedirect(roomKey) {
    // Check if we are already on booking.html
    const roomSelect = document.getElementById('booking-room');
    if (roomSelect) {
        roomSelect.value = roomKey;
        updateBookingCalculation();
        const bookingForm = document.getElementById('whatsapp-booking-form');
        if (bookingForm) {
            bookingForm.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Redirect to booking.html with parameter
        window.location.href = `booking.html?room=${encodeURIComponent(roomKey)}`;
    }
}

// ==========================================================================
// 7. Booking Engine & Price Calculator Logic (Supporting Multibahasa)
// ==========================================================================
function initDefaultDates() {
    const checkinInput = document.getElementById('booking-checkin');
    const checkoutInput = document.getElementById('booking-checkout');
    const quickCheckin = document.getElementById('quick-checkin');
    const quickCheckout = document.getElementById('quick-checkout');

    // 1. If we are on booking.html, check for query parameters to pre-fill room
    const urlParams = new URLSearchParams(window.location.search);
    const roomParam = urlParams.get('room');
    const mainRoomSelect = document.getElementById('booking-room');
    if (roomParam && mainRoomSelect) {
        mainRoomSelect.value = roomParam;
    }

    // Dates calculations
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(dayAfter.getDate() + 1);

    const tomorrowStr = formatDateISO(tomorrow);
    const dayAfterStr = formatDateISO(dayAfter);

    // Apply values safely
    if (checkinInput) {
        checkinInput.min = formatDateISO(today);
        checkinInput.value = tomorrowStr;
    }
    if (checkoutInput) {
        checkoutInput.min = tomorrowStr;
        checkoutInput.value = dayAfterStr;
    }
    if (quickCheckin) {
        quickCheckin.min = formatDateISO(today);
        quickCheckin.value = tomorrowStr;
    }
    if (quickCheckout) {
        quickCheckout.min = tomorrowStr;
        quickCheckout.value = dayAfterStr;
    }
}

function formatDateISO(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Calculate nights and prices dynamically (runs safely on any page)
function updateBookingCalculation() {
    const roomSelect = document.getElementById('booking-room');
    const checkinInput = document.getElementById('booking-checkin');
    const checkoutInput = document.getElementById('booking-checkout');
    
    // Elements to update
    const breakdownRoomType = document.getElementById('breakdown-room-type');
    const breakdownRoomRate = document.getElementById('breakdown-room-rate');
    const breakdownNights = document.getElementById('breakdown-nights');
    const breakdownSubtotal = document.getElementById('breakdown-subtotal');
    const breakdownTax = document.getElementById('breakdown-tax');
    const breakdownService = document.getElementById('breakdown-service');
    const breakdownTotal = document.getElementById('breakdown-total');

    if (!roomSelect || !checkinInput || !checkoutInput) return;

    const isEn = document.body.classList.contains('lang-en-active');

    // Get pricing from selection attributes
    const selectedOption = roomSelect.options[roomSelect.selectedIndex];
    const roomKey = roomSelect.value;
    const roomPrice = parseInt(selectedOption.getAttribute('data-price')) || 0;

    // Calculate Nights
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);
    
    if (checkinInput.value) {
        const minCheckoutDate = new Date(checkinDate);
        minCheckoutDate.setDate(minCheckoutDate.getDate() + 1);
        checkoutInput.min = formatDateISO(minCheckoutDate);
    }

    let nights = 0;
    if (checkinInput.value && checkoutInput.value && checkoutDate > checkinDate) {
        const diffTime = Math.abs(checkoutDate - checkinDate);
        nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    // Calculations
    const subtotal = roomPrice * nights;
    const tax = Math.round(subtotal * 0.11);
    const service = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax + service;

    // Format numbers
    const formattedRate = `${formatRupiah(roomPrice)} /${isEn ? 'night' : 'malam'}`;
    const formattedNights = `${nights} ${isEn ? 'Nights' : 'Malam'}`;

    // Update UI Elements safely
    if (breakdownRoomType) breakdownRoomType.innerText = `${roomKey} Room`;
    if (breakdownRoomRate) breakdownRoomRate.innerText = formattedRate;
    if (breakdownNights) breakdownNights.innerText = formattedNights;
    if (breakdownSubtotal) breakdownSubtotal.innerText = formatRupiah(subtotal);
    if (breakdownTax) breakdownTax.innerText = formatRupiah(tax);
    if (breakdownService) breakdownService.innerText = formatRupiah(service);
    if (breakdownTotal) breakdownTotal.innerText = formatRupiah(grandTotal);
}

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

// Handles Hero check quick widget (safely redirects to booking.html if not there)
function handleQuickBook(event) {
    event.preventDefault();
    
    const quickCheckin = document.getElementById('quick-checkin');
    const quickCheckout = document.getElementById('quick-checkout');
    const quickRoom = document.getElementById('quick-room');
    const quickGuests = document.getElementById('quick-guests');

    if (!quickCheckin || !quickCheckout || !quickRoom || !quickGuests) return;

    // Check if we are on booking.html
    const mainCheckin = document.getElementById('booking-checkin');
    if (mainCheckin) {
        // Already on booking.html, transfer values and scroll
        const mainCheckout = document.getElementById('booking-checkout');
        const mainRoom = document.getElementById('booking-room');
        const mainGuests = document.getElementById('booking-guests');
        const bookingSection = document.getElementById('booking');

        mainCheckin.value = quickCheckin.value;
        mainCheckout.value = quickCheckout.value;
        mainRoom.value = quickRoom.value;
        
        if (quickGuests.value === '1') mainGuests.value = '1 Dewasa';
        else if (quickGuests.value === '2') mainGuests.value = '2 Dewasa';
        else if (quickGuests.value === '3') mainGuests.value = '2 Dewasa & 1 Anak';
        else mainGuests.value = '3+ Dewasa';

        updateBookingCalculation();
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Redirect to booking.html with query parameters
        const room = encodeURIComponent(quickRoom.value);
        const checkin = encodeURIComponent(quickCheckin.value);
        const checkout = encodeURIComponent(quickCheckout.value);
        const guests = encodeURIComponent(quickGuests.value);
        window.location.href = `booking.html?room=${room}&in=${checkin}&out=${checkout}&guests=${guests}`;
    }
}

// Special check on booking.html to load quick search parameters from url
if (window.location.pathname.includes('booking.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const room = urlParams.get('room');
        const checkin = urlParams.get('in');
        const checkout = urlParams.get('out');
        const guests = urlParams.get('guests');

        const mainCheckin = document.getElementById('booking-checkin');
        const mainCheckout = document.getElementById('booking-checkout');
        const mainRoom = document.getElementById('booking-room');
        const mainGuests = document.getElementById('booking-guests');

        if (mainCheckin && checkin) mainCheckin.value = checkin;
        if (mainCheckout && checkout) mainCheckout.value = checkout;
        if (mainRoom && room) mainRoom.value = room;
        if (mainGuests && guests) {
            if (guests === '1') mainGuests.value = '1 Dewasa';
            else if (guests === '2') mainGuests.value = '2 Dewasa';
            else if (guests === '3') mainGuests.value = '2 Dewasa & 1 Anak';
            else mainGuests.value = '3+ Dewasa';
        }

        updateBookingCalculation();
    });
}

// ==========================================================================
// 8. WhatsApp Booking Form Submission (Supporting Multibahasa)
// ==========================================================================
function submitToWhatsApp(event) {
    event.preventDefault();

    // Form Field Values
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();
    const room = document.getElementById('booking-room').value;
    const guests = document.getElementById('booking-guests').value;
    const checkinVal = document.getElementById('booking-checkin').value;
    const checkoutVal = document.getElementById('booking-checkout').value;
    const notes = document.getElementById('booking-notes').value.trim();

    // Verify dates
    const checkinDate = new Date(checkinVal);
    const checkoutDate = new Date(checkoutVal);
    const isEn = document.body.classList.contains('lang-en-active');
    
    if (checkoutDate <= checkinDate) {
        if (isEn) {
            alert("Check-out date must be after the check-in date.");
        } else {
            alert("Tanggal check-out harus setelah tanggal check-in.");
        }
        return;
    }

    // Calculate nights & prices
    const roomSelect = document.getElementById('booking-room');
    const selectedOption = roomSelect.options[roomSelect.selectedIndex];
    const roomPrice = parseInt(selectedOption.getAttribute('data-price')) || 0;
    
    const diffTime = Math.abs(checkoutDate - checkinDate);
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const subtotal = roomPrice * nights;
    const tax = Math.round(subtotal * 0.11);
    const service = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax + service;

    const checkinFormatted = formatDateIndo(checkinDate, isEn);
    const checkoutFormatted = formatDateIndo(checkoutDate, isEn);

    // Guest translation mapping
    let guestsText = guests;
    if (isEn) {
        if (guests === '1 Dewasa') guestsText = '1 Adult';
        else if (guests === '2 Dewasa') guestsText = '2 Adults';
        else if (guests === '2 Dewasa & 1 Anak') guestsText = '2 Adults & 1 Child';
        else if (guests === '2 Dewasa & 2 Anak') guestsText = '2 Adults & 2 Children';
        else guestsText = 'Group Booking (3+ Adults)';
    }

    // Construct WhatsApp message based on active language
    let message = "";
    if (isEn) {
        message = `*HELLO AUGUSTA HOTEL & RESORT SUKABUMI*\n`;
        message += `I would like to make a room reservation with the following details:\n\n`;
        message += `*1. Guest Details:*\n`;
        message += `• Full Name: ${name}\n`;
        message += `• WhatsApp No: ${phone}\n\n`;
        message += `*2. Booking Details:*\n`;
        message += `• Room Type: ${room} Room\n`;
        message += `• Total Guests: ${guestsText}\n`;
        message += `• Check-in Date: ${checkinFormatted}\n`;
        message += `• Check-out Date: ${checkoutFormatted}\n`;
        message += `• Duration of Stay: ${nights} Night(s)\n\n`;
        message += `*3. Estimated Billing Breakdown:*\n`;
        message += `• Room Rate: ${formatRupiah(roomPrice)} / night\n`;
        message += `• Room Subtotal: ${formatRupiah(subtotal)}\n`;
        message += `• Taxes (11%) & Service (5%): ${formatRupiah(tax + service)}\n`;
        message += `• *GRAND TOTAL:* *${formatRupiah(grandTotal)}*\n\n`;
        
        if (notes) {
            message += `*4. Special Requests:*\n`;
            message += `_"${notes}"_\n\n`;
        }
        
        message += `Is this room tier still available for the specified dates? Please send me the availability confirmation and payment instructions. Thank you.`;
    } else {
        message = `*HALO AUGUSTA HOTEL & RESORT SUKABUMI*\n`;
        message += `Saya ingin melakukan reservasi kamar dengan detail sebagai berikut:\n\n`;
        message += `*1. Data Pemesan:*\n`;
        message += `• Nama Lengkap: ${name}\n`;
        message += `• No. WhatsApp: ${phone}\n\n`;
        message += `*2. Detail Reservasi:*\n`;
        message += `• Tipe Kamar: ${room} Room\n`;
        message += `• Jumlah Tamu: ${guestsText}\n`;
        message += `• Tanggal Check-in: ${checkinFormatted}\n`;
        message += `• Tanggal Check-out: ${checkoutFormatted}\n`;
        message += `• Durasi: ${nights} Malam\n\n`;
        message += `*3. Rincian Estimasi Biaya:*\n`;
        message += `• Tarif Kamar: ${formatRupiah(roomPrice)} / malam\n`;
        message += `• Subtotal Kamar: ${formatRupiah(subtotal)}\n`;
        message += `• PPN (11%) & Servis (5%): ${formatRupiah(tax + service)}\n`;
        message += `• *TOTAL ESTIMASI:* *${formatRupiah(grandTotal)}*\n\n`;
        
        if (notes) {
            message += `*4. Catatan Khusus:*\n`;
            message += `_"${notes}"_\n\n`;
        }
        
        message += `Apakah tipe kamar tersebut masih tersedia untuk tanggal di atas? Mohon informasi ketersediaan dan instruksi pembayaran selanjutnya. Terima kasih.`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "6285795441992";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Nice formatting for date in Indonesian or English
function formatDateIndo(date, isEn = false) {
    if (isEn) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    } else {
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }
}

// Global Image Error Fallback Handler (For local custom images)
document.addEventListener('error', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        const fallbackUrl = e.target.getAttribute('data-fallback');
        if (fallbackUrl && e.target.src !== fallbackUrl) {
            e.target.src = fallbackUrl;
        }
    }
}, true); // Use capture phase because error events do not bubble
