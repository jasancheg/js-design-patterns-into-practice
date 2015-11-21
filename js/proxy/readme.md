# JS Design patterns into practice

> The Proxy Pattern

The Proxy pattern is useful when we want to query an object which may or may not yet be available. The proxy can intercept requests for the object and initialize the object on behalf of clients.

The proxy pattern uses one object as an interface to another object. It sits between users or clients of the object and te object itself so that clients make requests to the proxy and the proxy makes request to the object. The clients may or may not know whether they are dealing with the proxy or the original object. The proxy acts as guardian to the original object and controls requests to it. So this pattern is often used for perfomance reasons. If the object needs to make expensive requests, such as HTTP requests, we may batch requests together in the proxy in order to send fewer requests to the original object. The proxy may even include a cache that stores requests for future reuse. Another use for a proxy is to delay the instantiation of a slow or resource intensive object.

We might need to use this object somtimes in our application, but it's better for performance if we delay the initialization until we definitely need it.

**Features**

* Use one object as the interface for another object
* Sits between clients and the object being proxied
* Clients may or may not know if they are using the proxy
* May throttle requests to the object
* Or delay initialization of the object


**The example logic**

In this case, we can have a proxy that receives the request for the object and in this case we know that we definitely need to use the object so we can have the proxy initialize it and proxy requests through to it. This kind of proxy can be considered a just in time proxy.

Let's base the example:




**Summary**

* 