
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
        console.log(response);
        localStorage.setItem('auth_key', response.token);
        document.body.children[1].firstChild.children[2].style.visibility = 'hidden';
        document.body.children[1].firstChild.children[0].style.display = 'none'; //toggles sign up
        document.body.children[1].children[0].children[1].style.display = 'inline-flex';
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
            // console.log(response);
            document.body.children[1].firstChild.children[0].style.display = 'none'; //toggles sign up
            document.body.children[1].children[0].children[1].style.display = 'inline-flex'; //toggles logged/userID
            document.body.children[1].firstChild.children[2].style.visibility = 'hidden';
            localStorage.setItem('auth_key', response.token);

        })
        .catch(err => console.log(err));
};
