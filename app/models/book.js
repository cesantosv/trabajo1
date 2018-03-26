import DS from 'ember-data';
/*import author from 'app/models/author';
Ember.get(author, 'fields').get('books');
*/
export default DS.Model.extend({
    
    datePublished: DS.attr('date'),
    title: DS.attr('string'),
    author: DS.belongsTo('author'),
    chapters:DS.hasMany('chapter'),
    
 //   bookAuthor: DS.hasMany('author'),
    

});
