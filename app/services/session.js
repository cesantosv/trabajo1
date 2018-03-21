import Service from '@ember/service';
import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Service.extend({
    currentUser: null,
  isLoggedIn: Ember.computed.bool('currentUser'),
  store: Ember.inject.service(),
  login(userName, password){
    return new Promise((resolve, reject)=>{
     /*   $.ajax({
        method: "POST",
        url: '/token',
        data: {
          userName: userName,
          password: password
        }
      }).then((data)=>{
        var token = data['authentication_token'];
        var user_id = data['userName'];
        Cookies.set('userName', userName);
        Cookies.set('authenticationToken', token);
        this.initializeFromCookie();
        resolve();
      }, ()=>{
        reject('Username and password did not matcasdh');
      });*/

   /*  if(userName === 'erik' && password === 'password'){
        this.get('store').findAll('user').then((response)=>{
          var user = response.get('firstObject')
          this.set("currentUser",user)
          Cookies.set('userId',user.id)
          resolve()
        })
        alert('Logged in');
      }else{
        reject('Username and password did not match')
      }*/
    });
  },
  register(userName, password){
    return new Promise((resolve, reject)=>{
      $.ajax({
        method: "POST",
        url: 'people.register',
        data: {
          userName: userName,
          password: password
        }
      }).then((data)=>{
        var token = data['authentication_token'];
        var user_id = data['user_id'];
        Cookies.set('userId', user_id);
        Cookies.set('authenticationToken', token);
        this.initializeFromCookie();
        resolve();
      }, (response)=>{
        reject(`Server error: ${Ember.get(response, 'responseJSON.error')}`);
      });
    });
  },
  logout(){
    this.set("currentUser", null);
    Cookies.remove('userId');
    Cookies.remove('authenticationToken');
  },
/*  initializeFromCookie: function(){
    var userId = Cookies.get('userId');
    if(!!userId){
      var user = this.get('store').find('user', userId);
      this.set('currentUser', user);
    }
  }.on('init'),*/

});
