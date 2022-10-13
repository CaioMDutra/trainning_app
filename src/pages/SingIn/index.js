import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function SingIn() {
const navigation = useNavigation(); 

 return (
   <View style={styles.counteiner}>
    <Animatable.View animation="fadeInLeft" delay={650} style={styles.counteinerHeader}>
    <Text style={styles.welcome}>Bem vindo(a)</Text>
    </Animatable.View>

    <Animatable.View animation="fadeInUp" style={styles.counteinerForm}>
      <Text style={styles.title}>Email</Text>
      <TextInput style={styles.input} placeholder='digite seu email'></TextInput>

      <Text style={styles.title}>Senha</Text>
      <TextInput style={styles.input} placeholder='digite sua senha'></TextInput>

      <TouchableOpacity        
       style={styles.buttom}
       onPress={()=> navigation.navigate('Treinos')}
       >
      <Text style={styles.buttomText}>Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttomRegister}>
      <Text style={styles.registerText}>Criar conta</Text>
    </TouchableOpacity>

    </Animatable.View>

    


   </View>
  );
}

const styles = StyleSheet.create({
  counteiner:{
    flex: 1,
    backgroundColor: '#FFD700',
  },
  counteinerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  welcome:{
    fontSize: 28,
    fontWeight: "bold",
    color:"#000"
  },
  counteinerForm:{
    backgroundColor:"#C0C0C0",
    flex:1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: '5%'
  },
  title:{
    fontWeight:"bold",
    color: "#000",
    fontSize: 20,
    marginTop: 28,
  }, 
  input:{    
    borderBottomWidth: 1,
    height: 40,
    marginBottom:12,
    fontSize: 16,
  },
  buttom:{
    backgroundColor:"#FFD700",
    width: "100%",
    borderRadius:8,
    paddingVertical:8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center"

  },
  buttomText:{
    color: "#000",
    fontSize:18,
    fontWeight:'bold'
  },
  buttomRegister:{
    marginTop:14,

  },
  registerText:{
    color:"#4F4F4F"
  }
  
})