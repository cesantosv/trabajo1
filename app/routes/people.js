import Route from '@ember/routing/route';

export default Route.extend({
    /* beforeModel(){
         this.replaceWith('login');
    },*/
    model() {
        return {
            people: [
                {
                    id: 'Carlos',
                    userName: 'erik',
                    password: 'password',
                    gender: 'M',
                    salary: 100,
                },
                {
                    id: 'Melissa',
                    name: 'Melissa',
                    gender: 'F',
                    salary: 200,
                },
                {
                    id: 'Juan',
                    name: 'Juan',
                    gender: 'M',
                    salary: 300,
                },
                {
                    id: 'Cristian',
                    name: 'Cristian',
                    gender: 'M',
                    salary: 400,
                },
                {
                    id: 'Laura',
                    name: 'Laura',
                    gender: 'F',
                    salary: 500,
                },
                {
                    id: 'Sara',
                    name: 'Sara',
                    gender: 'F',
                    salary: 600,
                },
            ],
        };
    }
});

