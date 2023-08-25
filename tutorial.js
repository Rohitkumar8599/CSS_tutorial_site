var app=angular.module("myapp",[]);
app.controller("mycontroller",function($scope){
$scope.join=function(){
alert("Now you are join this tutorial site");
}
$scope.r1 = false;
$scope.r2 = false;
$scope.r3 = false;
$scope.r4 = false;
$scope.r5 = false;
$scope.r6 = false;
$scope.r7 = false;

 $scope.s1 = function () {
$scope.r1 = true;
$scope.r2 = false;
$scope.r3 = false;
$scope.r4 = false;
$scope.r5 = false;
$scope.r6 = false;
$scope.r7 = false;
console.log($scope.r1);

}
 $scope.s2 = function () {
 $scope.r2 = true;
 $scope.r1 = false;
$scope.r3 = false;
$scope.r4 = false;
$scope.r5 = false;
$scope.r6 = false;
$scope.r7 = false;
console.log($scope.r2);
}
 $scope.s3 = function () {
 $scope.r3 = $scope.r3 ? false : true;
 $scope.r2 = false;
$scope.r1 = false;
$scope.r4 = false;
$scope.r5 = false;
$scope.r6 = false;
$scope.r7 = false;

}

 $scope.s4 = function () {
 $scope.r4 = $scope.r4 ? false : true;
 $scope.r2 = false;
$scope.r3 = false;
$scope.r1 = false;
$scope.r5 = false;
$scope.r6 = false;
$scope.r7 = false;

 
}

 $scope.s5 = function () {
 $scope.r5 = $scope.r5 ? false : true;
 $scope.r2 = false;
 $scope.r1 = false;
 $scope.r4 = false;
 $scope.r3 = false;
 $scope.r6 = false;
 $scope.r7 = false;
 
 
}
 $scope.s6 = function () {
 $scope.r6 = $scope.r6 ? false : true;
 $scope.r2 = false;
 $scope.r1 = false;
 $scope.r4 = false;
 $scope.r5 = false;
 $scope.r3 = false;
 $scope.r7 = false;
 
}

 $scope.s7 = function () {
 $scope.r7 = $scope.r7 ? false : true;
 $scope.r2 = false;
 $scope.r1 = false;
 $scope.r4 = false;
 $scope.r5 = false;
 $scope.r6 = false;
 $scope.r3 = false;
 
}
});