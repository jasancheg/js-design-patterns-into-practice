define(function () {
    'use strict';

    /**
     * Define a constructor
     * @param {[array]} collection [a collection of items]
     */
    var Iterator = function (collection) {
        // make own property of the constructor
        this.collection = collection;
        // keep track of which item have been processed
        this.index = 0;
    };

    /**
     * All the methods for the constructor
     * @type {Object}
     */
    Iterator.prototype = {
        // set the constructor property of the object that is going to be used
        // for the prototype back to the iterator constructor, If we don't do this,
        // the constructor will point to the object constructor instead
        constructor: Iterator,
        
        // iterators interface
        
        /**
         * core of the iterator
         * @return {object} [next item in the array using the index proxy of the iterator]
         */
        next: function () {
            // increment the index when the element is returned
            // don't woory about coding defensively here because if we try to access 
            // an array item that doesn't exist it would just return undefined
            return this.collection[this.index++];
        },

        /**
         * returns true once all the items in the collection have been traversed
         * @return {Boolean} [description]
         */
        isDone: function () {
            return this.index === this.collection.length;
        },
        
        /**
         * sets the index property of the iterator back to 0
         * @return {[Int]} [reset in case we want to traverse the collection again]
         */
        reset: function () {
            this.index = 0;
            return this;
        },

        /**
         * Will return a specified number of items
         * @param  {[Int]} numberOfItems  [number of items that we want to take]
         * @return {[array]}              [specified number of items]
         */
        take: function (numberOfItems) {
            var newIndex = this.index + numberOfItems,
                // create new array using slice method, is safer to use it
                // just in case the iterator's collection is a string
                newArr = Array.prototype.slice.call(this.collection, this.index, newIndex);

            // update the index accordingly once we've taken the items
            this.index = newIndex;
            return newArr;
        }
    };

    return {
        /**
         * build method is another implementation of the factory pattern
         * @param  {[object]} collection [description]
         * @return {[type]}              [description]
         */
        build: function (collection) {

            // just useful when a collection is passe
            var keys = Object.keys(collection),
                tempArray = [],
                prop;

            // when number is passed convert it to a string and the iterator will be able to handle it
            if (typeof collection === 'number') {
                collection = collection.toString();
            }

            // when a object is passed extract the values from the object and construct a new array from these
            if (keys.length) {
                for (prop in collection) {
                    tempArray.push(collection[prop]);
                }
                collection = tempArray;
            }

            // try to initialize the iterator
            if (collection.length) {
                return new Iterator(collection);
            } else {
                throw ('Iterator cannot be built from Boolean, null or undefined');
            }
        }
    }
});