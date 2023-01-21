import React from 'react'
import { View, Text } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        justifyContent:'center',
        flex:1
    }}>
        <Text
        style={{
            fontSize:50,
            textAlign:'center'
        }}
        > hola mundo</Text>
    </View>
  )
}
