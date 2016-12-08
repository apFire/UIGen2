/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("NestedListsDemoController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: 'item', id: 2},
            {type: 'label', label: 'Label 1', id: 3},
            {type: 'text', label: 'Text 1', id: 3},
            {type: 'container', id: 1, columnsize: 2 ,columns: [[], []]}
        ],
        dropzones: {
            'A': []
        }
    };
    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
    $scope.setColoumns = function() {
    	$scope.models.selected.columns = [[]];
    	for(var i=0; i<$scope.models.selected.columnsize; i++) {
    		$scope.models.selected.columns.push([]);
    	};
    };
});
