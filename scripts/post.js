import { deletePost, fetchComments, postComment } from './api_crud.js';

export default (title, description, postId, username) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');
  const author = document.createElement('h3'); // finish this
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



  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete';
    addComment.innerHTML = 'Add comment';
    // addComment.style.display = 'none';   //attached to form
    // delButton.style.display = 'none';
    commentArea.innerHTML = 'Leave a comment';
    form.style.display = 'none';

    delButton.onclick = () => {
      deletePost(postId);
    };

    // test this
    const viewPost = () => {
      const allPosts = document.querySelectorAll('.post');

      for (let postItem of allPosts) {
        postItem.style.display = 'none';
      }

      post.style.display = 'inline';

      if(localStorage.getItem('auth_key')) {    //viewable only to logged in
        // post.append(commentArea);     //render after viewing post
        // post.append(addComment);      //appending but not visible
        form.append(commentArea);
        form.append(addComment);
        post.append(form);
        // addComment.style.display = 'inline';
        form.style.display = 'inline';
      }
      const newElement = post.cloneNode(true);
      post.parentNode.replaceChild(newElement, post);   //?

      fetchComments(newElement, postId);
    };

    post.onclick = viewPost;


  //append
    post.append(postTitle);
    post.append(body);
    post.append(delButton);
    // form.append(commentArea);
    // form.append(addComment);

    // post.append(commentArea);     //dont want this rendered until each post is clicked on

    form.onsubmit = e => {
      debugger
      e.preventDefault();
      // postComment(textarea.value, postId)
      console.log('fire!');
    };

    return post;
};
