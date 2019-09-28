import createAuthModal from './auth.js';
import createPost from './create_post';
import { fetchPosts, fetchPostbyId } from './api_crud.js';
import createHeader from './header';

export default () => {

    // Create elements
    const header = document.createElement('div');
    const buttons = document.createElement('div');
    const logged = document.createElement('div');
    const login = document.createElement('button');
    const signup = document.createElement('button');
    const userId = document.createElement('div');
    const logout = document.createElement('button');
    const createPostButton = document.createElement('button');
    const createPostModal = createPost();                       //
    const authModal = createAuthModal();
    const logo = document.createElement('p');

    //classnames
    header.className = 'header';
    login.classList.add('login','logged-out');
    signup.classList.add('signup','logged-out');
    logout.classList.add('logout', 'logged-in');
    userId.classList.add('userid', 'logged-in');
    buttons.classList.add('buttons','logged-out');
    logged.classList.add('logged', 'logged-in');
    createPostButton.classList.add('create-button', 'logged-in');
    logo.className = 'logo';

    //assign text to elements
    login.innerHTML = 'Log in';
    signup.innerHTML = 'Sign up';
    logout.innerHTML = 'Logout';
    createPostButton.innerHTML = 'Create a post';
    userId.innerHTML = localStorage.getItem('username');
    logo.innerHTML = 'redit';

    // Add event listeners
    createPostButton.onclick = () => {
        createPostModal.style.visibility = 'initial';
    };

    //append elements to DOM
    buttons.append(login);
    buttons.append(signup);
    logged.append(userId);
    logged.append(logout);
    logged.append(createPostButton);
    header.append(logo);
    header.append(buttons);
    header.append(logged);
    header.append(authModal);
    header.append(createPostModal);

    function openModal(buttonClicked) {
      authModal.style.visibility = 'initial';
      authModal.firstChild.firstChild.children[3].innerText = buttonClicked;
        if(buttonClicked === 'Log in') {
          authModal.firstChild.firstChild.children[0].style.display = 'none';
        } else {
          authModal.firstChild.firstChild.children[0].style.display = 'inline';
        }
    }
    login.onclick = () => openModal('Log in');
    signup.onclick = () => openModal('Sign up');

    const logOut = () => {
      localStorage.removeItem('auth_key');

      let allLoggedOut = document.querySelectorAll('.logged-out');
      let allLoggedIn = document.querySelectorAll('.logged-in');

      for (let item of allLoggedOut) {
        item.style.display = "inline";
      }
      for (let item of allLoggedIn) {
        item.style.display = 'none';
      }

    };
    logout.onclick = logOut;
    
    const refresh = () => {
        const homepage = document.querySelector('.homepage');
        while (homepage.firstChild) {
            homepage.removeChild(homepage.firstChild);
        }
        homepage.append(header);

        if (localStorage.getItem('auth_key')) {                           //fake inputs trigger logged in still and show undefined userID 
            let allLoggedOut = document.querySelectorAll('.logged-out');
            let allLoggedIn = document.querySelectorAll('.logged-in');

            for (let item of allLoggedOut) {
                item.style.display = "none";
            }
            for (let item of allLoggedIn) {
                item.style.display = 'inline';
            }
        }
        
        fetchPosts();
    };

    logo.onclick = () => {
      window.location.hash = '';
    };

    window.onhashchange = () => {
      if (window.location.hash.length === 0) {
        refresh();
      } else {
        fetchPostbyId(window.location.hash);
      }
    };

    return header;
  };
