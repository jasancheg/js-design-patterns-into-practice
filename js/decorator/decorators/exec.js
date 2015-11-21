define(function () {
    'use strict';

    /**
     * exec decorator
     * this module just return an object that has its own implementation of
     * the getPermissions method, ready to be copied to the object being decorated
     */
    return {
        /**
         * new definition to overwrite getPermissions 
         * @return {[function]} [new getPermissions implementation]
         */
        getPermissions: function () {
            return 'public:read,confidential:read'
        }
    };
});