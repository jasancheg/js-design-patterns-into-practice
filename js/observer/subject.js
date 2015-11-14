define(function (require) {
    'use strict';

    var Observers = require('observer/observers');

    /**
     * The constructor
     * @param {[array]} items [list of observers]
     */
    var Collection = function (items) {
        this.observers = new Observers();
        this.collection = items || [];
    };

    /**
     * add observer to list
     * @param  {[observer]} observer
     */
    Collection.prototype.observe = function (observer) {
        this.observers.add(observer);
    };

    /**
     * remove observe
     * @param  {[observer]} observer
     */
    Collection.prototype.unObserve = function (observer) {
        this.observers.remove(observer);
    };

    /**
     * notify to each observer
     * @param  {[string]} event
     * @param  {[object]} data
     */
    Collection.prototype.notify = function (event, data) {
        this.observers.get().forEach(function (observer) {
            observer.notify(event, data);
        });
    };

    /**
     * add item to collection
     * @param {[type]} item
     */
    Collection.prototype.add = function (item) {
        this.collection.push(item);
        this.notify('added', item);
    };

    /**
     * remove item from collection
     * @param  {[type]} itemToRemove
     */
    Collection.prototype.remove = function (itemToRemove) {
        this.collection = this.collection.filter(function (item) {
            if (item !== itemToRemove) {
                return true;
            }
            this.notify('removed', item);
            return false;
        }, this);
    };

    // return the constructor
    return Collection;
});