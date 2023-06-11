import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TextIcon = (props) => {
    const { textTheme, container } = styles
    const {iconName, iconColor, bodyText, bodyTextStyles } = props
  return (
   <View style={container}>
    <Feather name={iconName} size={50} color={iconColor}/>
    <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
   </View>
  )
}
 
const styles = StyleSheet.create({
    container:  {
        alignItems: 'center'
    },
    textTheme: {
        fontWeight: 'bold'
    }
})

export default TextIcon