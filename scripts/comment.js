export default (text) => {
    // Create elements
    const comment = document.createElement('li');

    // Add class
    comment.className = "comment";

    // Add text
    comment.innerHTML = text;

    return comment;
};