import {createHomepage} from './homepage.js';

createHomepage();

if (localStorage.getItem('auth_key')) {                           
    let allLoggedOut = document.querySelectorAll('.logged-out');
    let allLoggedIn = document.querySelectorAll('.logged-in');

    for (let item of allLoggedOut) {
        item.style.display = "none";
    }
    for (let item of allLoggedIn) {
        item.style.display = 'inline';
    }
}
