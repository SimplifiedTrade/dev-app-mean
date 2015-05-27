'use strict';

angular.module('core').factory('itemService', function($resource){
	return $resource('/items/:id');
});
