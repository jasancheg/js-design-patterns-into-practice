define(function (require) {
    'use strict';

    // get the base Handler
    var Handler = require('cor/handler'),
        emailHandler;

    /**
     * create a new email handler by create an instanse of the base `Handler` class
     * @attribute 'email'      [handler type]
     * @attribute handleEmail  [current handler]
     * @attribute null         [next handler in the chain]
     * @type {Handler}
     */
    emailHandler = new Handler('email', handleEmail, null);

    /**
     * [handleEmail description]
     * @param  {[object]} email [description]
     */
    function handleEmail(email) {
        console.log('Email sent to', email.recipient, 'message: ', email.message);
    }

    // return an instance
    return emailHandler;
});