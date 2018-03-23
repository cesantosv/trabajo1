import Service from '@ember/service';

export default Service.extend({
    users: [
        {
            usuario: 'carlos',
            contrasena: '1234567'
        },
        {
            usuario: 'el',
            contrasena: '123'
        },
        {
            usuario: 'tu',
            contrasena: '123'
        },
        {
            usuario: 'ella',
            contrasena: '123'
        },
        {
            usuario: 'ellos',
            contrasena: '123'
        },
    ],

    people: [
        {
            name: "Carlos",
            salary: "1000",
            gender: "M",
        },
    ],

    getUsers() {
        return this.users;
    },

    getPeople() {
        return this.people;
    },

    updatePeople(item) {
        this.get('people').pushObject(item);
    },

});
