import NetInfo from '@react-native-community/netinfo';
import Pusher from 'pusher-js/react-native';



const pusher = new Pusher("959108219678a5d6f07d", {
    cluster: "eu",
});

var channel = pusher.subscribe('my-channel');





module.exports = channel;