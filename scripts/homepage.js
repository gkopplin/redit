import createHeader from './header.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';
  document.body.append(homepage);

  homepage.append(createHeader());

};
