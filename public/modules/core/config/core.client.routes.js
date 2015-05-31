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
		}).
		state('itemformswizard', {
			url: '/item-form',
			templateUrl: 'modules/core/views/form.item.client.view.html'
		}).
        	state('itemformswizard.step_one', {
        		url: '/step-one',
            		templateUrl: 'modules/core/views/item/step_one.html'
        	})
        	.state('itemformswizard.step_two', {
        		url: '/step-two',
        		 templateUrl: 'modules/core/views/item/step_two.html'
        	})
        	.state('itemformswizard.step_three', {
            		url: '/step-three',
            		templateUrl: 'modules/core/views/item/step_three.html'
        	}).
		state('promo', {
			url: '/promo',
			templateUrl: 'modules/core/views/promo.client.view.html'
		}).
		state('promoformswizard', {
			url: '/promo-form',
			templateUrl: 'modules/core/views/form.promo.client.view.html'
		}).
        	state('promoformswizard.step_one', {
        		url: '/step-one',
            		templateUrl: 'modules/core/views/promo/step_one.html'
        	})
        	.state('promoformswizard.step_two', {
        		url: '/step-two',
        		templateUrl: 'modules/core/views/promo/step_two.html'
        	})
        	.state('promoformswizard.step_three', {
            		url: '/step-three',
            		templateUrl: 'modules/core/views/promo/step_three.html'
        	})
		.state('upload', {
			url: '/upload',
			templateUrl: 'modules/core/views/upload.client.view.html'
		})

	;
	}
]);
