import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat
} from 'ember-changeset-validations/validators';

export default {
  title: [validateFormat({ type: 'email' }), validatePresence(true)]
};
