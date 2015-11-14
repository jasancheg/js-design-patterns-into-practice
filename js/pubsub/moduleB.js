define(function (require) {
    'use strict';

    var pubsub = require('pubsub/pubsub');

    return {
        publishEvent: function () {
            var data = {
                something: 'some data'
            };
            
            pubsub.publish('aTopic', data);
        }
    }
});