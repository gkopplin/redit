import createHeader from './header.js';
import {fetchPosts, fetchPostbyId} from './api_crud.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';

  homepage.append(createHeader());
  if (window.location.hash.length === 0) {
    fetchPosts();
  } else {
    fetchPostbyId(window.location.hash);
  }
  document.body.append(homepage);

};
