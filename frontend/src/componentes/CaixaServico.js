import { ENDERECO_API } from "../../config";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

// criação de um componente
const CaixaServico = (item) => {

  // const cb = props.quandoClicar;

  const navigation = useNavigation()
  const [imagemServico, setImagemServico] = useState(null)

  useEffect(() => {
    setImagemServico(item.item.imagem)
  }, [])

  const Pressionar = () => {
    console.log('Serviço clicado: ' + item.item.FK_Profissionais_Servicos)
    const fkServico = item.item.FK_Profissionais_Servicos
    console.log(fkServico)
    navigation.navigate('PerfilProfissional', { fkServico })
  }

  return (
    <TouchableOpacity onPress={Pressionar}>
      <View style={styles.fundo}>
        <View style={styles.fundoimagem}>
          {
            imagemServico ?
              <Image
                source={{ uri: `${ENDERECO_API}/${imagemServico.replace('public\\uploads', '/uploads')}` }}
                style={styles.imagem} />
              :
              <Image
                source={require('../../assets/imagem1.png')}
                style={styles.imagem} />
          }
        </View>
        <View style={styles.fundonome}>
          <Text style={styles.texto}>
            {item.item.titulo}
          </Text>
          <Text style={styles.texto}>
            R$ {item.item.preco.replace('.', ',')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  fundo: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: '2%',
    flex: 1,
    marginBottom: 15,
    width: 185,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fundoimagem: {
    alignItems: 'center'
  },
  textocampo: {
    fontSize: 32,
  },
  fundonome: {
    width: '100%',
    backgroundColor: '#9a6b99',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  imagem: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    padding: 10
  },
  textopreco: {
    fontSize: 18,
    color: 'white',
    padding: 10
  }
})

export default CaixaServico