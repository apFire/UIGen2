angular.module("UIGen2", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/formeditor', {
                templateUrl: 'formeditor/formeditor-frame.html',
                controller: 'NestedListsDemoController'
            })
            .when('/viewer', {
                templateUrl: 'formviewer/formviewer-frame.html',
                controller: 'formViewerController'
            })
            .otherwise({redirectTo: '/formeditor'});
    })

    .directive('navigation', function($rootScope, $location) {
        return {
            template: '<li ng-repeat="option in options" ng-class="{active: isActive(option)}">' +
                      '    <a ng-href="{{option.href}}">{{option.label}}</a>' +
                      '</li>',
            link: function (scope, element, attr) {
                scope.options = [
                    {label: "Form Editor", href: "#/formeditor"},
                    {label: "Viewer", href: "#/viewer"}
                ];

                scope.isActive = function(option) {
                    return option.href.indexOf(scope.location) === 1;
                };

                $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
                    scope.location = $location.path();
                });
            }
        };
    });
