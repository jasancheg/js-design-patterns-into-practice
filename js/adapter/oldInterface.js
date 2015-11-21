define(function () {
    'use strict';

    // give a basic constructor
    var OldInterface = function () { };

    /**
     * Simple method to do something
     */
    OldInterface.prototype.doSomethingOld = function () {
        console.log('doing the old thing');
    };

    // return an instance
    return new OldInterface();
});