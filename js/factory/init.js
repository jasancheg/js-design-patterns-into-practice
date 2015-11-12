define(function (require) {
    'use strict';

    return {
        init: function () {

            var myVideo, 
                myImage,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                length: 4.8,
                name: 'My video'
            });

            myImage = mediaFactory.createMedia('Image', {
                width: 250,
                height: 250,
                name: 'My image'
            });

            console.log(myVideo);
            console.log(myImage);
        }
    };
});