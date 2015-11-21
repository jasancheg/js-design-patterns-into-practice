define(function () {
    'use strict';

    // difine simple constructor
    var SlowObject = function () {
        this.someMethod = function () {
            console.log('some method on the slow object was invoked');
        }
    };

    return {
        /**
         * Creates new instances of our slow object
         * @return {[SlowObject]} [object instance]
         */
        init: function () {
            // add an artificial initialization delay using a for loop
            for (var x = 0, max = 1000; x < max; x++) {
                console.log('slowness...');
            }
            // when the loops is done, it return a instance of the object
            return new SlowObject();
        }
    }
});