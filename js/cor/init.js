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
                handler,
                telepathy,
                Handler = require('cor/handler'),
                callHandler = require('cor/handlers/call');
            
            // lets define some data
            call = {
                type: 'call',
                number: '07123456789',
                ownNumber: '070031101003'
            };
            sms = {
                type: 'sms',
                number: '07123456789',
                message: 'Hey Dan'
            };
            email = {
                type: 'email',
                recipient: 'dan@danwellman.co.uk',
                message: 'Hi Dan'
            };
            telepathy = {
                type: 'esp',
                target: 'someone else',
                message: 'spooky'
            };

            handler = new Handler(null, null, callHandler);
            handler.handleCommunication(email);
            handler.handleCommunication(sms);
            handler.handleCommunication(call);
            handler.handleCommunication(telepathy);

        }

    };

});