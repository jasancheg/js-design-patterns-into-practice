define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load slow object module
            var myProxy,
                slowObjectProxy = require('proxy/slowObjectProxy');

            myProxy = slowObjectProxy.init();
            myProxy.someMethod();
        }

    };

});