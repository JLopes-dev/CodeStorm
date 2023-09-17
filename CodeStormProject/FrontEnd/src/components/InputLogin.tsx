import React from 'react';
import { StyleSheet } from 'react-native'
import { Box, Icon, Input } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";
type PropsComponents = {
    onChangeText: React.Dispatch<React.SetStateAction<string>>
    icon: 'person' | 'lock'
    placeHolder: string
} 

const InputsLogin = (props: PropsComponents) => {
   
    return(
        <Box style={styles.inputsContainer}>  
            <Input
            onChangeText={(e) => props.onChangeText(e)}
            placeholder={props.placeHolder}
            placeholderTextColor='white'
            style={styles.inputs} 
            InputLeftElement={
                <Icon as={<MaterialIcons name={props.icon} />} size={7} ml="2" color="muted.400" marginRight='2%' />}
            />
        </Box>
        )
    }

const styles = StyleSheet.create({
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        height: '15%',
        width: '100%',
    },
    inputs: {
        width: '70%',
        height: '100%',
        fontSize: 20,
        backgroundColor: '#42707A',
        borderRadius: 5,
        color: 'white'
    }
})

export default InputsLogin;



