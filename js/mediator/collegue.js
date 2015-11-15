define(function () {
    'use strict';

    /**
     * Define `Colleague` constructor
     * @param {[type]} id       [id for the colleague]
     * @param {[type]} mediator [instance of the mediator]
     */
    var Colleague = function (id, mediator) {
        this.id = id;
        this.mediator = mediator;
    };

    /**
     * Method to receive messages
     * @param  {[string]} message  [received message]
     * @return {[boolean]}         [true]
     */
    Colleague.prototype.receiveMessage = function (message) {
        // to kept it simple just log the message to the console
        console.log('Module', this.id, 'received message:', message);
        // useful to make a validation on a send method
        return true;
    };

    /**
     * Used for send mensagges via the mediator
     * @param  {[string]} message     [message to send]
     * @param  {[type]}   recipientId [optionally a recipient to send it too]
     */
    Colleague.prototype.sendMessage = function (message, recipientId) {
        // based on whether the recipient is specified, we can either use
        // the mediator's `send` method to send a message to a specific colleague, or
        // use the mediator's `broadcast` method to send a message to all colleagues
        (recipientId) ? this.mediator.send(recipientId, message) :
            // we can pass the current instance of the colleague to avoid 
            // sending the message to the coleague the send it
            this.mediator.broadcast(message, this);
    };

    return {
        /**
         * Exposed a `create` method, inside it we can initialize a new colleague and
         * register it with the mediator before passing back the new colleague
         * @param  {[type]} id       [description]
         * @param  {[type]} mediator [description]
         * @return {[colleague]}     [new instance]
         */
        create: function (id, mediator) {
            var that = new Colleague(id, mediator);

            mediator.register(that);

            return that;
        }
    };
});