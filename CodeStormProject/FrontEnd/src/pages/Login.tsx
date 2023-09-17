import React, { useState } from "react";
import { StyleSheet, Dimensions, Text } from 'react-native'
import ButtonLogin from "../components/ButtonLogin";
import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, Box, } from "native-base";
import InputsLogin from "../components/InputLogin";
import TituloDoProduto from "../components/TituloDoProduto";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const navigation = useNavigation();


    const [name, setName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [user,setUser] = useState('')

    const submit = async () => {
       const postData = await axios.post(`http://10.0.0.109:4516/api/post`, {name,password})
       await AsyncStorage.setItem('account', password)
        
      if (postData) {
        navigation.dispatch(
            CommonActions.reset({
             index: 0,
             routes: [{ name: 'Home' }]
            })
         )
      } 

        }

    return (
        <NativeBaseProvider>
        <Box style={styles.container}>
          <TituloDoProduto />
          <Box style={styles.form}>
            <InputsLogin
             icon="person"
             placeHolder="Usuário"
             onChangeText={value => setName(value as string)}
            />
            <InputsLogin
             icon="lock"
             placeHolder="Senha"
             onChangeText={value => setPassword(value as string)}
            />
        <Text>{user}</Text>
            <ButtonLogin loading={false} onClick={submit} />
          </Box>

        </Box>

        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16292E',
        gap: 20
    },
    form: {
        height: Dimensions.get('window').height / 2.5,
        width: '70%',
        borderRadius: 5,
        gap: 40
    },
})