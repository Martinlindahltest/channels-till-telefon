import React from 'react'
import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo';



const Netinfo = () => {

    NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
    });

    return (
        <View>
            <Text>netinfo</Text>
        </View>
    )
}

export default Netinfo
