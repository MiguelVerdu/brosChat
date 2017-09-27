angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {

})
   
.controller('galeriaCtrl', function($scope, $stateParams, $http) {
  $scope.galeria = [];
   $http.get('http://www.secretsex.com.br/mobile/json/gallery?id=' + $stateParams.galeriaid).then(function(resp) {        
        $scope.galeria = resp.data.gallery;
             
      }, function(err) {
        console.error('ERR', err);
        // err.status will contain the status code
      })

})
   
.controller('filtroCtrl', function($scope) {

})
   
.controller('acompanhantesCtrl', function($scope, $http) {
	$scope.users = [];
	 $http.get('http://www.secretsex.com.br/mobile/json/users').then(function(resp) {
        //console.log('Success', resp);
        // For JSON responses, resp.data contains the result
        $scope.users = resp.data.users;
       
      }, function(err) {
        console.error('ERR', err);
        // err.status will contain the status code
      })

})
   
.controller('editarPerfilCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope, $stateParams, $http) {
	$scope.perfil = [];
   $http.get('http://www.secretsex.com.br/mobile/json/user?id=' + $stateParams.perfilid).then(function(resp) {        
        $scope.perfil = resp.data.profile;       
      }, function(err) {
        console.error('ERR', err);
        // err.status will contain the status code
      })

})
   
.controller('notificaEsCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

})
   
.controller('torneSeDestaqueCtrl', function($scope) {

})
   
.controller('termosECondiEsCtrl', function($scope) {

})
   
.controller('sairCtrl', function($scope) {

})
    