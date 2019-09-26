import {signup, login} from './api_auth';

export default () => {
    // Create elements
    const auth = document.createElement('div');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const email = document.createElement('input');
    const username = document.createElement('input');
    const password = document.createElement('input');
    const close = document.createElement('a');
    const submit = document.createElement('button');

    // Add classnames
    auth.className = 'auth';
    content.className = 'content';
    form.className = 'form';
    close.className = 'close';
    email.className = 'email';
    username.className = 'username';
    password.className = 'password';
    submit.className = 'submit';

    // Prep elements
    email.setAttribute('placeholder','Enter a valid email address');
    username.setAttribute('placeholder', 'Enter a username');
    password.setAttribute('placeholder', 'Enter a password');
    close.innerHTML = '&#10060';
    close.onclick = () => {         //make function to call within onsubmit
        auth.style.visibility = "hidden";
    };

    //in progress/clean up later!
    form.onsubmit = e => {
      e.preventDefault();
        if(auth.firstChild.firstChild.children[3].innerText === 'Log in') {
          login(email.value, password.value);
        } else {
          signup(username.value, email.value, password.value);
        }
      auth.style.visibility = "hidden";   // add redirect for invalid email/user

      username.value = "";
      email.value = "";
      password.value = "";
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
