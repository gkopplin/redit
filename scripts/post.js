export default (title, description) => {

  //create elements
  const post = document.createElement('div');
  const postTitle = document.createElement('h1');
  const body = document.createElement('p');

  //add classnames
    post.className = 'post';
    postTitle.className = 'title';
    body.className = 'body';

  //elements
    postTitle.innerHTML = title;
    body.innerHTML = description;

  //append
    post.append(postTitle);
    post.append(body);

    return post;
};
