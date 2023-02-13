// Trends Release Timers
$(document).ready(function(){

var current = new Date();
var exp1 = new Date("July 25, 2019 07:00:00");
var exp2 = new Date("July 26, 2019 07:00:00");
var exp3 = new Date("July 27, 2019 07:00:00");
var exp4 = new Date("July 28, 2019 07:00:00");
var exp5 = new Date("July 29, 2019 07:00:00");
var exp6 = new Date("July 30, 2019 07:00:00");
var exp7 = new Date("July 31, 2019 07:00:00");
    
    if(current.getTime() > exp1.getTime()){
        $('#5G').show();
        $('#5GBtn').show();
    }
    
    if(current.getTime() > exp2.getTime()){
        $('#Bio').show();
        $('#BioBtn').show();
    }
    
    if(current.getTime() > exp3.getTime()){
        $('#Med').show();
        $('#MedBtn').show();
    }
    
    if(current.getTime() > exp4.getTime()){
        $('#Trans').show();
        $('#TransBtn').show();
    }
    
    if(current.getTime() > exp5.getTime()){
        $('#Cann').show();
        $('#CannBtn').show();
    }
    
    if(current.getTime() > exp6.getTime()){
        $('#IOT').show();
        $('#IOTBtn').show();
    }
    
    if(current.getTime() > exp7.getTime()){
        $('#AI').show();
        $('#AIBtn').show();
    }
}, 1000);