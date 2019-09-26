import createHeader from './header.js';
import makePost from './post.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  const samplePost = makePost('test title', 'test body');
  homepage.className = 'homepage';


  homepage.append(createHeader());
  homepage.append(samplePost);
  document.body.append(homepage);
};
