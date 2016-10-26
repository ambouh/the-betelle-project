// JavaScript Document

angular.module('myApp', []);

angular.module('myApp').directive('actorTile', function() {
    return {
        restrict: 'AE',
        scope: {
            actor: '='
        },
        templateUrl: 'actor-tile-template.html'

    }
});
angular.module('myApp').directive('projectTile', function() {
    return {
        restrict: 'AE',
        scope: {
            actor: '='
        },
        templateUrl: 'project-tile-template.html'

    }
});
angular.module('myApp').controller('projectCtrl', function ($scope) {
    $scope.mutants = [
        {h2: "Title One",
            h3: "Subtitle One",
            image: "images/content-bg.jpg"},
        {h2: "Title Two",
            h3: "Subtitle Two",
            image: "images/content-bg.jpg"},
        {h2: "Title Three",
            h3: "Subtitle Three",
            image: "images/content-bg.jpg"}
            ];
});