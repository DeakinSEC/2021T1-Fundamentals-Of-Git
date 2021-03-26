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

		// Show confetti 🎉!
		const submitButtonBounds = submitButton.getBoundingClientRect();
		confetti({
			// Physics refinements.
			particleCount: 75,
			startVelocity: 35,
			gravity: 1.75,
			spread: 25,

			// DSEC colors!
			colors: ['#b03574', '#b03574', '#4ff1e4', '#009999'],

			// Originate at the center of the submit button.
			origin: {
				x: ((submitButtonBounds.left + submitButtonBounds.right) / 2) / window.innerWidth,
				y: ((submitButtonBounds.top + submitButtonBounds.bottom) / 2) / window.innerHeight,
			},
		});
	};
})();
