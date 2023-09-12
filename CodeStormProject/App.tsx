import React from "react";
import { SafeAreaView } from "react-native";
import Home from "./src/pages/Home";
import LoginRoute from "./src/routes/Login.routes";
import { NavigationContainer } from "@react-navigation/native";
export default function App(){
  // Login == false(renderiza Login)
  // Login ==  true(renderiza Home)
  let login = false
  if(!login) {

    
    return(
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <LoginRoute />
        </NavigationContainer>
      </SafeAreaView>
    )
  }
  
    return(
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    )
  
}
