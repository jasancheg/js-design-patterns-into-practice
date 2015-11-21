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
     * @return {[type]} [description]
     */
    Person.prototype.traverseUp = function () {
        if (this.parent) {
            console.log(this.name + ' is the child of ' + this.parent.name);
            this.parent.traverseUp();
        } else {
            console.log(this.name + ' is the root node');
        }
    };

    Person.prototype.traverseDown = function () {
        if (this.children.length) {
            this.children.forEach(function (child) {
                console.log(this.name + ' is the parent of ' + child.name);
                child.traverseDown();
            }, this);
        } else {
            console.log(this.name + ' is a leaf node');
        }
    };

    return Person;
});