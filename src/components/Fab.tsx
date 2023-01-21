import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View,Platform } from 'react-native'

interface Props{
    title:string;
    position?:'br'|'bl';
    onPress:()=>void;
    
}

export const Fab = ({title,onPress,position="br"}:Props) => {
   // console.log(props.title);
    const ios=()=>{
        return (
            <TouchableOpacity 
                onPress={onPress}
                style={[styles.fablocation,(position==='bl')?styles.left:styles.rigth]} 
                activeOpacity={0.8}
                >
               
                <View style={styles.fab}>
                    <Text style={styles.ftext}>
                        {title}
                    </Text>
                </View>
            
                
            </TouchableOpacity>
    
            )
    }
    const android=()=>{
        return(
            <View style={[styles.fablocation,(position==='bl')?styles.left:styles.rigth]} >
                <TouchableNativeFeedback 
                background={TouchableNativeFeedback.Ripple('black',true,30)}
                onPress={onPress} >  
                <View style={styles.fab}>
                    <Text style={styles.ftext}>
                        {title}
                    </Text>
                </View>
            
            </TouchableNativeFeedback>
            </View>
        )
    }
    return (Platform.OS==='android')?android():ios();
 
}

const styles =StyleSheet.create({
    fablocation:{
        position:'absolute',
        bottom:20,
    },
    left:{
        left:25,
    },
    rigth:{
        right:25,
    },
    fab:{
        backgroundColor:'#5856d6',
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

       // elevation: 5,
    },
    ftext:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'center'
    }
})