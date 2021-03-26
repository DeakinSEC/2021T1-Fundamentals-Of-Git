(() => {
	const n1Input = document.getElementById('adder-n1');
	const n2Input = document.getElementById('adder-n2');
	const submitButton = document.getElementById('adder-submit');
	const resultSpan = document.getElementById('adder-result');

	submitButton.onclick = () => {
		resultSpan.innerText = n1Input + n2Input;
	};
})();
