import DS from 'ember-data';

export default DS.Model.extend( {
    userName: DS.attr('string'),
    password: DS.attr('string'),
  
  /*  validations: {
      userName: {
        presence: true,
        length: { minimum: 6 }
      },
      password: {
        presence: true,
        length: { minimum: 8 }
      }
    }*/
    user:[
      {
        id:'Carlos',
        userName:'erik',
        password:'password',
        gender:'M',
        salary: 100,
    },
    ]
  });
