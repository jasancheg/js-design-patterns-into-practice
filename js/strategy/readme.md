# JS Design patterns into practice

> Strategy pattern

The Strategy pattern allows us to follow a different code path, or strategy, at run-time depending on the input data.

Allow us very particular behaviours and this behabiours are the strategies that we can select on run time.
A great practice in software development is to incapsulate variations, so whenever to think in variations this patther will be useful.  
For this example lets implement some different strategies depending on what we need to validate.

**Features**

* Allow a behaviour to be selected at run time (this is very particular)
* The different behaviours are the sttrategies
* Easy to implement, but not as common as some other patterns (as pubsub for exmple)
* Useful when we have lots of behaviours and we don't know wich one will be used


**Summary**

* Consist of a collection of objects, a factory, and a client that requires instances of the object
* Client controls the process, but is decoupled from the actual construction
* Easy to extend with new types of objects