document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function(e) {
        e.preventDefault();
        alert('You clicked on ' + this.getAttribute('title'));
        window.location.href = this.getAttribute('href');
    });
});
