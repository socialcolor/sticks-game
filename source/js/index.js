'use strict';

const sticksGroup = document.querySelectorAll('.sticks__group');
const sticksLabel = document.querySelectorAll('.sticks__label');
const sticksInput = document.querySelectorAll('.sticks__input');
const stickWrapper = document.querySelector('.sticks__wrapper');
const hideButton = document.querySelector('.buttons button');

const disabledSticks = (event, enable) => {
  const eventGroup = event.target.parentElement;
  if(enable) {
    for(let input of sticksInput) {

    }
  } else {
    for(let group of sticksGroup) {
      if(group !== eventGroup) {
        const sticksGroup = group.querySelectorAll('input');
        for (let input of sticksGroup) {
          input.disabled = true;
        }
      }
    }
  }
}

const enabledStick = () => {
  const label = document.querySelectorAll('.sticks__label--checked');
  if(label.length === 0) {
    for (let input of sticksInput) {
      input.disabled = false;
    }
  }
}

const onStickClick = function (event) {
  event.stopPropagation();
  const stickDisabled = event.target.querySelector('.sticks__input:not([disabled])')
  if (stickDisabled) {
    event.target.classList.toggle('sticks__label--checked');
    disabledSticks(event);
    enabledStick();
  }
};

const onHideButtonHide = () => {
  sticksInput.forEach((element) => {
    if (element.checked) {
      element.parentElement.remove();
    }
  })
  enabledStick();
};

for (let label of sticksLabel) {
  label.addEventListener('click', onStickClick)
}
hideButton.addEventListener('click', onHideButtonHide)
