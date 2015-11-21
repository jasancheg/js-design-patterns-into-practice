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

            // ! We will see that the slowness is happening, but without 
            // ! any JavaScript Error because the proxy waits until the 
            // ! object have been initialized before calling its method
            // ! we will see two log, one for the proxy and one for the
            // ! original slow. So the first time that the proxy invokes
            // ! the method it will be quite slow, but subsequent times
            // ! it will be much faster because the slow object will 
            // ! already have been initialized.
            // ! one of the great thisng about this is that even a client
            // ! initializes the proxy, wheter or not ir knows it's using
            // ! the proxy or the real object, we still might not
            // ! actually need to initialize the slow object, It's only
            // ! when its method is called that we actually need to
            // ! initialize it. 
        }

    };

});