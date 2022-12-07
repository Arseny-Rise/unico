class PriceTable {
	constructor() {
		this.init();
	}

	init() {
		this.table = document.querySelector('.price__table');

		if (!this.table) {
			return;
		}

		this.tableItems = this.table.querySelectorAll('.price__table-td:not(:nth-child(1))');
		this.tableHead = this.table.querySelector('.price__table-head-tr');

		this.tableItems.forEach(item => {
			item.addEventListener('mouseenter', () => {
				this.onHoverToggle(item, 'add');
			});

			item.addEventListener('mouseleave', () => {
				this.onHoverToggle(item, 'remove');
			});
		});
	}

	onHoverToggle(item, action) {
		const parent = item.parentNode;
		const parentChild = parent.children;
		const indexItem = [...parentChild].indexOf(item);

		const xElement = parentChild[0].querySelector('p');
		const yElement = this.tableHead.children[indexItem];

		if (action === 'add') {
			xElement.classList.add('_hover');
			yElement.classList.add('_hover');
		} else {
			xElement.classList.remove('_hover');
			yElement.classList.remove('_hover');
		}
	}
}

export default new PriceTable();
