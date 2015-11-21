# JS Design patterns into practice

> The Decorator Pattern

The Decorator pattern is used to extend an object with different behaviours, with the ability to build up the functionality of an object with multiple decorators. 

This is a structural pattern that is used to add new functionality to an existing object. In Javascript, we can add properties or methods to objects whenever we want. But the decorator pattern still has its uses in minimizing the number of subclasses we might need to use for our application. We might have a simple base class that we need to derive a lots of objects from. Some might need some behaviors, and others might need different behaviors, and maybe a few might not need any extra behaviors at all. We could create a different subclass for every possible combination of behaviors. But when we start to get a lot of variation, the number of different subclasses to maintain can grow exponentially. In this situation it might be easier to create decorators for and the apply these to our objects as required.


**Features**

* Add new functionality to existing objects
* Used in Javascript as alternative to subclassing

** The example logic**

* We have a basic user class which represents a member of staff at an organization
* All users have read access to public material, but only executive users have access to confidential material.
* Admins also nedd right access to the material

Even with just these few requeriments if we down the subclassing roots, we'll need quite a few different subclasses. And each time a new requirement is added we'll need to add more. So for the example let's use decorators instead.

**Summary**

* 