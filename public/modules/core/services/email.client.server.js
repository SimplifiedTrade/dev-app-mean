'use strict';

angular.module('core').factory('emailService', function($resource){
	return $resource('/emails/:id');
});
