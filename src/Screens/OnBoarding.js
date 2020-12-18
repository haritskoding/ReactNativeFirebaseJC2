import React from 'react'
import {
    StyleSheet,
    Image,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
// import Button from '../Components/Button'

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,

            }}
        />
    )
}

const Skip = ({ ...props }) => (
    <Button
        title="Skip"
        color="#000000"
    />
)

const Next = ({ ...props }) => (
    <Button
        title="Next"
        color="#000000"
    />
);

const Selesai = ({ ...props }) => (
    <TouchableOpacity
        title="Selesai"
        color="#000000"
        {...props}
    >
        <Text style={{ fontSize: 16, marginRight: 6 }}>Selesai</Text>
    </TouchableOpacity>
)

const OnBoarding = ({ navigation }) => {
    return (
        <Onboarding
            // SkipButtonComponent={Skip}
            // NextButtonComponent={Next}
            DoneButtonComponent={Selesai}
            onSkip={() => navigation.navigate("AddUser")}
            onDone={() => navigation.replace("AddUser")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Selamat Datang',
                    subtitle: 'Aplikasi ini dibuat oleh teguh m harits',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Pelajari Sepenuhnya',
                    subtitle: 'Sekarang Beli cupang tinggal Tap doang',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Karya Anak Bangsa',
                    subtitle: 'Aplikasi ini dibuat oleh Teguh Aris dari Indonesia Tekan ceklis',
                },
            ]}
        />
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
