import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BlinkandeFyrkant(props) {

    let farg = 'red'


    if (props.color.message.data === 128) {
        farg = 'black'
    }

    if (props.color.message.data === 144) {
        farg = 'white'
    }




    const styles = StyleSheet.create({
        red: {

            width: '100%',
            height: '90%',
            backgroundColor: farg,
        }
    })

    return (

        <View style={styles.red}>
            {/* {console.log('props i BF', props.color.message.data)
            } */}
        </View>
    )
}


