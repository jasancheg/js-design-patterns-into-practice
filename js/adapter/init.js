define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load modules
            var oldInterfaceAdapter = require('adapter/oldInterfaceAdapter');

            // just invoke doSomething ...
            // in this example we are using the module just in one place, 
            // but in reality we could be using this guy all over our code base
            // and might even be a module provided by a third party, or vendor, 
            // or something that we can't or don't want to update derectly 
            oldInterfaceAdapter.doSomethingOld();
        }

    };

});