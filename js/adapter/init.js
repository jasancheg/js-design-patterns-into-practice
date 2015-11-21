define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load modules
            var oldInterfaceAdapter = require('adapter/oldInterfaceAdapter');

            // do something ...
            oldInterfaceAdapter.doSomethingOld();
        }

    };

});