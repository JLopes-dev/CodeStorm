import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/pages/Home";
import LoginRoute from "./src/routes/Login.routes";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function App(){  
  async function accountExists() {
    return await AsyncStorage.getItem("account")
   }
   const [user, setUser] = useState<string | null>()
  
   accountExists()
    .then(data => {setUser(data)})
    
    if (user) { 
      return(
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
          <Home />
          </NavigationContainer>
        </SafeAreaView>
      )
    }
    
    return(
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
        <LoginRoute />
        </NavigationContainer>
      </SafeAreaView>
    )

   }
  
    