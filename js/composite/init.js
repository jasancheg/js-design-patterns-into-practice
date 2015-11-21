define(function (require) {
    'use strict';

    return {
        /**
         * Method purpose is to expose the logic for the current design pattern
         */
        init: function () {
            // load node class
            var Node = require('composite/node'),
                // create some nodes
                root = new Node('Fred'),
                child1 = new Node('John'),
                child2 = new Node('Jane'),
                child3 = new Node('Jack'),
                child4 = new Node('Jill'),
                child5 = new Node('James'),
                child6 = new Node('Jess');

            // ! All node are created in the exact same way, there is nothing 
            // ! special happening to differentiate leaf nodes from containers nodes
            
            // Build the tree
            root.addChild(child1);
            root.addChild(child2);
            // set some containers nodes
            child2.addChild(child3);
            child2.addChild(child4);
            child4.addChild(child5);
            child5.addChild(child6);

            // ! child6 will be the depest leaf node
            // ! At this point we can start our own node and try to traverse down
            
            // if we start at the root node we should see the entire tree
            //root.traverseDown();
            
            // if we try to traverse down from a leaf node, 
            // we'll just see a message that the node is a leaf
            //child6.traverseDown();
            
            // we can start out at leaf node and traverse up trough the tree
            //child6.traverseUp();
            
            // if we start at the root node we'll just see 
            // a message that the root is the root 
            root.traverseUp();
        }

    };

});