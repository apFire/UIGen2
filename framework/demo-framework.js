angular.module("demo", ["ngRoute", "dndLists"])
    .config(function($routeProvider) {
        $routeProvider
            .when('/simple', {
                templateUrl: 'simple/simple-frame.html',
                controller: 'SimpleDemoController'
            })
            .when('/formeditor', {
                templateUrl: 'formeditor/formeditor-frame.html',
                controller: 'NestedListsDemoController'
            })
            .when('/types', {
                templateUrl: 'types/types-frame.html',
                controller: 'TypesDemoController'
            })
            .when('/advanced', {
                templateUrl: 'advanced/advanced-frame.html',
                controller: 'AdvancedDemoController'
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
                    {label: "Dashboard", href: "#/advanced"}
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
