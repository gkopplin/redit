import {deleteComment} from './api_crud'; 

export default (text, commentId, author) => {
    // Create elements
    const comment = document.createElement('li');
    const delButton = document.createElement('button');

    // Add class
    comment.className = "comment";
    delButton.classList.add('delete', 'owned');

    // Add text
    comment.innerHTML = text;
    delButton.innerHTML = 'Delete comment';

    // Add event listener
    delButton.onclick = () => deleteComment(commentId, comment);

    // Append elements
    if (author === localStorage.getItem('username')) {
        // use owned class?
        comment.append(delButton);
    }

    return comment;
};