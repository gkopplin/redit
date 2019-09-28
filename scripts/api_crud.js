import createPostItem from './post.js';
import createComment from './comment';
import createHeader from './header';

export const createPost = (title, description) => {
    fetch('http://thesi.generalassemb.ly:8080/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
        },
        body: JSON.stringify({
            title,
            description
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
                const post = createPostItem(response.title, response.description, response.id, response.user.username);
                document.querySelector('.homepage').append(post);
                document.querySelector('.create-post').style.visibility = 'hidden';
            }
        })
        .catch(err => console.log(err));
};

//API endpoint is broken
export const deletePost = (postId) => {
  fetch(`http://thesi.generalassemb.ly:8080/post/${postId}`, {
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
  fetch('http://thesi.generalassemb.ly:8080/post/list', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(response => {
        // for(let postItems in response) {
        for (let i = 0; i < 10; i++) {
          const post = createPostItem(response[i].title, response[i].description, response[i].id, response[i].user.username);  

          document.querySelector('.homepage').append(post);
      }
      })
      .catch(err => console.log(err));
};

export const fetchComments = (post, postId) => {
  fetch(`http://thesi.generalassemb.ly:8080/post/${postId}/comment`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  })
      .then(response => response.json())
      .then(response => {
       const commentList = document.createElement('ul');
       commentList.classList.add('comment-list', 'post-show');
       if (localStorage.getItem('auth_key') === null || window.location.hash.length === 0) {
           commentList.style.display = 'none';
       }
       
        for (let i = 0; i < response.length; i++) {
        //   add commenter username
          const comment = createComment(response[i].text, response[i].id, response[i].user.username);
          commentList.append(comment);
        }
        console.log(response);
        post.append(commentList);
      })
      .catch(err => console.log(err));

};

export const postComment = (text, postId) => {
  fetch(`http://thesi.generalassemb.ly:8080/comment/${postId}`, {
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
          const commented = createComment(response.text);   // return a comment
          commentList.append(commented);                    //append to curr ul
      })
      .catch(err => console.log(err));
};

export const fetchPostbyId = (hash) => {
    fetch('http://thesi.generalassemb.ly:8080/post/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            const postId = parseInt(hash.split('/')[1]);
            const postResponse = response.filter(el => el.id === postId)[0];
            const post = createPostItem(postResponse.title, postResponse.description, postResponse.id, postResponse.user.username);  

            const homepage = document.querySelector('.homepage');
            const header = homepage.firstChild;
            while (homepage.firstChild) {
                homepage.removeChild(homepage.firstChild);
            }
            
            homepage.append(header);

            window.scrollTo(0, 0);

            homepage.append(post);

            // refactor this to a function
            if (localStorage.getItem('auth_key')) {                           //fake inputs trigger logged in still and show undefined userID 
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
    fetch(`http://thesi.generalassemb.ly:8080/comment/${commentId}`, {
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
