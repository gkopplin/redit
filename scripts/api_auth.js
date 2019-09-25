<<<<<<< HEAD
export const signup = (username, email, password) => {
=======
export const signup = (email, username, password) => {
>>>>>>> 9fe00a40f77eeea84362ef4e4e73bea77ed79545
    fetch('http://thesi.generalassemb.ly:8080/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            username,
            email,
            password
        }),
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => console.log(err));
};

export const login = () => {

};
