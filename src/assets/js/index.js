// import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

// global.gsap = gsap;

// gsap.defaults({
// 	overwrite: 'auto',
// });
class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			// Signal: require('./classes/Signal').default,
		};
		this.components = {
			Burger: require('../../components/burger/burger').default,
			FirstSlider: require('../../includes/first-slider/first-slider').default,
			DietSlider: require('../../includes/diet-slider/diet-slider').default,
			DietRange: require('../../includes/diet-range/diet-range').default,
			Modals: require('../../includes/modals/modals').default,
			Select: require('../../components/select/select').default,
			CheckoutDate: require('../../includes/checkout-date/checkout-date').default,
			PriceTable: require('../../includes/price-table/price-table').default,
			DietFirst: require('../../includes/diet-first/diet-first').default,
		};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();

if (module.hot) {
	module.hot.accept();
}
