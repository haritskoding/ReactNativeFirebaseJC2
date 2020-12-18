import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title="Click Her"
                onPress={() => navigation.navigate("AddUser")}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
