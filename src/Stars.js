function createStars(rating) {
    const starsContainer = document.getElementById('stars');
    starsContainer.innerHTML = ''; // Clear previous stars

    for (let i = 0; i < rating; i++) {
        const star = '⭐';
        star.alt = 'Star';
        star.className = 'star';
        starsContainer.appendChild(star);
    }

}

createStars(3);
