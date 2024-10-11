const imageSelect = document.getElementById('imageSelect');
const displayImageSection = document.getElementById('image-section');

// Image options
const images = {
    image1: 'https://makronom.eu/wp-content/uploads/2023/05/156233807_m_normal_none_optimized.jpg',
    image2: 'https://impressmagazin.hu/wp-content/uploads/2016/11/solar01.jpg',
    image3: 'https://www.eon.hu/content/dam/eon/eon-hungary/images/blog/solar/eon-solar-napelemrendszerek-megujulo-energiaforrasok_2x1.jpeg',
};

// Change image based on select value
imageSelect.addEventListener('change', function () {
    const selectedImage = images[this.value];
    displayImageSection.style.backgroundImage = `url(${selectedImage})`;
    displayImageSection.style.backgroundSize = 'cover';  // Make sure the background covers the section
    displayImageSection.style.backgroundPosition = 'center';  // Center the background image
});