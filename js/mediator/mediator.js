define(function () {
    'use strict';
    
    /**
     * Mediator constructor will need to store all the colleages it is 
     */
    var Mediator = function () {
        this.colleagues = [];
    };

    /**
     * what need to do is to push the colleague into the array of colleagues
     * @param  {[instance]} colleague [a new instance]
     */
    Mediator.prototype.register = function (colleague) {
        this.colleagues.push(colleague);
    };

    /**
     * Send a message to a individual colleague
     * @param  {[string]} recipientId [recipient id]
     * @param  {[object]} message     [message to send]
     * @return {[callback]}           [if correct destinatary, ]
     */
    Mediator.prototype.send = function (recipientId, message) {
        this.colleagues.some(function (colleague) {
            if (colleague.id === recipientId) {
                // this will return true if done
                return colleague.receiveMessage(message);
            }
        });
    };

    /**
     * send message to all colleages
     * @param  {[object]} message [message to send]
     * @param  {[object]} sender  [description]
     */
    Mediator.prototype.broadcast = function (message, sender) {
        this.colleagues.forEach(function (colleague) {
            // filter out the sender of the broadcast by comparing current id   
            if (colleague.id !== sender.id) {
                colleague.receiveMessage(message);
            }
        });
    };

    // return the constructor
    return Mediator;
});