
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
        // Error handling
        if (response.httpStatus) {
            const error = document.createElement('p');
            error.className = 'auth-error';
            error.innerHTML = response.httpStatus;
            document.querySelector('.content').append(error);
        } else {
            let allLoggedOut = document.querySelectorAll('.logged-out');
            let allLoggedIn = document.querySelectorAll('.logged-in');
            localStorage.setItem('auth_key', response.token);
            localStorage.setItem('username', response.username);
            document.querySelector('.auth').style.visibility = 'hidden'; //hide modal

            for (let item of allLoggedOut) {
            item.style.display = "none";
            }
            for (let item of allLoggedIn) {
            item.style.display = 'inline';
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
            // Error handling
            if (response.httpStatus) {
                const error = document.createElement('p');
                error.innerHTML = response.message;
                error.className = 'auth-error';
                document.querySelector('.content').append(error);
            } else {
                //refactor code later
                let allLoggedOut = document.querySelectorAll('.logged-out');
                let allLoggedIn = document.querySelectorAll('.logged-in');
                document.querySelector('.auth').style.visibility = 'hidden'; //hide modal
                localStorage.setItem('auth_key', response.token);
                localStorage.setItem('username', response.username);
                
                for (let item of allLoggedOut) {
                item.style.display = "none";
                }
                for (let item of allLoggedIn) {
                item.style.display = 'inline';
                }

                document.querySelector('.userid').innerHTML = response.username;
            }
        })
        .catch(err => console.log(err));
};
