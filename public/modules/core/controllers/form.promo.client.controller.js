    "use strict";
    angular.module('core').controller("promoFormController", ["$scope", function ($scope) {
        return $scope.wizard = {firstName: "some name", lastName: "", email: "", password: "", age: "", address: ""}, $scope.isValidateStep1 = function () {
            return console.log($scope.wizard_step1), console.log("" !== $scope.wizard.firstName), console.log("" === $scope.wizard.lastName), console.log("" !== $scope.wizard.firstName && "" !== $scope.wizard.lastName)
        }, $scope.finishedWizard = function () {
            return console.log("yoo")
        }
    }]);
