//! Header
const menu = document.getElementById('menu');
const barsDiv = document.querySelector('.bars');
const bars = document.querySelectorAll('.bars span');
let isClicked = false;

barsDiv.addEventListener('click', () => {
  if(!isClicked) {
    bars[0].style.cssText = 'opacity: 0; margin-top: 0px';
    bars[1].style.cssText = 'transform: rotate(-120deg); margin-top: 0;';
    bars[2].style.cssText = 'transform: rotate(120deg); margin-top: 0;';
    menu.style.top = `100%`;
    isClicked = true;
  } else {
    bars[0].style.cssText = 'opacity: 1;';
    bars[1].style.cssText = 'transform: rotate(0);';
    bars[2].style.cssText = 'transform: rotate(0);';
    menu.style.top = `-450%`;
    isClicked = false;
  }
});
