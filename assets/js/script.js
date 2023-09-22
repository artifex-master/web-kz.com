'use strict';

const list = document.querySelectorAll('.pageNav a');
list.forEach(item => {
  item.addEventListener('click', (e) => {
    list.forEach(el => {el.classList.remove("_pageActive");el.classList.remove("_pageDefault");});
    item.classList.add("_pageActive");
  });
});
