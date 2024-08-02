// script.js

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('constellation');
    const ctx = canvas.getContext('2d');
    const popup = document.getElementById('image-popup');
    const popupImg = document.getElementById('popup-img');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Star data (name, x, y, image path)
    const stars = [
        {name: "Star 1", x: 200, y: 150, image: "./img/image1.jpg"},
        {name: "Star 2", x: 500, y: 300, image: "./img/image2.jpg"},
        {name: "Star 3", x: 800, y: 450, image: "./img/image3.jpg"},
        // Add more stars as needed
    ];

    // Draw the stars on the canvas
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        });
    }

    // Check if a star was clicked
    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        stars.forEach(star => {
            const distance = Math.sqrt((mouseX - star.x) ** 2 + (mouseY - star.y) ** 2);
            if (distance < 10) {
                popupImg.src = star.image;
                popup.style.display = "block";
            }
        });
    });

    // Close the popup when clicking outside of the image
    popup.addEventListener('click', function () {
        popup.style.display = "none";
    });

    // Initial draw
    drawStars();

    // Redraw stars on window resize
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawStars();
    });
});
