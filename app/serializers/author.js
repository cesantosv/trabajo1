import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    
    keyForAttribute(attr) {
        switch (attr) {
            case 'name':
            return 'name';
            case 'id':
                return 'id';
            case 'dateOfBirth':
                return 'date_of_birth';
            case 'dateOfDeath':
                return 'date_of_death';
            case 'createdAt':
                return 'created_at';
            case 'books':
                return 'book';

            default:
                return this._super(...arguments);
        }
    },
   /* keyForRelationship(key){
        return key;
      }*/
    
    
      
    /*extractRelationship(relationshipHash){
        relationshipHash.data.id = relationshipHash.data.id.replace('book_', '')
        return this._super(...arguments)
      }
    */
});
