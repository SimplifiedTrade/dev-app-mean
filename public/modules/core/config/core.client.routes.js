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
			//,
		//	resolve: {
		///	loadPlugin: function ($ocLazyLoad) {
		//	return $ocLazyLoad.load([
                      //  {
                  //          files: ['modules/core/css/plugins/steps/jquery.steps.css']
                    //    }
                //	    ]);
                //	}
            	//	}
		}).
        	state('iitemformswizardstepone', {
        		url: '/item-form/step-one',
            		templateUrl: 'modules/core/views/wizard/step_one.html'
        	})
        	.state('itemformswizardsteptwo', {
        		url: '/item-form/step-two',
        		 templateUrl: 'modules/core/views/wizard/step_two.html'
        	})
        	.state('itemformswizardstepthree', {
            		url: '/item-form/step-three',
            		templateUrl: 'modules/core/views/wizard/step_three.html'
        	})

	;
	}
]);
