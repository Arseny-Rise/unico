import IMask from 'imask';

const ClassName = {
	MODAL_ACTIVE: '_modals-active',
	ACTIVE: '_active',
	SECOND_LAYER: '_second-layer',
};

const MODAL_BTN_SELECTOR = 'data-modal-btn';

class Modals {
	constructor() {
		this.init();
	}

	init() {
		this.modalsWrap = document.querySelector('.modals');

		if (!this.modalsWrap) {
			return;
		}

		this.modalBG = document.querySelector('.modals__bg');
		this.modals = document.querySelectorAll('.modal');
		this.modalBtns = document.querySelectorAll(`[${MODAL_BTN_SELECTOR}]`);
		this.body = document.body;

		this.initPhonesValidate();
		this.closeModals();

		this.onBtnModalClick();
	}

	initPhonesValidate() {
		const inputsPhone = document.querySelectorAll('input[data-mask-phone]');

		if (!inputsPhone.length) {
			return;
		}

		const maskOptions = {
			mask: '+{7}(000)000-00-00',
			placeholderChar: '+7',
		};

		inputsPhone.forEach(item => {
			IMask(item, maskOptions);
		});
	}

	openModal(modalBtn) {
		if (!modalBtn) {
			return;
		}

		const modalName = modalBtn.getAttribute(MODAL_BTN_SELECTOR);
		const modalFirstLayer = modalBtn.hasAttribute('data-second-layer')
			? ClassName.SECOND_LAYER
			: '';
		const modal = document.querySelector(`[data-modal="${modalName}"]`);

		modalBtn.addEventListener('click', evt => {
			evt.preventDefault();

			this.body.classList.add(ClassName.MODAL_ACTIVE);
			modal.classList.add(ClassName.ACTIVE);

			if (modalFirstLayer) {
				modal.classList.add(modalFirstLayer);
			}
		});
	}

	onBtnModalClick() {
		this.modalBtns.forEach(btn => {
			this.openModal(btn);
		});
	}

	closeModals() {
		this.modals.forEach(modal => {
			const exitBtn = modal.querySelector('.modal__exit');

			if (!exitBtn) {
				return;
			}

			exitBtn.addEventListener('click', evt => {
				evt.preventDefault();
				modal.classList.remove(ClassName.ACTIVE, ClassName.SECOND_LAYER);
				this.body.classList.remove(ClassName.MODAL_ACTIVE);
			});
		});

		const removeModalActive = () => {
			this.modals.forEach(modal => {
				modal.classList.remove(ClassName.ACTIVE, ClassName.SECOND_LAYER);
			});
			this.body.classList.remove(ClassName.MODAL_ACTIVE);
		};

		this.modalBG.addEventListener('click', removeModalActive);

		window.addEventListener('keydown', evt => {
			if (evt.key === 'Escape') {
				removeModalActive();
			}
		});
	}
}

export default new Modals();
