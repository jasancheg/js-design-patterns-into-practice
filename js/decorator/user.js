define(function () {
    'use strict';

    /**
     * Very simple constructor 
     * User obejects have a getPermissions method wich is used to
     * return a simple string that details their level of access
     * @param {[string]} id [User instance id]
     */
    var User = function (id) {
        this.id = id;
        this.getPermissions = function () {
            return 'public:read';
        }
    };

    /**
     * Use to add new decorations
     * This method simply overwrides the Object 
     * `getPermissions` method with its own copy of the method  
     * @param  {[function]} decorator [new decorator]
     */
    User.prototype.decoratePermissions = function (decorator) {
        this.getPermissions = decorator.getPermissions;
    };

    // return the constructor
    return User;
});