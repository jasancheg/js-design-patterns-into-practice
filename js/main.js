/**
 * Main module
 */
require(
    ['factory/init', 'pubsub/init', 'observer/init', 'strategy/init', 'cor/init'],
    function (factory, pubsub, observer, strategy, cor) {
        'use strict';

        var examplesList = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer,
            cor: cor
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