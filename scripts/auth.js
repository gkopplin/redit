export default () => {
    const auth = document.createElement('div');
    const form = document.createElement('form');
    const username = document.createElement('input');
    const password = document.createElement('password');

    username.className = 'username';
    password.className = 'password';
    username.setAttribute('placeholder', 'Enter a username');
    password.setAttribute('placeholder', 'Enter a password');
};