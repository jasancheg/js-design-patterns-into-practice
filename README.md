# JS Design patterns into practice

> Some common Javascript patterns

Design patterns are reusable solutions to commonly occurring problems in software design. They are both exciting and a fascinating topic to explore in any programming language. Design patterns also provide us a common vocabulary to describe solutions. This can be significantly simpler than describing syntax and semantics when we're attempting to convey a way of structuring a solution in code form to others.

A design pattern is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

I created this course as part of a series of small tutorials taught in my workplace. The repository contains an code example of each of the design patterns discussed in the course "Common Javascript patterns" 

**Features**

* AMD (RequireJS)

## JS Patterns

**Creational Design Patterns**

1. The Factory Pattern

**Structural Patterns**

1. The Adapter Pattern
2. The Proxy Pattern
3. The Facade Pattern
4. The Decorator Pattern
5. The Composite Pattern

**Behavioural Patterns**

1. The Chain of Responsibility Pattern
2. The Mediator Pattern
3. The Iterator Pattern
4. The Publisher/Subscriber Pattern
5. The Strategy Pattern
6. The Observer Pattern

## Instructions

1. Clone repository to your machine `git clone https://github.com/jasancheg/js-design-patterns-into-practice.git`
2. Run `cd js-design-patterns-into-practice`
3. Run `bower install`
4. Open index.html in your browser and open the browser's console
5. Use the global runExample() method to run one of the examples
    `runExample('factory')`

Valid example names (to be passed as a string to the runExample() function) are:

| Name | example |
| :------- | :---- |
|`factory` | runExample('factory') |
|`iterator`| runExample('iterator') |
|`pubsub` | runExample('pubsub') |
| `facade`| runExample('facade') |
|`strategy` | runExample('strategy') |
| `decorator`| runExample('decorator') |
|`observer` | runExample('observer') |
| `adapter` | runExample('adapter') |
|`cor` | runExample('cor') |
| `composite` | runExample('composite') |
|`mediator` | runExample('mediator') |
| `proxy` | runExample('proxy') |


## How to use

*. Use the global runExample() method to run one of the examples
    `runExample('factory')`

![](https://raw.githubusercontent.com/jasancheg/js-design-patterns-into-practice/master/img/2015-11-14_1247.png)

## References

* [JavaScript Design patterns by Addy Osmani ](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)
* [Dan Wellman Repo](https://github.com/danwellman)

## License

MIT © [Jose Antonio Sanchez](https://github.com/jasancheg)