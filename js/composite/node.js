define(function () {
    'use strict';

    /**
     * Simple constructor
     * `name` param is set as property, each node also has
     * a children property wich starts out as an empty array,
     * and a parent property that starts out with a null value
     * @param {[string]} name [Person instance name]
     */
    var Person = function (name) {
        this.name = name;
        this.children = [];
        this.parent = null;
    };

    /**
     * Accepts a node and pushes this into
     * the object's children property
     * @param {[node]} child [node to be pushed]
     */
    Person.prototype.addChild = function (child) {
        this.children.push(child);
        // we can also create a reciprocal link
        // by setting the current object as the
        // parent of the child passed to the method
        // This will be useful for allowing us to
        // traverse both up or down the tree
        child.parent = this;
    };

    /**
     * Method to traverse up
     * It does not need to received any arguments
     */
    Person.prototype.traverseUp = function () {
        // first check if the current object has a parent object
        if (this.parent) {
            console.log(this.name + ' is the child of ' + this.parent.name);
            // invoke the traverseUp method but of the parent
            this.parent.traverseUp();
        } else {
            // if there are no parents, we know that this is the root node
            console.log(this.name + ' is the root node');
        }
    };

    /**
     * Method to traverse down
     * It does not need to received any arguments
     */
    Person.prototype.traverseDown = function () {
        // check whether there are children
        if (this.children.length) {
            // if there are we need to iterate through the childre collection
            // we should also set the context for the forEach method so that 
            // inside the handler this stil refers to the current person object
            this.children.forEach(function (child) {
                console.log(this.name + ' is the parent of ' + child.name);
                // invoke the traverseDown method on the child
                child.traverseDown();
            }, this);
        } else {
            // if there are no childs, we know that this is the leaf node
            console.log(this.name + ' is a leaf node');
        }
    };

    // return the constructor
    return Person;
});