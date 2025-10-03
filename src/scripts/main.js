'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

function centerSpider() {
  if (!wall || !spider) {
    return;
  }

  const left = (wall.clientWidth - spider.clientWidth) / 2;
  const height = (wall.clientHeight - spider.clientHeight) / 2;

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${height}px`;
}

window.addEventListener('load', centerSpider);

window.addEventListener('resize', centerSpider);

if (spider && spider.complete) {
  centerSpider();
}
