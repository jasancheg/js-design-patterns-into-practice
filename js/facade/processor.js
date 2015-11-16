define(function () {
    'use strict';

    // This module will return an API consisting of five methods 
    // that each process a different Javascript type
     return {

        /**
         * Process a string type
         * @param  {[string]} string [string to be processed]
         * @return {[string]}        [processed string]
         */
        processString: function (string) {
            return string.substring(0, string.length / 2);
        },

        /**
         * Process a number type
         * @param  {[number]} number [number to be processed]
         * @return {[number]}        [processed number]
         */
        processNumber: function (number) {
            return number * number;
        },

        /**
         * Process a boolean type
         * @param  {[boolean]} boolean [boolean to be processed]
         * @return {[boolean]}        [processed boolean]
         */
        processBoolean: function (boolean) {
            return !boolean;
        },

        /**
         * Process an array type
         * @param  {[array]} array [array to be processed]
         * @return {[array]}        [processed array]
         */
        processArray: function (array) {
            return array.length;
        },

        /**
         * Process a object type
         * @param  {[object]} object [object to be processed]
         * @return {[object]}        [processed object]
         */
        processObject: function (object) {
            return Object.keys(object).length;
        }
    }
});