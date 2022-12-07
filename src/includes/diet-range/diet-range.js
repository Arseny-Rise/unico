import noUiSlider from 'nouislider';
class DietRange {
	constructor() {
		this.init();
	}

	init() {
		this.range = document.querySelector('[data-diet-range]');
		this.numbers = document.querySelector('.diet-range__nums-items');
		this.button = document.querySelector('.diet-second__btn span');

		if (!this.range) {
			return;
		}

		const options = {
			start: 1,
			step: 1,
			connect: [true, false],
			tooltips: true,
			format: {
				to: function (value) {
					return Math.round(value);
				},
				from: function (value) {
					return Math.round(value);
				},
			},
			range: {
				min: 1,
				max: 30,
			},
		};

		noUiSlider.create(this.range, options);

		this.range.noUiSlider.on('update', values => {
			const itemHeight = 36;
			const offsetY = -(itemHeight * (values - 1));

			this.numbers.style.transform = `translateY(${offsetY}px)`;

			this.button.textContent = `${values} ${this.wordDeclension(values, 'день', 'дня', 'дней')}`;
		});
	}

	wordDeclension(count, one, two, five) {
		let n = Math.abs(count);
		n %= 100;
		if (n >= 5 && n <= 20) {
			return five;
		}
		n %= 10;
		if (n === 1) {
			return one;
		}
		if (n >= 2 && n <= 4) {
			return two;
		}
		return five;
	}
}

export default new DietRange();
