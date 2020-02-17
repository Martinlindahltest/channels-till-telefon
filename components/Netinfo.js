import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import BlinkandeFyrkant from './BlinkandeFyrkant';
import channel from './Connect'





const Netinfo = () => {

    const [farg, setFarg] = useState('red');
    const [data, setData] = useState('vetej');

    channel.bind('my-event', function (data) {

        setFarg(data.name)

    });

    return (
        <View>

            <Text>netinfo</Text>

            <BlinkandeFyrkant color={farg} />
            <Button
                title="Press me"
                onPress={() => setFarg('red')}
            />

        </View>
    )
}

export default Netinfo
