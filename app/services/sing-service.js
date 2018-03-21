import Service from '@ember/service';

export default Service.extend({
    control : false,
    user: null,

    getControl(){
        return this.control
    },

    setControlSession(control,user){
        this.control=control;
        this.user=user;
    },
});
