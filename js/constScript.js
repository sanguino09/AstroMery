document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Vas a ver el cielo de ' + this.getAttribute('title'));
        window.location.href = this.getAttribute('href');
    });
});
