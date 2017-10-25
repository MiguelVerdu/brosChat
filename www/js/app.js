// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var db = null;

var example = angular.module('starter', ['ionic', 'ngCordova'])
    .run(function($ionicPlatform, $cordovaSQLite) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
            //db = $cordovaSQLite.openDB({ name: 'my.db' });
            db = window.sqlitePlugin.openDatabase({name: "mySQLite.db", location: 'default'});
            $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
        });
    });

var aux;

example.controller("ExampleController", function($scope, $cordovaSQLite) {

    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }

    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
                document.getElementById("prueba").innerHTML = "SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname;
                aux = "SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname;
                alert(aux)
            } else {
                console.log("No results found");
                document.getElementById("prueba").innerHTML = "No resultados encontrados";
            }
        }, function (err) {
            console.error(err);
        });
    }
});

function myFunction(){
  alert(aux);
}
