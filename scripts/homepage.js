import createHeader from './header.js';
import {fetchPosts} from './api_crud.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';

  homepage.append(createHeader());
  fetchPosts();
  document.body.append(homepage);

};
