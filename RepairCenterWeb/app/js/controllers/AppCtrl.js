'use strict';

var appCtrl = angular.module('rcweb.app',['rcweb.app.services', 'ngRoute']);


appCtrl.controller('AppCtrl', ['$scope', function($scope){
    $scope.appName = "RC Web";
}]);

appCtrl.controller('JobListCtrl', ['$scope', 'jobService', function($scope, jobService){
    $scope.pageTitle = "Job List";
    $scope.controllerName = "JobListCtrl";

    var jobs = jobService.getJobs("6025");

    $scope.jobs = jobs.jobs;
    console.log($scope.jobs);
}]);

appCtrl.controller('JobOverviewCtrl', ['$scope', '$route', 'jobService', function($scope, $route, jobService){
    $scope.pageTitle = "Job Overview";
    $scope.controllerName = "JobOverviewCtrl";

    var job = jobService.getJob(1234);
    console.log(job);
    console.log($route);

    $scope.firstName = job.contacts.owner.firstName;
    $scope.lastName = job.contacts.owner.lastName;
}]);


