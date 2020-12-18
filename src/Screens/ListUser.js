import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'

const ListUser = () => {
    let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png' };

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginTop: 12 }}>
                        <Image
                            style={{ height: 100, width: 100, resizeMode: 'stretch', margin: 5 }}
                            source={Image_Http_URL} />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 12 }}>
                        <Text>Teguh  Harits</Text>
                        <Text>Pria / 23 tahun</Text>
                        <View style={{ marginTop: 40, marginLeft: 100 }}>
                            <Text style={styles.maritalStatus}>Single</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => Alert.alert('apakabar')}
                        style={{
                            backgroundColor: 'green',
                            marginLeft: 2,
                            padding: 5,
                            paddingVertical: 8,
                            height: 40
                        }}>
                        <Text style={{ fontSize: 16, color: 'white' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ListUser

const styles = StyleSheet.create({

    list: {
        width: "90%",
        padding: 12,
        marginLeft: 15,
        paddingHorizontal: 15,
        backgroundColor: 'salmon',
        marginTop: 15,
        borderRadius: 10,
        paddingRight: 0,
        paddingTop: 0,
        overflow: 'hidden'
    },
    maritalStatus: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    }
})
