angular.module('product').
component('productList', {
    templateUrl: 'templates/product-list.template.html',
    controller: ['$http', '$routeParams', function ProductListController($http, $routeParams) {
        var self = this;
        self.category = $routeParams.category;
        self.products = null;
        self.getByCategory = function(category) {
            $http.get('http://localhost:3000/api/products?category=' + category).then(function(res) {
                self.products = res.data;
            }, function(res) {

            });
        }
        self.getByCategory(self.category.toLowerCase());
    }]
});