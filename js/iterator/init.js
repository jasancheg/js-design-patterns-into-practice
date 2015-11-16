define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {

            // load module
            var iterator = require('iterator/iterator'),
                // let's create an iterator based on an array
                testArray = [{ something: 'yay', other: 123 }, { something: 'test', other: 456 }],
                myArrayIterator = iterator.build(testArray),
                // try a string iterator
                testString = 'teststring',
                myStringIterator = iterator.build(testString);

            // we need to actually use the next method to pull items out of our iterator
            console.log(myArrayIterator.next());
            console.log(myArrayIterator.next());

            // we can use a loop to process each character in the string if we want
            while (!myStringIterator.isDone()) {
                console.log(myStringIterator.next());
            }

            // we can also reset the iterator in any time and use take
            // method to grab a selection of items from the collection
            console.log(myStringIterator.reset().take(4).join(''));
        }

    };

});