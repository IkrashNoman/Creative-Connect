// There is currently no JavaScript code here.
const list = document.querySelector('.product-list');
const thumb = document.querySelector('.scrollbar-thumb');
const track = document.querySelector('.scrollbar-track');

let isDragging = false;
let startY;
let startScrollTop;
let thumbHeight;

function updateThumb() {
  const scrollHeight = list.scrollHeight;
  const visibleHeight = list.clientHeight;

  thumbHeight = Math.max((visibleHeight / scrollHeight) * track.clientHeight, 30);
  thumb.style.height = `${thumbHeight}px`;

  const maxScrollTop = scrollHeight - visibleHeight;
  const maxThumbTop = track.clientHeight - thumbHeight;
  const thumbTop = (list.scrollTop / maxScrollTop) * maxThumbTop;

  thumb.style.transform = `translateY(${thumbTop}px)`;
}

list.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
window.addEventListener('load', updateThumb);

// Drag handlers
thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = list.scrollTop;
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;

  const scrollRatio = (list.scrollHeight - list.clientHeight) / (track.clientHeight - thumbHeight);
  list.scrollTop = startScrollTop + deltaY * scrollRatio;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.userSelect = '';
});
