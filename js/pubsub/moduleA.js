define(function (require) {
    'use strict';

    var subscriber,
        pubsub = require('pubsub/pubsub');

    subscriber = pubsub.subscribe('aTopic', function (data) {
        console.log('A new aTopic was subscribe with the data: ', data);
        // unsubscribe
        subscriber.dispose();
    });
});

