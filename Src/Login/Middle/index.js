import React from "react";
import { View,StyleSheet,Text,Image,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import * as Animatables from "react-native-animatable";
import {useNavigation} from '@react-navigation/native';
export default function MiddleLogin(){
    const navigation = useNavigation();
    
    function Register(){
        navigation.navigate('Client')
        navigation.reset({index:0,routes:[{name:'Client'}]})
    }

    return(
        <View style={styles.container}>

            
            <View style={styles.content}>
                <View style={{alignItems:'center'}}>
                <Image style={styles.Fotos} source={require('../../../image/Salao.png')} />
                </View>


                <Animatables.View animation='fadeIn' delay={800} style={{alignItems:'center',marginTop:-45}}>

                  <TouchableOpacity style={styles.Botao} >
                    <Text style={styles.Fonte}>Cadastrar o Profissional</Text>
                  </TouchableOpacity>

                    <TouchableOpacity onPress={Register} style={styles.Botao}>
                    <Text style={styles.Fonte}>Cadastrar-se</Text>
                    </TouchableOpacity>
                
                    
                </Animatables.View>

                <Animatables.View animation="bounceInRight" delay={1000} style={{backgroundColor:'#fff',marginTop:95,height:100}}>
            <TouchableOpacity style={{}}>
                    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:14,color:'#ff7272',marginBottom:7}}>ENTRAR </Text>

            <View style={{alignItems:'center'}}>
            <AntDesign name="arrowright" size={24} color="#ff7272" />
            </View>           
            </TouchableOpacity>
           
            </Animatables.View> 


               
            </View>
          
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ff7272',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
      
    },
    content:{
        
     
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        backgroundColor:'#fff',
        height:290
    },
    Fotos:{
        width: 380,
        height:470,
        marginTop:40
        
    },
    Fonte:{
        color:'#ff7272',
        padding:14,
        textAlign:'center',
        fontWeight:'bold'
    },
    Botao:{
        backgroundColor:'#fff',
        width:300,
        margin:5,
        borderRadius:10,
        
    }
})