define(function () {
    'use strict';

    return {
        // the strategy validate method
        validate: function (value) {
            // Very simple, there is more better options in internet, :P
            return (/^[0-9]{11}$/g).test(value);
        }
    }
});