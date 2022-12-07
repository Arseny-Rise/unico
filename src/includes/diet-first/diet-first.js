const ClassName = {
	ACTIVE: '_active',
};

class DietFirst {
	constructor() {
		this.init();
	}

	init() {
		this.onClickActive('[data-diet-tab]', '.diet-first__tabs', true);
		this.onClickActive('.diet-first__day', '.diet-first__week');
	}

	onClickActive(targetsSelector, parentSelector, isDietTab) {
		this.elements = document.querySelectorAll(targetsSelector);

		if (!this.elements) {
			return;
		}

		this.elements.forEach(element => {
			element.addEventListener('click', evt => {
				evt.preventDefault();

				const parent = element.closest(parentSelector);

				const oldActive = parent.querySelector(`.${ClassName.ACTIVE}`);

				if (oldActive) {
					oldActive.classList.remove(ClassName.ACTIVE);
				}

				if (isDietTab) {
					this.changeBreadcrumb(element);
				}

				element.classList.add(ClassName.ACTIVE);
			});
		});
	}

	changeBreadcrumb(tabActive) {
		const breadcrumb = document.querySelector(
			'.breadcrumbs__item:last-child .breadcrumbs__item-link'
		);

		breadcrumb.textContent = tabActive.textContent;
	}
}

export default new DietFirst();
