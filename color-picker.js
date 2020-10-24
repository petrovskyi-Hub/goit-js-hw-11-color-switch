import colors from './colors.js';

const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
};
const min = 0;
const max = colors.length - 1;
let colorPickerIntervalId = 0;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startButton.addEventListener('click', onColorPicker);
refs.stopButton.addEventListener('click', stopColorPicker);

function onColorPicker () {
    colorPickerIntervalId = setInterval(setBgColor, 1000);
    refs.startButton.setAttribute('disabled', 'disabled');
}

function stopColorPicker() { 
    clearTimeout(colorPickerIntervalId);
    refs.startButton.removeAttribute('disabled');
}

function setBgColor() { 
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
};

