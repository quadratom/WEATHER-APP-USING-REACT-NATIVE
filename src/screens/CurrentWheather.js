import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import TextRow from '../components/TextRow';
const CurrentWheather = () => {
  const {wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles
  return (
    
    <SafeAreaView style={ wrapper }>
      <View style={container}>
       <Feather name="sun" size={100} color="black" />

            <Text style={temp}>6</Text>
            <Text style={feels}>Feels like 5</Text>
          <TextRow 
            messageOne={'Low: 6'}
            messageTwo={'High: 8'}
            messageWrapper={highLowWrapper}  
            messageOneLow={highLow}
            messageOneHigh={highLow}
          />

      </View>
      <TextRow 
            messageOne={'Its sunny'}
            messageTwo={'its perfect t-shirt wheather'}
            messageWrapper={bodyWrapper}  
            messageOneLow={description}
            messageOneHigh={message}
          />
        
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container:{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp:{
    color:'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom:  40
  },
  description: {
    fontSize: 48
  },
  description: {
    fontSize: 30
  }
 })
export default CurrentWheather