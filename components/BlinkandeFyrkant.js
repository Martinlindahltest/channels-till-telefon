import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function BlinkandeFyrkant(props) {

    const styles = StyleSheet.create({
        red: {
            width: 150,
            height: 150,
            backgroundColor: props.color
        },
        blue: {
            width: 150,
            height: 150,
            backgroundColor: 'blue'
        }
    })


    return (
        <View style={styles.red}>
            <Text>
            </Text>
        </View>
    )
}


