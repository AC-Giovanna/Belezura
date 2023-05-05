import React, { useState, useEffect } from 'react';
import { StyleSheet, RefreshControl, SafeAreaView, ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import BarCategoria from '../componentes/BarCategoria';
import PerfisFav from '../componentes/PerfisFav';
import Carrosel from '../componentes/Carrosel';
import axios from 'axios';
import CaixaServico from '../componentes/CaixaServico';

const TelaProfissionais = ({navigation}) => {

    const idUsuario = navigation.params;
    
    console.log(idUsuario)

    const [servicos, setServicos] = useState([])

    const [navegar, setNavegar] = useState(false)

    useEffect(() => {
        axios.get('http://10.0.1.101:3000/listarServicos')
        .then(function (response) {
            setServicos(response.data)
            console.log(servicos.data)
            console.log(idUsuario)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);


    return (
        navegar === true ?
        <PerfilProfissional quandoClicar={botaoClicado}/>
        :
        <View style={{flex: 1}}>

            <BarCategoria/>
                <SafeAreaView style={styles.tela1}>
                    <ScrollView style={styles.tela2}>

                    <ScrollView horizontal>
                        <Carrosel/>
                        <Carrosel/>
                        <Carrosel/>
                        <Carrosel/>
                    </ScrollView>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Perfis Favoritos</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text> 
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view2}>
                            <ScrollView horizontal>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                                <PerfisFav/>
                            </ScrollView>
                    </View>

                    <View style={styles.view3}>
                        <Text style={styles.texto}>Recomendações</Text>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Ver Todos</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view}>
                    <FlatList
                            horizontal={true}
                            data={servicos.data}
                            renderItem={({item}) => <CaixaServico campo={(item.Titulo)} />}
                            keyExtractor={item => item.ID_Servico}
                        />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    tela1: {
        flex: 1,
        alignContent: 'center'
    },
    tela2: {
        flex: 1
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15
    },
    texto2: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        textDecorationLine: 'underline',
    },
    textodestaque: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    view: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    view2: {
        flexDirection: 'row'
    },
    view3: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    boxperfil: {
        flex: 1,
    }
})

export default TelaProfissionais