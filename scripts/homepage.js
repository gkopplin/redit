import createHeader from './header.js';
import {fetchPosts, fetchPostbyId} from './api_crud.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  const scrollWindow = document.createElement('div');
  homepage.className = 'homepage';
  scrollWindow.className = 'scroll-window';

  homepage.append(createHeader());
  if (window.location.hash.length === 0) {
    fetchPosts();
  } else {
    fetchPostbyId(window.location.hash);
  }
  document.body.append(homepage);
  homepage.append(scrollWindow);

  let scrolling = {
    root: document.querySelector('')
  }
};
