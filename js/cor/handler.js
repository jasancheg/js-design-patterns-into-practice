define(function () {
    'use strict';

    /**
     * Simple CommunicationHandler constructor,  the constructor will accept potentially three arguments 
     * @param {[string]}   communicationType [type of communication that will be handled | or not :P]
     * @param {[function]} handler           [action handler itself]
     * @param {[function]} nextHandler       [next action handler in the chain]
     */
    var CommunicationHandler = function (communicationType, handler, nextHandler) {
        // set the arguments as properties of the object
        this.communicationType = communicationType;
        this.handler = handler;
        this.nextHandler = nextHandler;
    };

    /**
     * Request method to handle if there are errors
     * @param  {[type]} communication [communication type]
     * @return {[false]}              [if there is an Error]
     */
    CommunicationHandler.prototype.handleCommunication = function (communication) {
        // check if the communication types match to determine if we can handle the request  
        if (communication.type !== this.communicationType) {
            // if we can't handle, check for the next handler in the chain and react properly
            // if the next handler exist we will invoke it and pass the communication 
            (this.nextHandler) ? this.nextHandler.handleCommunication(communication) :
                console.log('Communication type', communication.type, 'could not be handled');
            return;
        }
        // if we can handle, just pass the communication type
        this.handler(communication);
    };

    // and lastly return the consructor
    return CommunicationHandler;
});