# JS Design patterns into practice

> The Composite Pattern

The Composite pattern allows us to treat single objects or collections of objects in the same way, without knowing beforehand whether the node we are interacting with is a leaf node or a container.

It is used in order to treat single objects or collections of objects in the same way. A great example of the composite pattern is how in jQuery many methods are called on objects that may contain a single element on the page or multiple elements. We don't need to know beforehand.
Compositions are use to create nested structures of nodes, where a node may be a single node or a container of one or more single nodes. Like the visual representation of files and folders in a file system. The ability to iterate through the composite starting from any node and traversing up the tree is usually implicit.

**Features**

* Treat single objects or collections of objects in the same way
* Used to create nested structures of nodes
* Anode may be a leaf or a container
* Traversal of the tree is usually implicit 


**About the example logic**

* Let's build a simple family tree
* The tree will be a composite built from people objects
* Children with no descendents of the leaf nodes whereas children with other children are the containers


**Summary**

* 