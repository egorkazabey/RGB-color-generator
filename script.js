'use strict';

let square = document.querySelector('.square')

square.addEventListener('click', () => {
	const firstNum = (Math.random() * 255).toFixed()
	const secondNum = (Math.random() * 255).toFixed()
	const thirdNum = (Math.random() * 255).toFixed()
	square.style.cssText += `
	background: rgba(${firstNum}, ${secondNum}, ${thirdNum})
`;
});
