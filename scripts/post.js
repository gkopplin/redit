import { deletePost, fetchComments } from './api_crud.js';

export default (title, description, postId) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');
  const delButton = document.createElement('button');
  const addComment = document.createElement('button');

  //add classnames
    post.className = 'post';
    postTitle.className = 'title';
    body.className = 'body';
    delButton.classList.add('delete', 'logged-in');
    addComment.classList.add('add-comment', 'logged-in');

  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;
    delButton.innerHTML = 'Delete';
    addComment.innerHTML = 'Add comment';
    addComment.style.display = 'none';
    delButton.style.display = 'none';

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

      fetchComments(post, postId);
      post.removeEventListener('click', viewPost);
    };

    post.onclick = viewPost;


  //append
    post.append(postTitle);
    post.append(body);
    post.append(delButton);
    post.append(addComment);


    return post;
};
