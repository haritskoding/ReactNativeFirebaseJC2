import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    ScrollView
} from 'react-native'
import ButtonAdd from '../Components/ButtonAdd';
import ShowMap from './ShowMap';
// import RNPickerSelect from 'react-native-picker-select';

const AddUser = () => {


    const [gender, setGender] = useState("Male");
    const [status, setStatus] = useState("Single");

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.judul}>ini list user</Text>
                <Text style={styles.subJudul}>&copy; Teguh Aris</Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Nama</Text>
                    <TextInput placeholder="Masukan nama anda" style={styles.input} />
                    <Text style={styles.label}>Gender</Text>
                    <Picker
                        selectedValue={gender}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                    <Text style={styles.label}>Umur</Text>
                    <TextInput placeholder="Masukan nama anda" style={styles.input} />
                    <Text style={styles.label}>Status</Text>
                    <Picker
                        selectedValue={status}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                    >
                        <Picker.Item label="Single" value="single" />
                        <Picker.Item label="Married" value="married" />
                    </Picker>
                    <ShowMap />
                    <ButtonAdd title="Tambah" />
                </View>

            </View>
        </ScrollView>
    )
}

export default AddUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 28,
        marginLeft: 115,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subJudul: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 115,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 10,
        marginLeft: 30,
    },
    input: {
        borderWidth: 2,
        width: "80%",
        borderRadius: 10,
        marginTop: 5,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    label: {
        marginTop: 12
    }
})
