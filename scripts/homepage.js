import createHeader from './header.js';
import createModal from './auth.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';
  document.body.append(homepage);
  // homepage.innerText = "";
  homepage.append(createHeader());
  homepage.append(createModal());
};
