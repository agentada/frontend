angular.module('agentada', [])
	.controller('EventsController', ['$scope', function($scope) {
		$scope.events = [
			{text:'Ithaca Bakery', time: '08:00'},
			{text:'Tech Talk', time: '10:00'}
		];

		$scope.addEvent = function() {
			$scope.events.push({text:$scope.eventText, time:$scope.eventTime});
			$scope.eventText = '';
			$scope.eventTime = '';
		};

		
}]);