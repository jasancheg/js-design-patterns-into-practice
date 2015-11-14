define(function (require) {
    'use strict';

    return {
        init: function() {

            var moduleA = require('pubsub/moduleA');
            var moduleB = require('pubsub/moduleB');

            moduleB.publishEvent();
            // to see the dispose method in action we need to call it twice, the second 
            // time the second time it will no work because the module was unsubscribe
            moduleB.publishEvent();
        }
    };
});