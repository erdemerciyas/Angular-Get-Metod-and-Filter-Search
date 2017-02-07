var app = angular.module('App', []);

app.controller('aplication',['$scope', '$http', function($scope, $http){
	
	//$scope.diziler = ["1","2","3","4"]

	var url="https://jsonplaceholder.typicode.com/users";

	$http.get(url).success(function successCallback(responsive){
		
		$scope.users = responsive;

		//console.log(responsive);
	});

	$scope.formUser = function(){
		$scope.UserResult = $scope.users.filter(function(item){
			return item.id == $scope.username;
		});

		$scope.username = '';

		if(!$scope.UserResult.length){
			alert("Kayıt Bulunamadı");
		}
	}

}]);