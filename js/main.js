let firstPrompt = prompt('Write the first number:');

let secondPrompt = prompt('Write the second number:');

const firstNum = +firstPrompt;

const secondNum = +secondPrompt;

alert(`${firstPrompt} + ${secondPrompt} = ` + (firstNum + secondNum));
alert(`${firstPrompt} - ${secondPrompt} = ` + (firstNum - secondNum));
alert(`${firstPrompt} * ${secondPrompt} = ` + (firstNum * secondNum));
alert(`${firstPrompt} / ${secondPrompt} = ` + (firstNum / secondNum));