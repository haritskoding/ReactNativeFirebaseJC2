import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'
import ListUser from './ListUser'

const ListScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation} />
            <ListUser />
            <ListUser />

        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
