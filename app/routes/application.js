import Route from '@ember/routing/route';
import {
	inject as service
} from '@ember/service';

export default class ApplicationRoute extends Route {

	@service store;

	model() {
		let v_book = this.store.peekRecord('book', 1);
		if (!v_book) {
		v_book=	this.store.createRecord('book', {
				id: 1,
				title: 'The Trial'
			});
		}
		return v_book;
	}
}
