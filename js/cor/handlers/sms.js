define(function (require) {
    'use strict';

    // get the base Handler and email handler
    var Handler = require('cor/handler'),
        emailHandler = require('cor/handlers/email'),
        smsHandler;

    /**
     * create a new sms handler by create an instanse of the base `Handler` class
     * @attribute 'sms'        [handler type]
     * @attribute handleSms    [current handler]
     * @attribute emailHandler [next handler in the chain]
     * @type {Handler}
     */
    smsHandler = new Handler('sms', handleSms, emailHandler);

    /**
     * [handleSms description]
     * @param  {[object]} sms [description]
     */
    function handleSms(sms) {
        console.log('SMS sent to number', sms.number, 'message: ', sms.message);
    }

    // return an instance
    return smsHandler;
});