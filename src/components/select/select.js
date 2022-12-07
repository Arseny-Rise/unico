class Select {
	constructor() {
		this.init();

		this.removeSelectsActive();
	}

	init() {
		document.querySelectorAll('.select').forEach(select => {
			const selectBtn = select.querySelector('.select__top');
			const selectInput = select.querySelector('.select__input');

			selectBtn.addEventListener('click', () => {
				if (!select.classList.contains('_active')) {
					select.classList.add('_active');
				} else {
					select.classList.remove('_active');
				}
			});

			select.addEventListener('click', evt => {
				if (
					evt.target.classList.contains('select__item') &&
					!evt.target.classList.contains('_active')
				) {
					const currentSelectItem = evt.target;
					const currentSelectItemValue = currentSelectItem.getAttribute('data-value');
					const oldSelectItem = select.querySelector('li._active');

					if (oldSelectItem) {
						oldSelectItem.classList.remove('_active');
					}

					selectBtn.textContent = currentSelectItemValue;

					selectInput.setAttribute('value', currentSelectItemValue);
					selectInput.setAttribute('name', currentSelectItemValue);

					currentSelectItem.classList.add('_active');

					select.classList.remove('_active');
				}
			});
		});
	}

	removeSelectsActive() {
		document.body.addEventListener('click', evt => {
			for (const select of document.querySelectorAll('.select')) {
				if (!select.contains(evt.target)) {
					select.classList.remove('_active');
				}
			}
		});
	}
}

export default new Select();
