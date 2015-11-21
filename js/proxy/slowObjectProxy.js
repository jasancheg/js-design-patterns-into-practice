define(function (require) {
    'use strict';

    var SlowObjectProxy, 
        slowObjectInstance,
        // we will need the original slow object as the proxy
        // will wrap its interface in its own matching interface 
        slowObject = require('proxy/slowObject');

    /**
     * Constructor for the proxy object 
     */
    SlowObjectProxy = function () {

        /**
         * matches the slow objects method
         */
        this.someMethod = function () {
            var interval;

            // check if the slow object have been initialized previously
            if (!slowObjectInstance) {
                slowObjectInstance = slowObject.init();
            } else {
                slowObjectInstance.someMethod();
            }

            // as proposes of the example we use setInterval but you may be prefer a promise 
            interval = window.setInterval(invokeMethodWhenExists, 100);

            /**
             * method to be invoked every 100 ms in order
             * to check if the object has been created yet
             */
            function invokeMethodWhenExists() {
                // just check the slow object instance if it's truthy 
                if (slowObjectInstance) {
                    // added log just to know the proxy is working as expected
                    console.log('proxying some method');
                    // if truthy we can clear the interval to stop the loop
                    // and invoke the method on the slow object
                    window.clearInterval(interval);

                    slowObjectInstance.someMethod();
                }
            }
        }
    }

    return {
        /**
         * return an instance of the slow object
         * @return {[SlowObjectProxy]} [instance]
         */
        init: function () {
            return new SlowObjectProxy();
        }
    }
});