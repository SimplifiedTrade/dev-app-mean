'use strict';

angular.module('core').factory('promoService', function($resource){
	return $resource('/promos/:id');
});
