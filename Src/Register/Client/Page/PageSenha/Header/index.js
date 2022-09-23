

import React from "react";
import { View, Text,StyleSheet, StatusBar,Image,SafeAreaView} from "react-native";
const statusbarHeight =  StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function HeaderSenha(){
    return(
       <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
    
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: statusbarHeight,
        justifyContent:'center',
        backgroundColor:'#d95d63'
     
       
     
    },
    Fotos:{
        width: 250,
        height:250
    },
    content:{
        backgroundColor:'#fff',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    }

})