/**
 * Main module
 */
require(
    ['factory/init', 'pubsub/init', 'strategy/init', 'observer/init'],
    function (factory, pubsub, strategy, observer) {
        'use strict';

        var examplesList = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer
        };

        window.runExample = function (name) {
            if(!name){
                console.group();
                console.warn('you should provide a pattern name');
                console.info('available pattern samples:');
                console.log('  Creational Design Patterns: ', ['factory']);
                console.log('  Behavioural Patterns: ', ['pubsub','strategy', 'observer', 'cor', 'mediator', 'iterator']);
                console.log('  Structural Patterns: ', ['facade', 'decorator', 'adapter', 'composite', 'proxy']);
                console.groupEnd();
                return;
            }
            examplesList[name].init();
        };
    }
);