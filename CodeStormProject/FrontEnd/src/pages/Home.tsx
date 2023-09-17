import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Box,NativeBaseProvider } from "native-base";
import React from "react";
import { Text,Button, StyleSheet, Dimensions } from 'react-native'

export default function Home() {
    const navigation = useNavigation()
    function signout() {
        AsyncStorage.removeItem('account')
        navigation.dispatch(
            CommonActions.reset({
             index: 0,
             routes: [{ name: 'Login' }]
            }))
    }
    return(
        <NativeBaseProvider>
            <Box style={styles.container}>
              <Button onPress={signout} title='deslogar'/>
             <Text>oi</Text>
            </Box>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#16292E',
        height: Dimensions.get('screen').height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})