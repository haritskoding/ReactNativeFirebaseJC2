import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native'


const Header = ({ navigation }) => {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>5 Users</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("AddUser")}

                style={styles.add}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Add User</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        marginLeft: 15,
        marginRight: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 8
    },
    add: {
        backgroundColor: 'salmon',
        paddingHorizontal: 8,
        paddingVertical: 10
    }
})
