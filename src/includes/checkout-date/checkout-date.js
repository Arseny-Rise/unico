import { Datepicker } from 'vanillajs-datepicker';
import Locale from './datepicker-locale-ru';

class CheckoutDate {
	constructor() {
		this.init();
	}

	init() {
		const elem = document.querySelector('[data-date="checkout"]');

		if (!elem) {
			return;
		}

		const datepicker = new Datepicker(elem, {
			language: 'ru',
			autohide: true,
			maxView: 0,
		});
	}
}

export default new CheckoutDate();
