import createHeader from './header.js';
import {createPost} from './api_crud';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  homepage.className = 'homepage';
  document.body.append(homepage);

  const createPostModal = document.createElement('div');
  const form = document.createElement('form');
  const title = document.createElement('input');
  const description = document.createElement('textarea');
  const submit = document.createElement('button');
  const close = document.createElement('a');

  // Add classnames
  createPostModal.className = 'create-post';
  form.className = 'form';
  close.className = 'close';
  title.className = 'title';
  description.className = 'description';
  submit.className = 'submit';

  // Prep elements
  title.setAttribute('placeholder', 'Post title');
  description.setAttribute('placeholder', 'Type post body here');
  submit.innerHTML = 'Submit';
  close.innerHTML = '&#10060';

  //in progress/clean up later!
  form.onsubmit = e => {
    e.preventDefault();

    createPost(title.value, description.value);
    

    title.value = "";
    description.value = "";
  };

  submit.setAttribute('type', 'submit');

  // Append elements
  form.append(title);
  form.append(description);
  form.append(submit);
  form.append(close);
  createPostModal.append(form);

  homepage.append(createHeader());
  homepage.append(createPostModal);

};
