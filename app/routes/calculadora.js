import Route from '@ember/routing/route';
import { inject as service} from '@ember/service';

export default Route.extend({
  /*  beforeModel(transition) {
        let token = transition.queryParams.token;
        let promise = this.get('session').authenticate('authenticator:custom', token);
      
        promise.then(()=> {
          alert("You're in!");
        });
  */   
 model() {
    return {
         error : null,
         rsulop : null,
         msgcolor: false,
    };
}, 
 singservice : service('sing-service'),

    beforeModel(){
        if(this.get('singservice').control){
            this.replaceWith('calculadora');
        }
        else{
            this.replaceWith('login');
        }
    }
});


