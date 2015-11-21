define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load module and decorators
            var user1, user2,
                User = require('decorator/user'),
                execDecorator = require('decorator/decorators/exec'),
                adminDecorator = require('decorator/decorators/admin');

            // create a couple of simple users and 
            // overwrite user permisions with decorator
            user1 = new User('user1');
            user1.decoratePermissions(execDecorator);

            user2 = new User('user2');
            user2.decoratePermissions(adminDecorator);

            console.log(user1.id, user1.getPermissions());
            console.log(user2.id, user2.getPermissions());
        }

    };

});