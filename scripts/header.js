export default () => {
    let header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'header here';

    // Login and Signup buttons
    const buttons = document.createElement('div');
    const login = document.createElement('button');
    const signup = document.createElement('button');
    login.className = 'login';
    signup.className = 'signup';
    login.innerHTML = 'Log in';
    signup.innerHTML = 'Sign up';
    buttons.append(login);
    buttons.append(signup);
    header.append(buttons);

    return header;
  };
