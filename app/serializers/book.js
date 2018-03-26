import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute(attr) {
        switch (attr) {
            case 'datePublished':
                return 'date_published';
            case 'title':
                return 'title';
            case 'author':
                return 'author';
                case 'chapters':
                return 'chapter';

            default:
                return this._super(...arguments);
        }
    },
    /*keyForRelationship(key){
        return key;
      }*/
});
