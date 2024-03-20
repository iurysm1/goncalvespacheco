document.querySelectorAll('.content').forEach(card => {
    card.addEventListener('click', function() {
        console.log('teste')
        this.classList.toggle('rotate');
    });
    

});