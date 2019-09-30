import {fetchPosts} from './api_crud';

export default () => {
    const homepage = document.querySelector('.homepage');
    const header = document.querySelector('.header');
    while (homepage.firstChild) {
        homepage.removeChild(homepage.firstChild);
    }
    homepage.append(header);

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

    fetchPosts();
};