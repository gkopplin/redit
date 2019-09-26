import createHeader from './header.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';

  homepage.append(createHeader());
  document.body.append(homepage);
};
