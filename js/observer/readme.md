# JS Design patterns into practice

> Observer pattern

Similar to pub/sub, the Observer pattern allows us to observe an object, and react when it changes. Frameworks such as KnockoutJS take observing to the maximum, but we can use a much simpler implementation to facilitate communication between different entities in our applications.

**Features**

* Closely related to pubsub
* Subtly different
* Observers sibscribe directly to the object being observed
* Useful for docoupling 
* Very commonly used in JavasCript
* It's the subject's resposability to maintain the list of the observers
* API should include methods for observing, unobserving and notifying


**Summary**

* Similar to the pubSub pattern
* Observe are coupled to the subject
* some coupling is ok
* Avoid unnecessary, unintentional or excessive coupling