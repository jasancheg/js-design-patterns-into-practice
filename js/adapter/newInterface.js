define(function () {
    'use strict';

    // give a basic constructor
    var NewInterface = function () { };

    /**
     * Simple method to do something new
     */
    NewInterface.prototype.doSomethingNew = function (newArg) {
        console.log('doing the ', newArg);
    };

    // return an instance
    return new NewInterface();
});