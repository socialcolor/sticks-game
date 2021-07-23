'use strict';

const sticks = document.querySelectorAll('.sticks__input');
const stickWrapper = document.querySelector('.sticks__wrapper');
const hideButton = document.querySelector('.buttons button');

const onStickClick = (event) => {
  const stickClick = event.target.classList.contains('sticks__stick');
  if (stickClick) {
    event.target.classList.toggle('sticks__stick--checked');
  }
};

const onHideButtonHide = () => {
  sticks.forEach((element) => {
    if(element.checked) {
      element.parentElement.classList.add('sticks__stick--hide');
    }
  })
};

stickWrapper.addEventListener('click', onStickClick)
hideButton.addEventListener('click', onHideButtonHide)
