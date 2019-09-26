import createPostItem from './post.js';

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
            const post = createPostItem(response.title, response.description);
            document.querySelector('.homepage').append(post);
        })
        .catch(err => console.log(err));
};