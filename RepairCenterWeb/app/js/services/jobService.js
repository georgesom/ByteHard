'use strict';

rcwebServices
    .factory('jobService', function(){
        var jobService = {};

        jobService.getJob = function(jobId){
            return {
                contacts: {
                    owner : {
                        firstName : "George",
                        lastName : "Som"
                    }
                }
            };
        };

        jobService.getJobs = function(clientId){
            return {
                jobs : [{
                    contacts: {
                        owner : {
                            firstName : "George",
                            lastName : "Som"
                        }
                    },
                    jobId : "001"
                },{
                    contacts: {
                        owner : {
                            firstName : "Mike",
                            lastName : "Jones"
                        }
                    },
                    jobId : "002"
                }]
            };
        };

        return jobService;
    });