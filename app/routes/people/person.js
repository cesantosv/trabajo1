import Route from '@ember/routing/route';


export default Route.extend({
    model({ id }) {
        const people = this.modelFor('people').people;
        const person = people.findBy('id', id);
        //    var array = people.push();
        /*  function sum(array){
              var acum = 0;
             for (var i=array[0]; i<=(array.length); i++){
                  acum= acum + i;
              } 
              return acum;
          }*/

        if (!person) {
            this.transitionTo('people');
        } else {
            return {
                name: person.name,
                title: person.isFemale ? 'Femenino' : 'Masculino',
                salary: person.salary,
            };
        }
    }
});
