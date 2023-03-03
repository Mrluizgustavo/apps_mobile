import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';


export default function App() {

    const[num1,setnum1]= useState('')
    const[num2,setnum2]= useState('')

    function soma(){
      const resultado = parseFloat(num1)+ parseFloat(num2);
      alert("O resultado é: "+resultado)

    }
    function subtracao(){
      const resultado = parseFloat(num1)- parseFloat(num2);
      alert("O resultado é: "+resultado)

    }
    function divisao(){
      const resultado = parseFloat(num1)/ parseFloat(num2);
      alert("O resultado é: "+resultado)

    }
    function multiplicacao(){
      const resultado = parseFloat(num1)* parseFloat(num2);
      alert("O resultado é: "+resultado)

    }

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> Calculadora </Text>
    <TextInput style={styles.input0} placeholder='digite um número...' keyboardType="numeric" onChangeText = {(num1)=> setnum1(num1)}/> 
    <TextInput style={styles.input1} placeholder='digite um número...' keyboardType= "numeric" onChangeText = {(num2)=> setnum2(num2)}/> 
    <View style={styles.view2}>
    <TouchableOpacity  style={styles.btn} onPress={soma} >
      <Text>+</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={subtracao} >
      <Text>-</Text>
    </TouchableOpacity>
    <TouchableOpacity  style={styles.btn} onPress={multiplicacao} >
      <Text>*</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={divisao} >
      <Text>/</Text>
    </TouchableOpacity>
    </View>

  
    </View>
  );
}

const styles = StyleSheet.create({

  btn: {
    backgroundColor: "#4F4F4F",
    padding: 10,
    width: 35,
    borderRadius: 20,
    textAlign: "Center",
    margin: 15,

  },

  view2: {
    flexDirection: "row",

  },


  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8,
  },

  titulo: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  input0:{
    backgroundColor: '#C0C0C0',
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    margin: 10,
    fontSize: 18,
  },

  input1:{
    backgroundColor: '#C0C0C0',
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    margin: 10,
    fontSize: 18,

  },

});
