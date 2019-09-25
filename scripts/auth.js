export default () => {
    const auth = document.createElement('div');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const username = document.createElement('input');
    const password = document.createElement('input');
    const close = document.createElement('a');

    auth.className = 'auth';
    content.className = 'content';
    form.className = 'form';
    close.className = 'close';
    username.className = 'username';
    password.className = 'password';

    username.setAttribute('placeholder', 'Enter a username');
    password.setAttribute('placeholder', 'Enter a password');
    close.innerHTML = '&#10060';

    form.append(username);
    form.append(password);
    form.append(close); //switch later for layout purposes
    content.append(form);
    auth.append(content);

    return auth;
};
