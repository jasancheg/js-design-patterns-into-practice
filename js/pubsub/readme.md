# JS Design patterns into practice

> Publisher/Subscriber pattern (PubSub)

Often called the "Pub/Sub" pattern, this pattern allow us to reduce the coupling between different parts of our application by allowing components to communicate without direct dependencies.

That means that the pattern allow us to create modules that don't dependend on each other but that can communicate directly. 
In small applications it can be very beneficial but is hard to maintain in largest applications because is confuse to follow modules without dependencies.

To fully respect the contract with the pubsub pattern we should provide a way to unsubscribe or dispose a subscriber, usually it is simple provided in the subscribe method

**Features**

* Allow modules to cominicate without hard dependencies
* Great for decoupling
* Very common in Javascript
* Easy to overuse


**Summary**

* Consist of a collection of objects, a factory, and a client that requires instances of the object
* Client controls the process, but is decoupled from the actual construction
* Easy to extend with new types of objects

