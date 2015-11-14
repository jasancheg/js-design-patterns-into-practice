# JS Design patterns into practice

> Publisher/Subscriber pattern (PubSub)

Often called the "Pub/Sub" pattern, this pattern allow us to reduce the coupling between different parts of our application by allowing components to communicate without direct dependencies.

That means that the pattern allow us to create modules that don't depend on each other but that can communicate directly. 
In small applications it can be very beneficial but is hard to maintain in largest applications because it is confusing to follow modules without dependencies.

To fully respect the contract with the pubsub pattern we must provide a way to unsubscribe or dispose a subscriber, usually it is provided in the subscribe method.

**Features**

* Allow modules to cominicate without hard dependencies
* Great for decoupling
* Very common in Javascript
* Easy to overuse

**Summary**

* communication takes place over a named channel
* Based on callbacks which are triggered when events occur
* Can pass data to callbacks
* A dispose method can be used to unsubscribe from events
* Main advantage of pubsub is loose coupling
* But that can obscure the relationships between the modules

