import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
    singservice : service('sing-service'),

    beforeModel(){
        this.get('flashMessages').success('INICIO DE SESION SATISFACTORIO!');
        if(localStorage.getItem('controlSession')){
            this.replaceWith('home');
        }
        else{
            this.replaceWith('login');
        }
    }
});
