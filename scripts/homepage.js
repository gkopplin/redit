import createHeader from './header.js';
import {fetchPosts, fetchPostbyId} from './api_crud.js';

export const createHomepage = () => {
  let homepage = document.createElement('div');
  const scrollWindow = document.createElement('div');
  homepage.className = 'homepage';
  scrollWindow.className = 'scroll-window';     //me

  homepage.append(createHeader());
  if (window.location.hash.length === 0) {
    fetchPosts();
  } else {
    fetchPostbyId(window.location.hash);
  }
  document.body.append(homepage);
  homepage.append(scrollWindow);         //me

  //infinite scroll - create intersection observer
// const createObserver = () => {
//   let observer;
//   // let target = document.querySelector('.scroll-window').lastChild;
//     let scrolling = {
//       root: null,
//       // root: document.querySelector('.header'),
//       rootMargin: '0px',
//       threshold: 1.0
//     };
//     // let target = document.querySelector('.scroll-window').lastChild;
//   observer = new IntersectionObserver(handleIntersect, scrolling);
//   observer.observe(target);
// };
// function handleIntersect(entries, observer) {
//   entries.forEach(entry => {
//     // entry.target;
//     console.log('handleIntersect firing');
//   });
// };
// let target;

//the example setup I found above isn't triggering appropriately
window.addEventListener ('click', () => {
  let target = document.querySelector('.scroll-window');
  // createObserver();
  fetchPosts();
  console.log('EventListener triggered');
}, false);




};
