define(function () {
    'use strict';

    return {
        // strategy validate method
        validate: function (value) {
            // just check if the simbol "@" is present, 
            // don't use in production code :P
            return value.indexOf('@') !== -1;
        }
    };
});