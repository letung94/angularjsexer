angular.module('productreview').
component('productReview', {
    templateUrl: 'templates/product-review.template.html',
    controller: ['$http', '$routeParams', function ProductListController($http, $routeParams) {
        var self = this;
        self.category = $routeParams.category;
        self.product_id = $routeParams.id;
        self.product = null;
        self.getReviews = function(product_id) {
            /*$http.get('http://localhost:3000/api/products?category=' + product_id).then(function(res) {
                self.products = res.data;
            }, function(res) {

            });*/
        }

        self.getByProductId = function(product_id) {
            $http.get('http://localhost:3000/api/products/' + product_id).then(function(res) {
                self.product = res.data[0];
            }, function(res) {

            });
        }
        self.getByProductId(self.product_id);
    }]
});