import React,{useState} from "react";
import { View,StyleSheet,Text,TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { TextInput } from "react-native-gesture-handler";

export default function MiddleClient({route}){
    const navigation = useNavigation();
    const[nome,Setnome] = useState('');

    function Menos(){
        navigation.navigate('Login')
    }

    function Next(){
       if(nome == ''){
        alert('Campos Vazios')
       }else{
        navigation.navigate('Email',{Nome:nome})
        
       }
    }

    return(
        <View style={styles.container}>
            <View style={{marginTop:25,marginStart:15, flexDirection:'row'}}>
                <TouchableOpacity onPress={Menos}>
            <AntDesign name="leftcircle" size={30} color="#fff" />
            </TouchableOpacity>
           
            </View>
            <View style={{alignItems:'center'}}>
            <Text style={{marginTop:-20,fontWeight:'bold',fontSize:16,color:'#fff'}}> Etapa 1 de 6</Text>
            </View>

            <View style={{marginTop:50,marginStart:20}}>
                <Text style={{color:'#fff',fontSize:30}}> Qual Seu Nome ?</Text>
            </View>
        
        
        <View style={styles.Content} >
                <View style={{alignItems:'center',marginTop:60,}}>
                    <TextInput style={styles.TextoInput} onChangeText={nome => Setnome(nome)} placeholder="Nome Completo" placeholderTextColor='#d0d0d8'/>
       
                </View>
                <View style={{alignItems:'center',marginTop:280,marginBottom:20,}}>
                    <TouchableOpacity onPress={Next} style={{backgroundColor:'#d95d63',borderRadius:20,width:360}}>
                        <Text style={{textAlign:'center',color:'#fff',padding:20,fontWeight:'bold'}}>PROXIMO</Text>
                    </TouchableOpacity>
                </View>
        </View>

       




        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d95d63'
    },
    Fotos:{
        width:250,
        height:500
    },
    Content:{
        flex:1,
        backgroundColor:'#fff',
        marginTop:80,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    TextoInput:{
    
        borderRadius:12,
        shadowColor:'#dbd2d6',
        shadowOpacity: 0.6,
        shadowRadius:2,
        elevation:1 ,
        backgroundColor:'#f9f4f6',
        padding:15,
        width:350
    }
})