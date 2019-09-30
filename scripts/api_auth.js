
import refresh from './refresh_util';
import {fetchPostbyId} from './api_crud';

export const signup = (username, email, password) => {
    fetch('http://thesi.generalassemb.ly:8080/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        }),
    })
    .then(response => response.json())
    .then(response => {
        // Clear existing errors
        const error = document.querySelector('.auth-error');
        error && error.remove();

        // Error handling
        if (response.httpStatus) {
            const error = document.createElement('p');
            error.className = 'auth-error';
            error.innerHTML = response.httpStatus === "BAD_REQUEST" ? "Credentials invalid" : response.httpStatus;
            document.querySelector('.auth-content').append(error);
        } else {
            localStorage.setItem('auth_key', response.token);
            localStorage.setItem('username', response.username);
            document.querySelector('.userid').innerHTML = response.username;
            document.querySelector('.auth').style.visibility = 'hidden'; //hide modal

            if (window.location.hash.length === 0) {
                refresh();
            } else {
                fetchPostbyId(window.location.hash);
            }
        }
    })
    .catch(err => console.log(err));
};

export const login = (email, password) => {
    fetch('http://thesi.generalassemb.ly:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        }),
    })
        .then(response => response.json())
        .then(response => {
            // Clear existing errors
            const error = document.querySelector('.auth-error');
            error && error.remove();
            
            // Error handling
            if (response.httpStatus) {
                const error = document.createElement('p');
                error.innerHTML = response.message;
                error.className = 'auth-error';
                document.querySelector('.auth-content').append(error);
            } else {
                document.querySelector('.auth').style.visibility = 'hidden'; //hide modal
                localStorage.setItem('auth_key', response.token);
                localStorage.setItem('username', response.username);
                document.querySelector('.userid').innerHTML = response.username;

                if (window.location.hash.length === 0) {
                    refresh();
                } else {
                    fetchPostbyId(window.location.hash);
                }

            }
        })
        .catch(err => console.log(err));
};
