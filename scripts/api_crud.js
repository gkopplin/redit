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
            console.log(response);
            const post = createPostItem(response.title, response.description, response.id);
            document.querySelector('.homepage').append(post);
        })
        .catch(err => console.log(err));
};

//display error in thml vs console.log
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
          const post = createPostItem(response[i].title, response[i].description, response[i].id);  //add username to posts

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
          const commented = createComment(response.text);
          console.log(commented);
          createPost(commented);
          commentList.append(commented);
      })
      .catch(err => console.log(err));
};

export const deleteComment = () => {
  fetch(`http://thesi.generalassemb.ly:8080/comment/${postId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('auth_key')}`
    }
})
    .then(response => response.json())
    .then(response => {
      console.log(response);            //delete comment logic here 
    })
    .catch(err => console.log(err));
};
  })
};
