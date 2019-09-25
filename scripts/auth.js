import {signup, login} from './api_auth';

export default () => {
    // Create elements
    const auth = document.createElement('div');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const username = document.createElement('input');
    const email = document.createElement('input');
    const password = document.createElement('input');
    const close = document.createElement('a');
    const submit = document.createElement('button');

    // Add classnames
    auth.className = 'auth';
    content.className = 'content';
    form.className = 'form';
    close.className = 'close';
    username.className = 'username';
    email.className = 'email';
    password.className = 'password';
    submit.className = 'submit';

    // Prep elements
    username.setAttribute('placeholder', 'Enter a username');
    email.setAttribute('placeholder', 'Enter your email');
    password.setAttribute('placeholder', 'Enter a password');
    close.innerHTML = '&#10060';
    close.onclick = () => {
        auth.style.visibility = "hidden";

    };
    form.onsubmit = e => {
        e.preventDefault();
        signup(username.value, email.value, password.value);
    };
    submit.setAttribute('type', 'submit');
    submit.innerText = 'Submit';

    // Append elements
    form.append(username);
    form.append(email);
    form.append(password);
    form.append(submit);
    form.append(close); 
    content.append(form);
    auth.append(content);


    return auth;
};
