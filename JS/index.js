let icons = document.querySelector('.all');
let lists = document.querySelector('.list');

window.onload = function() {
  lists.classList.remove('clicks');
}

icons.addEventListener('click', function() {
  lists.classList.toggle('clicks');
})