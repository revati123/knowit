
// Client Side Javascript File
var app=angular.module('seed',[]);

var onMainController=function($scope,$http){
 var company="Object Technologies Pvt. Ltd.";
 var mentor={
     firstName:'Shreenivas',
     lastName:'Patil',
     email:'ravi.tambade@transflower.in',
     certification:'Microsoft Certified Trainer',
     salary:4500000
    }
$scope.name=company;
$scope.person=mentor;
}


var onDetailController=function($scope){
   //Model
    var company="Seed Infotech Ltd.";
    var mentor={
        firstName:'Narendra',
        lastName:'Barhate',
        email:'ravi.tambade@transflower.in',
        certification:'Microsoft Certified Trainer',
        salary:5000000
    }


   $scope.name=company;
   $scope.person=mentor;
   }

app.controller('MainController',onMainController);
app.controller("DetailController",onDetailController);