define(function (require) {
    'use strict';

    // get the base Handler and sms handler
    var Handler = require('cor/handler'),
        smsHandler = require('cor/handlers/sms'),
        callHandler;

    /**
     * create a new call handler by create an instanse of the base `Handler` class
     * @attribute 'call'      [handler type]
     * @attribute handleCall  [current handler]
     * @attribute smsHandler  [next handler in the chain]
     * @type {Handler}
     */
    callHandler = new Handler('call', handleCall, smsHandler);

    /**
     * [handleCall description]
     * @param  {[object]} call [description]
     */
    function handleCall(call) {
        console.log('Call placed to number', call.number, 'from number', call.ownNumber);
    }

    // return an instance
    return callHandler;
});