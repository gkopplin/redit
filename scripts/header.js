import createModal from './auth.js';

export default () => {
    let header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'header here';

    // Login and Signup buttons
    const buttons = document.createElement('div');
    const logged = document.createElement('div');
    const login = document.createElement('button');
    const signup = document.createElement('button');
    const userId = document.createElement('div');         //added userID
    const logout = document.createElement('button');    //added logout button
    //classnames
    login.className = 'login';
    signup.className = 'signup';
    logout.className = 'logout';
    userId.className = 'userid';
    buttons.className = 'buttons';
    logged.className = 'logged';
    //assign text to elements
    login.innerHTML = 'Log in';
    signup.innerHTML = 'Sign up';
    logout.innerHTML = 'Logout';
    userId.innerHTML = 'Christopher Cook';  //just placeholder will pull from logged user!

    //append elements to DOM
    buttons.append(login);
    buttons.append(signup);
    logged.append(userId);
    logged.append(logout);
    header.append(buttons);
    header.append(logged);

    const modal = createModal();
    header.append(modal);

    function openModal(buttonClicked) {
        modal.style.visibility = 'initial';
        modal.firstChild.firstChild.children[3].innerText = buttonClicked;
        if(buttonClicked === 'Log in') {
          modal.firstChild.firstChild.children[0].style.display = 'none';
        } else {
          modal.firstChild.firstChild.children[0].style.display = 'inline';
        }
    }
    login.onclick = () => openModal('Log in');
    signup.onclick = () => openModal('Sign up');

    const logOut = () => {
      localStorage.removeItem('auth_key');
      buttons.style.display = 'inline';
      logged.style.display = 'none';
    }
    logout.onclick = logOut;

    return header;
  };
