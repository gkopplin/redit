import {deleteComment} from './api_crud';

export default (text, commentId, author, currentUser) => {
    // Create elements
    const comment = document.createElement('li');
    const delButton = document.createElement('button');

    // Add class
    comment.className = "comment";
    delButton.classList.add('delete', 'owned', 'logged-in');

    // Add text
    comment.innerHTML = text;
    delButton.innerHTML = 'Delete comment';

    // Add event listener
    delButton.onclick = () => deleteComment(commentId, comment);

    // Append elements
    if (author === currentUser) {

        comment.append(delButton);
    }

    return comment;
};
