define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            var sms,
                call,
                email,
                homer,
                handler,
                telepathy,
                // load the base handler and first handler, so in this case is `call`
                Handler = require('cor/handler'),
                callHandler = require('cor/handlers/call');
            
            // lets define some data communications
            call = {
                type: 'call',
                number: '27894504375',
                ownNumber: '928436485024'
            };
            sms = {
                type: 'sms',
                number: '27894504375',
                message: 'Hey Toni'
            };
            email = {
                type: 'email',
                recipient: 'jasancheg@gmail.com',
                message: 'Hi Toni'
            };
            homer = {
                type: 'Carrier Pigeon',
                target: 'someone else',
                message: 'Hi there'
            };
            telepathy = {
                type: 'wooo',
                target: 'someone else',
                message: 'Hi there'
            };

            /**
             * To setup the chain we should create a new instance without type and handler of the base `Handler` class
             * We just specify the first handler in the chain by passing the third argument
             * @attribute null         [no handler type]
             * @attribute null         [no current handler]
             * @attribute callHandler  [next handler in the chain]
             * @type {Handler}
             */
            handler = new Handler(null, null, callHandler);

            // now we can start the proccess to handling a request suing the handler method
            // create some communication objects
            handler.handleCommunication(email);
            handler.handleCommunication(sms);
            handler.handleCommunication(call);
            handler.handleCommunication(homer);
            handler.handleCommunication(telepathy);

        }

    };

});