import Route from '@ember/routing/route';


export default Route.extend({
    model() {

        return this.store.findAll('author');
       // const people = this.modelFor('people').people;
       // const person = people.findBy('id',id);
    }
    /*
    model(params) {
        return this.store.findRecord('author', params.author_id, {include: 'books'});
       }
    */
});
