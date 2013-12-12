'use strict';

/* Filters */

angular.module('testApp.filters', [])
.filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
})
.filter('trimDate', function() {
    return function(input) {
        return input.substring(0, 10);
    };
})
.filter('momentEST', function () {
    return function (dateString, format) {
        if (dateString[dateString.length - 1].toUpperCase() != "Z") {
            dateString = dateString + "Z";
        }
        return moment(dateString).zone('-0500').format(format);
    };
});