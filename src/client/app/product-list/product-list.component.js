angular.module('product').
component('productItem', {
    templateUrl: 'templates/product-list.template.html',
    controller: ['$http', function CatalogListController($http) {
        var self = this;
        self.product = null;
        self.getByCatalogName = function(catalogname) {
            $http.get('http://localhost:3000/products/' + catalogname).then(function(res) {
                self.product = res.data;
            }, function(res) {

            });
        }
    }]
});