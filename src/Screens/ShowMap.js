import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

const initialState = {
    latitude: 6.2088,
    longitude: 106.8456,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421

}

const ShowMap = () => {

    const [currentPosition, setCurrentPosition] = useState(initialState);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         // alert(JSON.stringify(position))
    //         let { latitude, longitude } = position.coords;

    //         setCurrentPosition({
    //             ...currentPosition,
    //             latitude,
    //             longitude
    //         })
    //     }, err => alert(err.message), {
    //         timeout: 20000, maximumAge: 1000
    //     })
    // }, [])

    // return currentPosition.latitude ? (
    //     <>
    //         <View>
    //             <Text>Jakarta</Text>
    //         </View>
    //         <MapView
    //             provider={PROVIDER_GOOGLE}
    //             style={styles.container}
    //             initialRegion={currentPosition}
    //         />

    //     </>
    // ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />

    return (
        <View style={styles.conMap}>
            <View style={{ marginBottom: 10 }}>
                <View style={{ 'flexDirection': 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text>Latitude</Text>
                        <TextInput placeholder="masukan latitude" style={styles.input} />
                    </View>
                    <View>
                        <Text>Longitude</Text>
                        <TextInput placeholder="masukan longitude" style={styles.input} />
                    </View>
                </View>

            </View>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={currentPosition}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    conMap: {
        width: '80%',

    },
    map: {
        height: 150
    },
    input: {
        width: 126,
        padding: 5,
        borderRadius: 3,
        borderWidth: 1
    }

})

export default ShowMap

// import React, { Component } from 'react'
// import { Text, View } from 'react-native'
// import MapView, { Marker } from 'react-native-maps'

// export class ShowMap extends Component {

//     state = {
//         markers: []
//     }

//     getInitialState() {
//         return {
//             region: {
//                 latitude: 37.78825,
//                 longitude: -122.4324,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             },
//         };
//     }

//     onRegionChange(region) {
//         this.setState({ region });
//     }


//     render() {



//         return (
//             <View>
//                 <Text> textInComponent </Text>
//                 <MapView
//                     initialRegion={{
//                         latitude: 37.78825,
//                         longitude: -122.4324,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     {this.state.markers.map((marker, index) => (
//                         <Marker
//                             key={index}
//                             coordinate={marker.latlng}
//                             title={marker.title}
//                             description={marker.description}
//                         />
//                     ))}
//                 </MapView>
//             </View>
//         )
//     }
// }

// export default ShowMap
