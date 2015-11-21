/**
 * Main module
 */
require(
    [
    'strategy/init', 'facade/init', 'adapter/init', 'decorator/init',
    'observer/init', 'pubsub/init', 'factory/init', 'composite/init',
    'iterator/init', 'proxy/init', 'mediator/init', 'cor/init'
    ],
    function (strategy, facade, adapter, decorator, observer, pubsub, factory, composite, iterator, proxy, mediator, cor) {
        'use strict';

        // allow to run specific examples by name
        var examplesList = {
            cor: cor,
            proxy: proxy,
            pubsub: pubsub,
            facade: facade,
            adapter: adapter,
            factory: factory,
            strategy: strategy,
            observer: observer,
            mediator: mediator,
            iterator: iterator,
            decorator: decorator,
            composite:  composite
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