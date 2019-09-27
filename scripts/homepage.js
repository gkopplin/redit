import createHeader from './header.js';
import {fetchPosts} from './api_crud.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  const scrollWindow = document.createElement('div');
  homepage.className = 'homepage';
  scrollWindow.className = 'scroll-window';

  homepage.append(createHeader());
  fetchPosts();
  document.body.append(homepage);
  homepage.append(scrollWindow);

  let scrolling = {
    root: document.querySelector('')
  }
};
