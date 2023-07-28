

window.addEventListener('load', () => {

    console.log('variable.js is working');

    const switched = document.querySelector('.content .header .switch');
    
    switched.addEventListener('click', function(e) {
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });

    setInterval(() => {
    const width = window.innerWidth;
    if(width <= 480) {
        console.log('width is less than 480');
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('sidebar-short');
    }
    }, 4000);

    const showBtn = document.querySelector('.show span');
    const sidebar = document.querySelector('.sidebar');

    showBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.remove('sidebar-short');
        sidebar.classList.toggle('sidebar-full');
    });
});