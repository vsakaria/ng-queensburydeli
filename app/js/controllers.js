'use strict';

/* Controllers */

/* Setup the a angular module registered
to  the root element
*/

/* Set controllers to the root element
  module. Give the controller detrivatives.
*/

/* Populate the controllers with model data in the
scope to render in the corrospending views.
data */

var queensDeli = angular.module('queensDeli', []);

function foodMenu($scope, $http) {
    $http.get('data/food.json').success(function(data) {
        $scope.foods = data;
    });
}
queensDeli.controller('foodMenu', ['$scope', '$http', foodMenu]);


queensDeli.controller('drinksMenu', function($scope) {
    $scope.drinks = [{
        'name': 'Apple & Carrot'
    }, {
        'name': 'Ginger Beer'
    }];
});