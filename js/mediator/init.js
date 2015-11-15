define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            var mediator,
                colleague1,
                colleague2,
                colleague3,
                // load modules
                Mediator = require('mediator/mediator'),
                colleague = require('mediator/colleague');

            // create a mediator and some colleagues
            mediator = new Mediator();
            colleague1 = colleague.create('colleague1', mediator);
            colleague2 = colleague.create('colleague2', mediator);
            colleague3 = colleague.create('colleague3', mediator);

            // send som messages
            colleague1.sendMessage('Hey there', 'colleague2');
            colleague2.sendMessage('Hi colleague1', 'colleague1');
            colleague3.sendMessage('Hey guys!');
        }

    };

});