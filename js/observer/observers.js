define(function () {
    'use strict';

    /**
     * very simple constructor
     */
    var Observers = function () {
        this.observers = [];
    };

    /**
     * Add an observer is very simple
     * @param {[observer]} observer new observer
     */
    Observers.prototype.add = function (observer) {
        this.observers.push(observer);
    };

    //  
    /**
     * remove observer
     * @param  {[observer]} observerToRemove [observer to be exclude of the current array]
     * @return {[array]}                     [filter method removes the observer and returns a new array]
     */
    Observers.prototype.remove = function (observerToRemove) {
        this.observers = this.observers.filter(function (observer) {
            return observer !== observerToRemove;
        });
    };

    /**
     * get the obsrvers list
     * @return {[array]} observers list
     */
    Observers.prototype.get = function () {
        return this.observers;
    };

    // return the constructor
    return Observers;
});