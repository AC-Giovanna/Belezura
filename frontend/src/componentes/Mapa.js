import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MarcadorPessoal from './EstiloMarcadorMapa';
import axios from 'axios';

const MapaExpo = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marcadores, setMarcadores] = useState([]);

    /*
    Criar um estado para os marcadores
    Chamar informaçõe dos marcadores com o axios
    Passar informações para uma flatlist
    Percorrer flatlist e adicionar marcadores
    */

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location.coords)
        })();
    }, []);

    let text = 'Buscando localização..';

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    // useEffect(() => {
    //     async function fetchMarcadores() {
    //       try {
    //         const response = await axios.get('http://192.168.1.3:3000/listarEndereco');
    //         setMarcadores(response.data);
    //         console.log(marcadores);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    //     fetchMarcadores();
    //   }, []);

    return (
        <View style={styles.tela}>
            {/* <Text>{text}</Text> */}
            {
                location &&
                <MapView
                    style={{ width: 350, height: 300}}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.00922,
                        longitudeDelta: 0.00421
                    }}
                >

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        onPress={console.log("coordinate")}
                    >
                        <MarcadorPessoal/>
                    </Marker>
                </MapView>
            }
        </View>
    );
}

const styles = StyleSheet.create({

    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MapaExpo