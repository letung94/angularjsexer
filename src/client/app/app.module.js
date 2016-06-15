var productApp = angular.module('productApp', ['catalog', 'product', 'ngRoute', 'productreview', 'ngMessages']);

productApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/products/:category', {
            template: '<product-list></product-list>'
        })
        .when('/products/:category/:id', {
            template: '<product-review></product-review>'
        }).
    otherwise('/products/phone');
}]);
productApp.controller('MyCtrl', MyCtrl);

function MyCtrl($scope) {
    $scope.submit = function() {
        // Set the 'submitted' flag to true
        $scope.submitted = true;
        // Send the form to server
        // $http.post ...
    }
};