/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("UIGen2").controller("formViewerController", ['$scope', 'DataInterop', function($scope, DataInterop) {

    $scope.models = {
        selected: null,
        templates: [
            {type: 'item', id: 2},
            {type: 'label', label: 'Label 1', id: 3},
            {type: 'text', label: 'Text 1', id: 3},
            {type: 'container', id: 1, columnsize: 2 ,columns: [[], []]}
        ],
        dropzones: {}
    };
    $scope.$watch(function () { return DataInterop.getJson(); }, function (newValue, oldValue) {
        if (newValue != null) {
            $scope.models.dropzones= newValue;
        }
    }, true);
}]);
