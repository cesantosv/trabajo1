import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    keyForAttribute(attr) {
        switch (attr) {
            case 'title':
                return 'title';
            case 'id':
                return 'id';
            case 'ordering':
                return 'ordering';
            case 'book':
                return 'book';

            default:
                return this._super(...arguments);
        }
    },
});
