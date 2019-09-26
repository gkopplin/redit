import { createPost } from './api_crud';

export default () => {
    // Create elements
    const createPostModal = document.createElement('div');
    const content = document.createElement('div');
    const form = document.createElement('form');
    const title = document.createElement('input');
    const description = document.createElement('textarea');
    const submit = document.createElement('button');
    const close = document.createElement('a');

    // Add classnames
    createPostModal.className = 'modal';
    content.className = 'content';
    form.className = 'form';
    close.className = 'close';
    title.className = 'title';
    description.className = 'description';
    submit.className = 'submit';

    // Prep elements
    title.setAttribute('placeholder', 'Post title');
    description.setAttribute('placeholder', 'Type post body here');
    submit.innerHTML = 'Submit';
    close.innerHTML = '&#10060';
    createPostModal.style.visibility = 'hidden';

    //in progress/clean up later!
    form.onsubmit = e => {
        e.preventDefault();

        createPost(title.value, description.value);

        title.value = "";
        description.value = "";
        createPostModal.style.visibility = 'hidden';
    };

    submit.setAttribute('type', 'submit');

    close.onclick = () => {
        createPostModal.style.visibility = 'hidden';
    };

    // Append elements
    form.append(title);
    form.append(description);
    form.append(submit);
    form.append(close);
    content.append(form);
    createPostModal.append(content);

    return createPostModal;
};