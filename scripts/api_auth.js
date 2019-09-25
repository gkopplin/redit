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
    })
    .catch(err => console.log(err));
};

export const login = () => {

};