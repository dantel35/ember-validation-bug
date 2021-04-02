import Controller from '@ember/controller';
import BookValidations from '../validations/book';

export default class ApplicationController extends Controller {
  bookValidations = BookValidations;
}
