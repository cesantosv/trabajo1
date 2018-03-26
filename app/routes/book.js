import Route from '@ember/routing/route';



export default Route.extend({
    model() {
        
        return this.store.findAll('book');
    }/*
    model(params) {
        return this.store.findRecord('author', params.author_id, {include: 'books'});
       }*/
});
