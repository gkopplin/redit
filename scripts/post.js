import { deletePost, fetchComments, postComment } from './api_crud.js';

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
    delButton.classList.add('delete', 'logged-in');
    addComment.classList.add('add-comment', 'logged-in');
    commentArea.classList.add('comment-area', 'logged-in');
    form.classList.add('commForm', 'logged-in');
    author.className = 'author';


  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete';
    addComment.innerHTML = 'Add comment';
    author.innerHTML = username;
    addComment.setAttribute('type','submit');
    // addComment.style.display = 'none';   //attached to form
    // delButton.style.display = 'none';
    commentArea.setAttribute('placeholder', 'Leave a comment');
    // form.style.display = 'none';

    delButton.onclick = () => {
      deletePost(postId);
    };

    //refactor this function!!!
    const viewPost = () => {
      const allPosts = document.querySelectorAll('.post');

      for (let postItem of allPosts) {
        postItem.style.display = 'none';
      }

      post.style.display = 'inline';

      const newElement = post.cloneNode(true);
      post.parentNode.replaceChild(newElement, post);   //?

      window.scrollTo(0,0);

      if (localStorage.getItem('auth_key')) {
        form.append(commentArea);
        form.append(addComment);
        newElement.append(form);
      }

      fetchComments(newElement, postId);

      form.onsubmit = e => {
        e.preventDefault();
        postComment(commentArea.value, postId);
        commentArea.value = '';
      };
    };

    post.onclick = viewPost;

  //append
    post.append(username);
    post.append(postTitle);
    post.append(body);
    post.append(delButton);


    return post;
};
