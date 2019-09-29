import {signup, login} from './api_auth';

export default () => {
    // Create elements
    const auth = document.createElement('div');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const form = document.createElement('form');
    const email = document.createElement('input');
    const username = document.createElement('input');
    const password = document.createElement('input');
    const close = document.createElement('a');
    const submit = document.createElement('button');

    // Add classnames
    auth.classList.add('modal', 'auth');
    content.className = 'auth-content';
    title.className = 'auth-title';
    form.className = 'form';
    close.className = 'close';
    email.className = 'email';
    username.className = 'username';
    password.className = 'password';
    submit.className = 'auth-submit';

    // element attributes
    email.setAttribute('placeholder','Enter a valid email');
    username.setAttribute('placeholder', 'Enter a username');
    password.setAttribute('placeholder', 'Enter a password');
    password.setAttribute('type', 'password');
    close.innerHTML = '&#10060';
    close.onclick = () => {         //make function to call within onsubmit
        auth.style.visibility = "hidden";
        const error = document.querySelector('.auth-error');
        error && error.remove();
    };

    //in progress/clean up later!
    form.onsubmit = e => {
      e.preventDefault();
        if(document.querySelector('.auth-submit').innerText === 'Log in') {
          login(email.value, password.value);
        } else {
          signup(username.value, email.value, password.value);
        }

      username.value = "";
      email.value = "";
      password.value = "";
    };

    submit.setAttribute('type', 'submit');
    submit.innerText = 'submit';

    // Append elements
    content.append(close);
    content.append(title);
    form.append(email);
    form.append(username);
    form.append(password);
    form.append(submit);
    content.append(form);
    auth.append(content);


    return auth;
};
