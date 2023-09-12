import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { Box, Icon, Input } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";

type PropsComponents = {
    User: string;
    HandleUser: void;

    passWord: string;
    PassWord: void; 
} 

const InputsLogin = (props: PropsComponents) => {
   
    return(
        <Box style={styles.inputsContainer}>  
            <Input
            value={props.User} 
            onChangeText={() => props.HandleUser} 
            style={styles.inputs} 
            InputLeftElement={
                <Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="muted.400" marginRight='2%' />}
            />
            <Input
            value={props.passWord}
            onChangeText={() => props.PassWord}
            InputLeftElement={
                <Icon as={<MaterialIcons name="lock" />} size={7} ml="2" color="muted.400" marginRight='2%' />}
            style={styles.inputs}
            secureTextEntry={true}/>
        </Box>
        )
    }
    export default InputsLogin;

const styles = StyleSheet.create({
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        height: '60%',
        width: '100%',
        gap: 50
    },
    inputs: {
        width: '70%',
        height: '100%',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#42707A',
        borderRadius: 5,
        color: 'white'
    }
})




