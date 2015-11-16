# JS Design patterns into practice

> The Iterator Pattern

JavaScript has some iteration built-in—for and for-in loops for example—but to use these, we need to know up-front what type of object we want to iterate. This sample, shows how to use the Iterator pattern to build an asynchronous iterator for any type of object.

There are a number of array methods tha we can use to iterate arrays and we have the for in loop for objects. But the iteration pattern is slightly different in that it doesn't have to happen in a synchronous loop, we choose when to extract the next item from the collection and the iteration itself keeps track of which items have been processed. The purpose of an iterator is to provide access to the items in a collection contiguously while keeping track of which items have been accessed. Usually,an iterator will provide a method called next which will return the next item in the collection. 

In some languages, an iterator will provide other methods like hasNext, isDone, first, and reset. Javascript has iterators as a core part of the language in ES7, so iterators ara coming to a browser near you at some point in the future. Until is widely implemented, however, we'll have to ceate our own.

It's less common in JavaScript than some other patterns but it can be useful and it's pretty easy to put together.
We don't need to know beforehand whether the collection is an array, an object, a string, or number. We just use it the iterator's API and let the iterator take car of it.

**Features**

* JavaScript has iteration built into the language
* An iterator doesn't run in a synchronous loop
* The iterator keeps track of which items have been processed
* Access to the items is contiguous
* Usually provides a next() method
* Sometimes provides hasNext(), isDone(), first() and reset()


**Summary**

* Not common in JavaScript (yet)
* Decouples the processing of an object from the object being processed
