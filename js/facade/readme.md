# JS Design patterns into practice

> The Facade Pattern

The Facade pattern is well-suited for uniting disparate APIs into a single public-facing interface that connects with the other APIs behind the scenes. It's been in use in JavaScript for a long time, and you may have used it many times without even knowing it.

This is a structural pattern which simplifies the use of your API for consumers, it also have other benefits, such  as shielding you form becoming locked into a particular architecture. This pattern has been around for a long time in JavaScript. To ilustrate the general idea of the facade pattern let's put together a simple module that will process different JavaScript types in different ways.

**Features**

* A simple interface exposed publically to hide the complexity of the underlying system
* Conceals the implementation
* Structural pattern
* Shields developers from the effects of change to the subsystem
* In use in JavaScript for a long time


**Summary**

* Hides the complexity of an underlying system
* Present a simplified API to consumers
* Allows the subsystem to be changed without affecting consumers
