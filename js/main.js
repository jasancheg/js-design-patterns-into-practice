/**
 * Main module
 */
require(
    ['factory/init', 'pubsub/init', 'observer/init', 'strategy/init', 'cor/init', 'mediator/init',
    'iterator/init', 'facade/init', 'decorator/init', 'adapter/init'],
    function (factory, pubsub, observer, strategy, cor, mediator, iterator, facade, decorator, adapter) {
        'use strict';

        // allow to run specific examples by name
        var examplesList = {
            factory: factory,
            pubsub: pubsub,
            strategy: strategy,
            observer: observer,
            cor: cor,
            mediator: mediator,
            iterator: iterator,
            facade: facade,
            decorator: decorator,
            adapter: adapter
        };

        /**
         * method to access the examples
         * @param  {[string]} name [Pattern name]
         * @return {[false]}       [if no name is provided or bad name stops the excecution]
         */
        window.runExample = function (name) {
            if(!name || !examplesList[name]){
                console.group();
                console.warn('you should provide a valid pattern name');
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