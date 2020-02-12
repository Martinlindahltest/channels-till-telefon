import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BlinkandeFyrkant(props) {

    const styles = StyleSheet.create({
        red: {

            width: '100%',
            height: '90%',
            backgroundColor: props.color,
        }
    })

    return (
        <View style={styles.red}>
        </View>
    )
}


