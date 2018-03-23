import Mixin from '@ember/object/mixin';
import EmberValidations from 'ember-validations';

export default Mixin.create(EmberValidations, {
  validations: {
    numero1: {
      presence: true,
      length: { minimum: 1, maximum: 5 },
    },
    numero2: {
      presence: true,
      length: { minimum: 1, maximum: 5 },

    }
  },
});
