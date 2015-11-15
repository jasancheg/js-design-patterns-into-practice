# JS Design patterns into practice

> The Chain of Responsibility Pattern

Does your application have input that should be handled in a different way depending on the type of the input? The Chain of Responsibility pattern can free us from the anti-pattern of gigantic if...else conditional blocks. To start, the input is passed to the first handle. Can the first handler handle the data? If not, then pass the data to the next handler, and so on.

This pattern features a request sender in a series of one or more handlers that form a chain, the request sender passes the request or command to the first handler in the chain but if it can't do anything more with it, it passes the request to the next handler in the chain. Another variation of the pattern is that one handler can handle all the request before passes to the next handler in the chain. The propose of this pattern is to decouple the request sender from the request handler. This pattern is not the most popular in Javascript but is great for decouple and we can considerate as a good exercise on Object Oriented JavaScript.

**Features**

* Features a request serder
* And one or more request handlers that form a chain
* Request sender passes request to first handler
* First handler passes it to the next handler
* One handler may handle the request, or all
* Propose is to decouple request sender form the request handler
* Not commonly seen in JavaScript


**Summary**

* Looked at the chain of responsibility pattern
* Useful when we have a lots of objects that need to be handled differently
* Great for loose coupling
* Easy to extend