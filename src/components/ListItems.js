import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';



  
    const ListItems = (props) => {
        const { dt_txt, max, min, condition } = props

        const { item, date, temp, conditions } = styles

        return (
          <View style={item}>
            <Feather name="sun" size={50} color={"white"} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
            <Text style={conditions}>{condition}</Text>
          </View>
      
        )
    }

      const styles = StyleSheet.create({
        item: {
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderWidth: 5,
            backgroundColor: 'pink'
          },
          temp: {
            color: 'white',
            fontSize: 20
          },
          date: {
            color: 'white',
            fontSize: 15
          },
          conditions: {
            color: 'red',
            fontSize: 20
          },
          
      })
  


export default ListItems