import Flickity from 'flickity';

const arrowShape =
	'M48.2298 42.4113L48.1425 42.3112C47.764 41.9282 47.1684 41.8987 46.7565 42.2228L46.6575 42.3112L39.3075 49.7487L39.2641 49.7954V49.7954L39.2062 49.8675V49.8675L39.1309 49.9857V49.9857L39.0748 50.1055V50.1055L39.0376 50.2174V50.2174L39.0073 50.3745V50.3745L39 50.5L39.0029 50.5799V50.5799L39.0213 50.7133V50.7133L39.0522 50.8317V50.8317L39.0984 50.9497V50.9497L39.1533 51.0533V51.0533L39.2307 51.1645V51.1645L39.3075 51.2513L46.6575 58.6888C47.0676 59.1037 47.7324 59.1037 48.1425 58.6888C48.521 58.3058 48.5501 57.7031 48.2298 57.2863L48.1425 57.1862L42.5868 51.5625H58.95C59.5299 51.5625 60 51.0868 60 50.5C60 49.9132 59.5299 49.4375 58.95 49.4375H42.5847L48.1425 43.8138C48.521 43.4308 48.5501 42.8281 48.2298 42.4113L48.1425 42.3112L48.2298 42.4113Z';

class DietSlider {
	constructor() {
		this.init();
	}

	init() {
		this.carousel = document.querySelector('[data-diet-slider]');

		if (!this.carousel) {
			return;
		}

		const slider = new Flickity(this.carousel, {
			groupCells: true,
			percentPosition: true,
			selectedAttraction: 0.2,
			friction: 0.8,
			initialIndex: '.is-initial-select',
			cellAlign: 'center',
			pageDots: false,
			prevNextButtons: true,
			contain: true,
			arrowShape,
			imagesLoaded: true,
		});

		setTimeout(() => {
			slider.resize();
		}, 300);
	}
}

export default new DietSlider();
