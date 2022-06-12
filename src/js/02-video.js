import Player from '@vimeo/player';
//import throttle from "lodash/throttle";
import throttle from 'lodash.throttle'

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play', () => console.log('played the video!'));

player.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);

const catcher = localStorage.getItem('videoplayer-current-time');
if (catcher !== null) {
  player.setCurrentTime(catcher);
  localStorage.removeItem('videoplayer-current-time');
}
