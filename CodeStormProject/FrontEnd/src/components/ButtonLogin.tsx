import React from "react";
import { StyleSheet, Text } from 'react-native'
import { Box, Button, Icon } from 'native-base'

type Props = {
    onClick: Function
    loading: boolean
}

export default function ButtonLogin(props: Props) {
    return(
        <Box style={styles.container}>
            <Button 
                isLoading={props.loading} 
                onPress={() => props.onClick()}  
                style={styles.button}>
                <Text style-={styles.textButton}>Entrar</Text>
            </Button>
        </Box>
    )
}

const styles = StyleSheet.create({
container: {
    width: '100%',
    height: '15%',
    marginTop: 20,
    alignItems: 'center'
},
button: {
    backgroundColor: '#dddd62',
    borderRadius: 5,
    width: '80%',
    height: '100%',
},
textButton: {
    fontWeight: 'bold',
    }
})