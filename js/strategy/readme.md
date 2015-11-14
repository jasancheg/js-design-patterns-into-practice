# JS Design patterns into practice

> Strategy pattern

The Strategy pattern allows us to follow a different code path, or strategy, at run-time depending on the input data.

Allow us very particular behaviours and this behaviours are the strategies that we can select on run time.
A great practice in software development is to encapsulate variations, so whenever to think in variations, this pattern will be useful.  
For this example lets implement some different strategies depending on what we need to validate.

**Features**

* Allow a behaviour to be selected at run time (this is very particular)
* The different behaviours are the strategies
* Easy to implement, but not as common as some other patterns (as pubsub for example)
* Useful when we have lots of behaviours and we don't know which one will be used

**Notes**

* The main strategy does not know nothing about any of on the line coming concrete strategies
* And the concrete strategies does not know nothing about other strategies
* This makes very easy to include new strategies in the future without need to modify other strategies or the main strategy.

**Summary**

* Select a code path at run time