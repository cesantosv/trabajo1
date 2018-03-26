import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
   // id: DS.attr('string'),
    name: DS.attr('string'),
    dateOfBirth: DS.attr('date'),
    dateOfDeath: DS.attr('date'),
    books: DS.hasMany('book'),
    
  //  authorBook: DS.belongsTo('book'),
  
    /*author_id: function (qb, value) {
        return qb.whereIn('author_id', value);
      },
    /*
    total:computed('books.@each.author',function(){
        return this.get('books').reduce(

        )
    })*/
    
  /*  fullbook: computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
      })*/

    // books:DS.hasMany('book'),
    // photos:DS.hasMany('photo')

});
