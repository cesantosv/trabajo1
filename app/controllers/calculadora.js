import Controller from '@ember/controller';
import EmberValidations from 'ember-validations';
import displayFlashErrors from '../utils/display-flash-errors';
import Ember from 'ember';
import { computed } from '@ember/object';
import validations from '../mixins/validations';
import { sumaHelper } from '../helpers/suma';
/*
export default Controller.extend({
});*/

export default Ember.Controller.extend(validations, {
    showErrors: false,
    session: Ember.inject.service(),
    /* validations: {
       numero1: {
         presence: true,
         length: {minimum: 1, maximum:5},
       },
       numero2: {
         presence: true,
         length: {minimum: 1, maximum:5},
         
       }
     }*/

    messagerror: computed('model.error', function () {
        return this.get('model.error');
    }),

    resultado: computed('model.rsulop', function () {
        return this.get('model.rsulop');
    }),

    msgcolor: computed('model.msgcolor', function () {
        return this.get('model.msgcolor');
    }),
    actions: {
        Sumar() {
            let { numero1, numero2 } = this.getProperties('numero1', 'numero2');
            if (numero1 > 1000 || numero1 < -1000) {
                this.get('flashMessages').danger('EL PRIMER NUMERO NO SE ENCUENTRA EN EL RANGO [ -1000 , 1000 ]');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (numero2 > 1000 || numero2 < -1000) {
                this.get('flashMessages').danger('EL SEGUNDO NUMERO NO SE ENCUENTRA EN EL RANGO [ -1000 , 1000 ]');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (isNaN(numero1)) {
                this.get('flashMessages').danger('EL PRIMER CAMPO NO PUEDE ESTAR VACIO');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (isNaN(numero2)) {

                this.get('flashMessages').danger('EL SEGUNDO CAMPO NO PUEDE ESTAR VACIO');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else {
                var suma = Number(numero1) + Number(numero2);
                this.set('model.error', "Operacion realizada");
                this.set('model.rsulop', "La suma es " + suma);
            }
        },

        Restar() {
            let { numero1, numero2 } = this.getProperties('numero1', 'numero2');
            if (numero1 > 1000 || numero1 < -1000) {
                this.get('flashMessages').danger('EL PRIMER NUMERO NO SE ENCUENTRA EN EL RANGO [ -1000 , 1000 ]');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (numero2 > 1000 || numero2 < -1000) {
                this.get('flashMessages').danger('EL SEGUNDO NUMERO NO SE ENCUENTRA EN EL RANGO [ -1000 , 1000 ]');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (isNaN(numero1)) {
                this.get('flashMessages').danger('EL PRIMER CAMPO NO PUEDE ESTAR VACIO');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            }
            else if (isNaN(numero2)) {

                this.get('flashMessages').danger('EL SEGUNDO CAMPO NO PUEDE ESTAR VACIO');
                this.set('model.rsulop', null);
                this.set('model.msgcolor', true);
            } else {
                var resta = Number(numero1) - Number(numero2);
                this.set('model.error', "Operacion realizada");
                this.set('model.rsulop', "La resta es " + resta);
            }

        }
    }

}
);
