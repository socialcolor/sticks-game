'use strict';

const sticksGroup = document.querySelectorAll('.sticks__label-wrapper');
const sticksLabel = document.querySelectorAll('.sticks__label');
const sticksInput = document.querySelectorAll('.sticks__input');
const stickWrapper = document.querySelector('.sticks__wrapper');
const hideButton = document.querySelector('.button--remove');
const playerName = document.querySelectorAll('.stats__player-name');

const disabledSticks = (evt) => {
  const eventGroup = evt.target.parentElement;
  for (let group of sticksGroup) {
    if (group !== eventGroup) {
      const sticksGroup = group.querySelectorAll('input');
      for (let input of sticksGroup) {
        input.disabled = true;
        input.closest('label').classList.add('sticks__label--opacity');
      }
    }
  }
};

const enabledStick = () => {
  const label = document.querySelectorAll('.sticks__label--checked');
  if (label.length === 0) {
    for (let input of sticksInput) {
      input.disabled = false;
      input.closest('label').classList.remove('sticks__label--opacity');
    }
  }
}

const disabledHideButton = () => {
  document.querySelector('.sticks__label--checked') ? hideButton.disabled = false : hideButton.disabled = true;
}

const changeActivePlayer = () => {
  for (let player of playerName) {
    player.classList.contains('stats__player-name--active') ? player.classList.remove('stats__player-name--active') : player.classList.add('stats__player-name--active');
  }
}

const onStickClick = function (evt) {
  evt.stopPropagation();
  const stickDisabled = evt.target.querySelector('.sticks__input:not([disabled])')
  if (stickDisabled) {
    evt.target.classList.toggle('sticks__label--checked');
    disabledSticks(evt);
    enabledStick();
    disabledHideButton();
  }
};

const onHideButtonHide = () => {
  sticksInput.forEach((element) => {
    if (element.checked) {
      element.parentElement.remove();
    }
  })
  enabledStick();
  disabledHideButton();
  changeActivePlayer();
};

for (let label of sticksLabel) {
  label.addEventListener('click', onStickClick)
}
hideButton.addEventListener('click', onHideButtonHide)
