import { fetchComments, postComment } from './api_crud.js';

export default (title, description, postId, username) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');
  const author = document.createElement('h3');
  const delButton = document.createElement('button');
  const addComment = document.createElement('button');
  const commentArea = document.createElement('textarea');
  const form = document.createElement('form');

  //add classnames
    post.className = 'post';
    postTitle.className = 'title';
    body.className = 'body';
    delButton.classList.add('delete', 'logged-in', 'post-show', 'owned');
    addComment.classList.add('add-comment', 'post-show');
    commentArea.classList.add('comment-area', 'post-show');
    form.classList.add('commForm', 'post-show', 'logged-in'); //added class to address log out bug
    author.className = 'author';


  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete post';
    addComment.innerHTML = 'Add comment';
    author.innerHTML = username;
    addComment.setAttribute('type','submit');
    commentArea.setAttribute('placeholder', 'Leave a comment');
    form.style.display = 'none';

    post.onclick = () => {
      window.location.hash = `post/${postId}`;
    };

    fetchComments(post, postId);

    window.scrollTo(0,0);

    form.onsubmit = e => {
      e.preventDefault();
      postComment(commentArea.value, postId);
      commentArea.value = '';
    };

  //append
    form.append(commentArea);
    form.append(addComment);
    if (localStorage.getItem('username') === username) {
      form.append(delButton);
    }
    post.append(username);
    post.append(postTitle);
    post.append(body);
    post.append(form);


    return post;
};
