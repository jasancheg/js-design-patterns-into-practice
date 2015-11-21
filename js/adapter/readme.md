# JS Design patterns into practice

> The Adapter Pattern

We all know that a public API should never change once it's been released. But that doesn't mean it doesn't ever happen. With the Adapter pattern, we can make as many changes to our API internally as we wish, and have the public interface adapted to the internal API.

This pattern is used to convert one interface into another. In JavaScript an interface is the methods and properties exposed by an object, the things that we use to interact with it. This pattern is useful when something changes and we don't  want to have to go through our entire code base in order to update how the rest of the code uses the thing that is changed. An adapter isn't always suitable and if the thing being changed isn't widely used throughout your application it maybe just as easy to refactor any code that does use it, as it would be to create the adapter in the first place.

**Features**

* Convert one interface onto another
* An object's interface is its properties and methods
* Used to avoid extensive refactoring when a dependency changes
* Use only when necessary

**About the example logic**

In the example we are using the module just in one place, but in reality we could be using this guy all over our code base and might even be a module provided by a third party, or vendor, or something that we can't or don't want to update directly.
We have two interface, so we can refactor everything to use the NewInterface or, if that's a pretty big task, we can create an adapter instead, so that we only have to make minimal changes to our existing code. The adapter is almost the only new code that we need to write.

**Summary**

* Used to adapt one interface to another
* Can prevent changes in one place affecting other code
