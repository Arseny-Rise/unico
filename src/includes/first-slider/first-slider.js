import Flickity from 'flickity';

const arrowShape =
	'M41.6464 49.6464C41.4512 49.8417 41.4512 50.1583 41.6464 50.3536L44.8284 53.5355C45.0237 53.7308 45.3403 53.7308 45.5355 53.5355C45.7308 53.3403 45.7308 53.0237 45.5355 52.8284L42.7071 50L45.5355 47.1716C45.7308 46.9763 45.7308 46.6597 45.5355 46.4645C45.3403 46.2692 45.0237 46.2692 44.8284 46.4645L41.6464 49.6464ZM57 49.5H42V50.5H57V49.5Z';

class FirstSlider {
	constructor() {
		this.init();
	}

	init() {
		this.carousel = document.querySelector('.first-slider__body');

		if (!this.carousel) {
			return;
		}

		const slider = new Flickity(this.carousel, {
			selectedAttraction: 0.05,
			friction: 0.7,
			initialIndex: '.is-initial-select',
			cellAlign: 'left',
			pageDots: true,
			prevNextButtons: true,
			contain: true,
			arrowShape,
			autoPlay: 5000,
			wrapAround: true,
		});
	}
}

export default new FirstSlider();
