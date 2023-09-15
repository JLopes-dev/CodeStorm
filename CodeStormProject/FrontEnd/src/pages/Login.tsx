import React, { useState } from "react"; 
import { StyleSheet, Dimensions } from 'react-native'
import ButtonLogin from "../components/ButtonLogin";
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import { NativeBaseProvider, Box,} from "native-base";
import axios from "axios";
import InputsLogin from "../components/InputLogin";
import TituloDoProduto from "../components/TituloDoProduto";

export default function Login() {
    const [user, setUser] = useState(" ")
    const [passWord, setPassWord] = useState(" ")
    const navigation = useNavigation();
    function Submit() {

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            })
        )

        axios.post('https://localhost:4516/api/post', (data: object) => {

        }).then((data) => JSON.stringify(data))
        .catch((err) => console.warn(err))
    } 
    
    const handleUser = (e: string) => {
        setUser(e)
    }
    const handlePassWord = (e: string) => {
        setPassWord(e)
}
    return(
        <NativeBaseProvider>
        <Box style={styles.container}>
            <TituloDoProduto />
            <Box style={styles.form}>
                <InputsLogin 
                 icon="person"
                 valor={user}
                 placeHolder="Usuário"
                 onChangeText={(e) => setUser(e)}/>
                
                <InputsLogin
                icon="lock"
                valor={passWord}
                placeHolder="Senha"
                onChangeText={(e) => setPassWord(e)}
                />
                <ButtonLogin loading={false} onClick={Submit}/>
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