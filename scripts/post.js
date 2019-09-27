import { deletePost, fetchComments, postComment } from './api_crud.js';

export default (title, description, postId) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');
  const delButton = document.createElement('button');
  const addComment = document.createElement('button');
  const commentArea = document.createElement('textarea');

  //add classnames
    post.className = 'post';
    postTitle.className = 'title';
    body.className = 'body';
    delButton.classList.add('delete', 'logged-in');
    addComment.classList.add('add-comment', 'logged-in');
    commentArea.classList.add('comment-area', 'logged-in');



  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete';
    addComment.innerHTML = 'Add comment';
    addComment.style.display = 'none';
    delButton.style.display = 'none';
    commentArea.innerHTML = 'Leave a comment';
    // commentArea.style.display = 'none';

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
      post.append(commentArea);     //render after viewing post
      post.append(addComment);      //appending but not visible
      addComment.style.display = 'inline';

      const newElement = post.cloneNode(true);
      post.parentNode.replaceChild(newElement, post);   //?

      fetchComments(newElement, postId);
    };

    post.onclick = viewPost;


  //append
    post.append(postTitle);
    post.append(body);
    post.append(delButton);
    post.append(addComment);
    // post.append(commentArea);     //dont want this rendered until each post is clicked on

    addComment.onsubmit = () => {

      postComment(textarea.value, postId)
    };

    return post;
};
