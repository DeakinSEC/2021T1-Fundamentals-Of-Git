(() => {

	/** @type HTMLInputElement */
	const n1Input = document.getElementById('adder-n1');

	/** @type HTMLInputElement */
	const n2Input = document.getElementById('adder-n2');

	/** @type HTMLButtonElement */
	const submitButton = document.getElementById('adder-submit');

	/** @type HTMLSpanElement */
	const resultSpan = document.getElementById('adder-result');

	submitButton.onclick = () => {
		resultSpan.innerText = n1Input.valueAsNumber + n2Input.valueAsNumber;
	};
})();
