import Model from '@ember-data/model';
import  attr from 'ember-data/attr';

export default class BookModel extends Model {

	@attr('string') title;
}
