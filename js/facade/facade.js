define(function (require) {
    'use strict';

    // load the procesor as a dependency
    var processor = require('facade/processor');

    return {
        /**
         * Single method to return from the facade depending on the
         * type of thing that was passed to it
         * @param  {[unknown]} thing [type of thing to be processed]
         * @return {[unknown]}       [processed thing]
         */
        processThing: function (thing) {
            /**
             * invokes one of the processes methods
             * @param  {[type]} Object.prototype.toString.call(thing) [using this technique to convert 
             * the type into either object string or whatever the type of the thing was passed in]
             */
            switch (Object.prototype.toString.call(thing)) {
                case '[object String]':
                    return processor.processString(thing);
                    break;
                case '[object Number]':
                    return processor.processNumber(thing);
                    break;
                case '[object Boolean]':
                    return processor.processBoolean(thing);
                    break;
                case '[object Array]':
                    return processor.processArray(thing);
                    break;
                case '[object Object]':
                    return processor.processObject(thing);
                    break;
                default:
                    return 'Unable to process the thing!';
            }
        }
    };
});