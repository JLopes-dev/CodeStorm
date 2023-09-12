import React from 'react'
import { Box } from 'native-base'
import { Text, StyleSheet } from 'react-native'

const TituloDoProduto = () => {

    return(
        <Box style={styles.tituloContainer}>
            <Text style={styles.titulo}>CodeStorm</Text>
        </Box>
    )
}

export default TituloDoProduto;

const styles = StyleSheet.create({
tituloContainer: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
},
titulo: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
},
})