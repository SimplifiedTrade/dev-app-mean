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
		state('alpha', {
			url: '/alpha',
			templateUrl: 'modules/core/views/form.item.client.view.html'
		}).
		state('item.forms.wizard', {
			url: '/item-form',
			templateUrl: 'modules/core/views/form.item.client.view.html',
			resolve: {
			loadPlugin: function ($ocLazyLoad) {
			return $ocLazyLoad.load([
                        {
                            files: ['modules/core/css/plugins/steps/jquery.steps.css']
                        }
                	    ]);
                	}
            		}
		}).
        	state('item.forms.wizard.step_one', {
        		url: '/item-form/step_one',
            		templateUrl: 'modules/core/views/wizard/step_one.html'
        	})
        	.state('item.forms.wizard.step_two', {
        		url: '/item-form/step_two',
        		 templateUrl: 'modules/core/views/wizard/step_two.html'
        	})
        	.state('item.forms.wizard.step_three', {
            		url: '/item-form/step_three',
            		templateUrl: 'modules/core/views/wizard/step_three.html'
        	})

	;
	}
]);
