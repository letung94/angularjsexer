angular.module('catalog').
component('catalogList', {
    templateUrl: 'templates/catalog-list.template.html',
    controller: ['$http', function CatalogListController($http) {
        var self = this;
        self.catalogs = [];
        self.getAll = function() {
            $http.get('http://localhost:3000/api/categories').then(function(res) {
                self.catalogs = res.data;
            }, function(res) {

            });
        }
    }]
});