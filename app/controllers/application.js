import Ember from 'ember';

var Song = Ember.Object.extend({
	title:  '',
	rating: 0,
	band:   ''
});

var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['rating'],
	sortAscending:  false,
	content:        []
});



export default Ember.Controller.extend({
});
