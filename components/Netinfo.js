import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import Pusher from 'pusher-js/react-native';
import BlinkandeFyrkant from './BlinkandeFyrkant';




const Netinfo = () => {

    const [farg, setFarg] = useState('red');

    NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
    });

    const pusher = new Pusher("959108219678a5d6f07d", {
        cluster: "eu",
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
        //  alert(JSON.stringify(data));
        setFarg('blue')
    });

    return (
        <View>
            <Text>netinfo</Text>
            <BlinkandeFyrkant color={farg} />
        </View>
    )
}

export default Netinfo
