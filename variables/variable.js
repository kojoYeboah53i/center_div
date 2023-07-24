

window.addEventListener('load', () => {

    console.log('variable.js is working');

    const switched = document.querySelector('.content .header .switch');
    
    switched.addEventListener('click', function(e) {
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });


});