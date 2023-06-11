import React from 'react';
import { View, Text } from 'react-native';

const TextRow = (props) => {
    const {messageOne, messageTwo, messageWrapper, messageOneLow, messageOneHigh} = props
  return (
    <View style={messageWrapper}>
        <Text style={messageOneLow}>{messageOne}</Text>
        <Text style={messageOneHigh}>{messageTwo}</Text>
    </View>
  )
}



export default TextRow