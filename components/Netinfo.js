import React from 'react'
import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import Pusher from 'pusher-js/react-native';




const Netinfo = () => {

    NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
    });

    const pusher = new Pusher("959108219678a5d6f07d", {
        cluster: "eu",
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
        alert(JSON.stringify(data));
    });

    return (
        <View>
            <Text>netinfo</Text>
        </View>
    )
}

export default Netinfo
