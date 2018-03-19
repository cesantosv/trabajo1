import DS from 'ember-data';

export default DS.Model.extend(EmberValidations, {
    userName: DS.attr('string'),
    password: DS.attr('string'),
  
    validations: {
      userName: {
        presence: true,
        length: { minimum: 6 }
      },
      password: {
        presence: true,
        length: { minimum: 8 }
      }
    }
  });
