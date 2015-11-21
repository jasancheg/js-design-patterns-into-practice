define(function (require) {
    'use strict';

    // load the new interface module
    var newInterface = require('adapter/newInterface');
    // So now the adapter can return an object that exposes a method
    // the has the same name as the method on the oldInterface but it's 
    // actually going to use the newInterface

    /**
     * @return {[object]} [exposes the old method name to the outside world
     *                     while invoking the new method internally]
     */
    return {
        /**
         * adapter method
         * @return {[action]} [invoke new method]
         */
        doSomethingOld: function () {
            return newInterface.doSomethingNew('new thing');
        }
    };
});