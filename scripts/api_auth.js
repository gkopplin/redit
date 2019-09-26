
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
        let allLoggedOut = document.querySelectorAll('.logged-out');
        let allLoggedIn = document.querySelectorAll('.logged-in');
        console.log(response);
        localStorage.setItem('auth_key', response.token);
        localStorage.setItem('username', response.username);
        document.body.children[1].firstChild.children[2].style.visibility = 'hidden'; //hide modal

        for (let item of allLoggedOut) {
          item.style.display = "none";
        }
        for (let item of allLoggedIn) {
          item.style.display = 'inline';
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
            //refactor code later
            let allLoggedOut = document.querySelectorAll('.logged-out');
            let allLoggedIn = document.querySelectorAll('.logged-in');
            document.body.children[1].firstChild.children[2].style.visibility = 'hidden';
            localStorage.setItem('auth_key', response.token);
            localStorage.setItem('username', response.username);
            
            for (let item of allLoggedOut) {
              item.style.display = "none";
            }
            for (let item of allLoggedIn) {
              item.style.display = 'inline';
            }

        })
        .catch(err => console.log(err));
};
