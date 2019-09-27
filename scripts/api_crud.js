import createPostItem from './post.js';
import createComment from './comment';

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
          // const post = createPostItem(postItems.title, postItems.description, postItems.id);  //add username to posts
          const post = createPostItem(response[i].title, response[i].description, response[i].id, response[i].user.username);  //add username to posts

          document.querySelector('.scroll-window').append(post); //chris changed
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
       commentList.className = 'comment-list';
        for (let i = 0; i < response.length; i++) {
        //   add commenter username
          const comment = createComment(response[i].text);
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
        debugger
          const commentList = document.querySelector('.comment-list');
          const commented = createComment(response.text);   // return a comment
          commentList.append(commented);                    //append to curr ul
      })
      .catch(err => console.log(err));
};

// export const deleteComment = (postId) => {
//   fetch(`http://thesi.generalassemb.ly:8080/comment/${postId}`, {
//     method: 'DELETE',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
//     }
// })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);            //delete comment logic here
//     })
//     .catch(err => console.log(err));
// };
//   })
// };
