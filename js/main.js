/**
 * Main module
 */
require(
    [],
    function () {
        'use strict';

        var examplesList = {
            //
        };

        window.runExample = function (name) {
            examplesList[name].init();
        };
    }
);