define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load module
            var facade = require('facade/facade');

            // process some things
            console.log(facade.processThing('test string'));
            console.log(facade.processThing(5));
            console.log(facade.processThing(true));
            console.log(facade.processThing([1, 2, 3]));
            console.log(facade.processThing({ prop: 'something' }));

            // So the consumer, which in this case is the init module doesn't know 
            // anything about the processer directly and it doesn't depend on it. 
            // It just depends on the facade it just knows how to invoke 
            // the facades process thing method.
        }

    };

});