'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		}).
                state('test', {
                        url: '/test',
                        templateUrl: 'modules/core/views/test.client.view.html'
                }).
		state('item', {
			url: '/item',
			templateUrl: 'modules/core/views/item.client.view.html'
		})

;
	}
]);
