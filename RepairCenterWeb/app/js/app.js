'use strict';

angular
    .module('rcweb',['ngRoute', 'rcweb.app', 'rcweb.app.services'])
    .config(rcwebRouter);

function rcwebRouter($routeProvider){
    $routeProvider
        .when('/', { templateUrl : 'views/jobList.html', controller : 'JobListCtrl'})
        .when('/JobList', { templateUrl : 'views/jobList.html', controller : 'JobListCtrl'})
        .when('/Job/:jobId', { templateUrl :  'views/jobOverview.html', controller : 'JobOverviewCtrl'});
}