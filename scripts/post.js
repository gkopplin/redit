import { deletePost } from './api_crud.js';

export default (title, description, postId) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');
  const delButton = document.createElement('button');

  //add classnames
    post.className = 'post';
    postTitle.className = 'title';
    body.className = 'body';
    delButton.className = 'delete';

  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete';

    delButton.onclick = () => {
      deletePost(postId);
    };

  //append
    post.append(postTitle);
    post.append(body);
    post.append(delButton);


    return post;
};
