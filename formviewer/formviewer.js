/**
 * The controller doesn't do much more than setting the initial data model
 */
angular.module("demo").controller("formViewerController", function($scope) {

    $scope.models = {
        selected: null,
        templates: [
            {type: 'item', id: 2},
            {type: 'label', label: 'Label 1', id: 3},
            {type: 'text', label: 'Text 1', id: 3},
            {type: 'container', id: 1, columnsize: 2 ,columns: [[], []]}
        ],
        dropzones: {
            'A': [{
                "type": "text",
                "label": "Text 1",
                "id": 8
              },
              {
                "type": "container",
                "id": 1,
                "columnsize": 2,
                "columns": [
                  [
                    {
                      "type": "text",
                      "label": "T1",
                      "id": 3
                    },
                    {
                      "type": "text",
                      "label": "Text 5",
                      "id": 7
                    },
                    {
                      "type": "container",
                      "id": 2,
                      "columnsize": 2,
                      "columns": [
                        [
                          {
                            "type": "text",
                            "label": "Text 9",
                            "id": 10
                          }
                        ],
                        [
                          {
                            "type": "text",
                            "label": "Text 88",
                            "id": 11
                          }
                        ]
                      ]
                    }
                  ],
                  [
                    {
                      "type": "text",
                      "label": "T2",
                      "id": 4
                    },
                    {
                      "type": "text",
                      "label": "Text 3",
                      "id": 6
                    },
                    {
                      "type": "text",
                      "label": "Text 4",
                      "id": 5
                    }
                  ]
                ]
              },
              {
                "type": "text",
                "label": "Text 11",
                "id": 9
              }]
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
