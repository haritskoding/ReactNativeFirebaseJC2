import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({ title, onPress, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {

    },
    text: {
        fontSize: 18,
        color: "black",
        marginHorizontal: 5
    }
})
