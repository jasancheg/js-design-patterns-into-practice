define(function () {
    'use strict';

    // init the constructor
    var Validator = function () { };

    // allow the validator to be selected
    // will recibe a subvalidator as an argumen
    // and we can set this as main property
    Validator.prototype.selectValidator = function (validator) {
        this.validator = validator;

        return this;
    };

    // next we can invoque a method that validate methods of the same name
    Validator.prototype.validate = function (value) {
        // first of we need to make sure the validator have been selected
        if (this.validator) {
            return this.validator.validate(value);
        }
        throw ('No validator selected');
    };

    // just return the constructor
    return Validator;
});
