// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
//angular.module('myApp',['ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    

    $urlRouterProvider.otherwise('');
  
  })

  .controller('homeCtrl',function($scope){
      

  })

  



  /*document.addEventListener("devideready", function(){
    $cordovaPlugin.someFunction().then(success, error);
    
  },false);
  $ionicPlatform.ready(function(){
    $cordovaPlugin.someFunction().then(success, error);
  })*/

/*
  .factory('bookService', function() {
    var books = [
      { title: 'La colmena', year: '1951', author: 'Camilo José Cela Trulock', 
        isbn: '843992688X', editorial: 'Anaya', cover: 'lacolmena.jpg' },
      { title: 'La galatea', year: '1585', author: 'Miguel de Cervantes Saavedra', 
        isbn: '0936388110', editorial: 'Anaya', cover: 'lagalatea.jpg' },
      { title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605', 
        author: 'Miguel de Cervantes Saavedra', 
        isbn: '0844273619', editorial: 'Anaya', cover: 'donquijote.jpg' },
      { title: 'La dorotea', year: '1632', author: 'Félix Lope de Vega y Carpio', 
        isbn: '847039360X', editorial: 'Anaya', cover: 'ladorotea.jpg' },
      { title: 'La dragontea', year: '1602', author: 'Félix Lope de Vega y Carpio', 
        isbn: '8437624045', editorial: 'Anaya', cover: 'ladragontea.jpg' }
    ];
    return {
        getBooks: function() {
            return books;
        },
        getBook: function(id) {
            return books[id];
        },

    }
    
})
*/

