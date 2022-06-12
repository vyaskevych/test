import Player from '@vimeo/player'
//var Player = require('@vimeo/player').default

//var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const videoStorage = 'videoplayer-current-time'

player.setCurrentTime(localStorage.getItem(videoStorage))

player.on('play', function () {
    console.log('played the video!');
});

player.on('timeupdate', throttle(function (e) {
    //console.log('event', e);
    localStorage.setItem(videoStorage, e.seconds)
}, 1000));

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});
