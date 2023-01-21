import React,{useState} from 'react'
import { View, Text,Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';



export const ContadorScreen = () => {
    const [contador, setcontador] = useState(1);
    
  return (
    <View style={styles.containter}>
        <Text style={styles.texto}>Contador {contador}</Text>

        <Fab 
            title='+1'
            position='br'
            onPress={()=>setcontador(contador+1)}
        />
        <Fab 
            title='-1'
            position='bl'
            onPress={()=>setcontador(contador-1)}
        />
{/* 
    <TouchableOpacity style={styles.fablocationBL} onPress={()=>setcontador(contador-1)} >  
        <View style={styles.fab}>
            <Text style={styles.ftext}>
                -1
            </Text>
        </View>
       
    </TouchableOpacity> */}

    </View>
  )


}



const styles=StyleSheet.create({
    containter:{
        flex:1,
        justifyContent:'center'
    },
    texto:{
        textAlign:'center',
        fontSize:40,
        //position:'relative',
        top:-10
    },
    
})