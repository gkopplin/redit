import createPostItem from './post.js';
import createComment from './comment';

export const createPost = (title, body) => {
    fetch('http://localhost:8080/redit-api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
        },
        body: JSON.stringify({
            title,
            body
        }),
    })
        .then(response => response.json())
        .then(response => {
            // Error handling
            if (response.httpStatus) {
                const error = document.createElement('p');
                error.className = 'post-error';
                error.innerHTML = response.httpStatus === "BAD_REQUEST" ? "Title may not be blank" : response.httpStatus;
                document.querySelector('.post-content').append(error);
            } else {
                const post = createPostItem(response.title, response.body, response.postId, response.author.username);
                document.querySelector('.homepage').append(post);
                document.querySelector('.create-post').style.visibility = 'hidden';
            }
        })
        .catch(err => console.log(err));
};

export const deletePost = (postId) => {
  fetch(`http://localhost:8080/redit-api/post/${postId}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
      }
  })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
};

export const fetchPosts = () => {
  fetch('http://localhost:8080/redit-api/post/list', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(response => {
        response.forEach(element => {
            const post = createPostItem(element.title, element.body, element.postId, element.author.username);
            document.querySelector('.homepage').append(post);
        });
    })
    .catch(err => console.log(err));
};
//called in post.js

//Add this
export const fetchComments = (post, postId) => {
  fetch(`http://localhost:8080/redit-api/post/${postId}/comment`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(response => {
       const commentList = document.createElement('ul');
       commentList.classList.add('comment-list', 'post-show');
       if (window.location.hash.length === 0) {    //this seemed to address ALL users able to see comments/not affect logged in
           commentList.style.display = 'none';
       }

        for (let i = 0; i < response.length; i++) {
          const comment = createComment(response[i].text, response[i].commentId, response[i].author.username, localStorage.getItem('username'));
          commentList.append(comment);
        }

        post.append(commentList);
      })
      .catch(err => console.log(err));

};
//called in post.js
export const postComment = (text, postId) => {
  fetch(`http://localhost:8080/redit-api/post/${postId}/comment`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
      },
      body: JSON.stringify({
          text
      }),
  })
      .then(response => response.json())
      .then(response => {
          const commentList = document.querySelector('.comment-list');
          const commented = createComment(response.text, response.commentId, response.author.username, localStorage.getItem('username'));
          commentList.append(commented);
      })
      .catch(err => console.log(err));
};
//used to implement hash

//Edit this
export const fetchPostbyId = (hash) => {
    fetch('http://localhost:8080/redit-api/post/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            const postId = parseInt(hash.split('/')[1]);
            const postResponse = response.filter(el => el.postId === postId)[0];
            const post = createPostItem(postResponse.title, postResponse.body, postResponse.postId, postResponse.author.username);
            post.onmouseenter = () => {
                post.style.width = '500px';
                post.style.border = 'none';
            };
            const homepage = document.querySelector('.homepage');
            const header = homepage.firstChild;
            while (homepage.firstChild) {
                homepage.removeChild(homepage.firstChild);
            }

            homepage.append(header);
            homepage.append(post);

            const postShow = document.querySelectorAll('.post-show');
            if (localStorage.getItem('auth_key')) {
                for (let item of postShow) {
                    item.style.display = 'inline';
                }
            }

            // refactor this to a function
            if (localStorage.getItem('auth_key')) {
                let allLoggedOut = document.querySelectorAll('.logged-out');
                let allLoggedIn = document.querySelectorAll('.logged-in');

                for (let item of allLoggedOut) {
                    item.style.display = "none";
                }
                for (let item of allLoggedIn) {
                    item.style.display = 'inline';
                }
            }
        })
        .catch(err => console.log(err));
};

export const deleteComment = (commentId, comment) => {
    fetch(`http://localhost:8080/redit-api/comment/${commentId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
        }
    })
        .then(response => {
            if (response.status === 200) {
                comment.remove();
            }
        })
        .catch(err => console.log(err));
};
