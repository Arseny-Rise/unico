const ClassName = {
	ACTIVE: '_menu-active',
};

const body = document.body;

class Burger {
	constructor() {
		this.init();
	}

	init() {
		this.burgerButton = document.querySelector('[data-burger]');

		if (!this.burgerButton) {
			return;
		}

		this.onButtonClick = this.onButtonClick.bind(this);
		this.onWindowKeydown = this.onWindowKeydown.bind(this);

		this.burgerButton.addEventListener('click', this.onButtonClick);
	}
	toggle() {
		const isOpened = body.classList.contains(ClassName.ACTIVE);

		isOpened ? this.close() : this.open();
	}
	open() {
		body.classList.add(ClassName.ACTIVE);
		window.addEventListener('keydown', this.onWindowKeydown);
	}
	close() {
		body.classList.remove(ClassName.ACTIVE);
		window.removeEventListener('keydown', this.onWindowKeydown);
	}
	onButtonClick(evt) {
		evt.preventDefault();

		this.toggle();
	}
	onWindowKeydown(evt) {
		if (evt.key === 'Escape') {
			this.close();
		}
	}
}

export default new Burger();
