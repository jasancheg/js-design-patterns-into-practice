define(function (require) {
    'use strict';

    return {
        init: function () {

            // just require the modules
            var Strategy = require('strategy/strategy'),
                telValidator = require('strategy/telValidator'),
                emailValidator = require('strategy/emailValidator'),
                validator;

            // we can create a new validator for invoking the strategy constructor 
            validator = new Strategy();
            // will return `true` because contains only numbers and more than 11 digits
            console.log(validator.selectValidator(telValidator).validate(012345678901));
            // will return `false` because '@' is lost
            console.log(validator.selectValidator(emailValidator).validate('test'));
        }

    };

});