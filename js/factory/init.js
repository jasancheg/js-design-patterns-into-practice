define(function (require) {
    'use strict';

    return {
        init: function () {

            var myVideo,
                myImage,
                MediaFactory = require('factory/mediaFactory');

            myVideo = MediaFactory.createMedia('Video', {
                length: 4.8,
                name: 'My video'
            });

            myImage = MediaFactory.createMedia('Image', {
                width: 250,
                height: 250,
                name: 'My Image'
            });

            console.log(myVideo);
            console.log(myImage);
        }
    };
});