import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList,  StatusBar, ImageBackground } from 'react-native';
import ListItems from '../components/ListItems';

const DATA = [
  {
    dt_txt: "2023-02-18 12:00:00",
    main:{
      temp_max: 8.55,
      temp_min: 7.55
    },
    wheather:[
      {main: 'Clear'}
    ]
  },
  {
    dt_txt: "2023-02-18 12:00:00",
    main:{
      temp_max: 8.55,
      temp_min: 7.55
    },
    wheather:[
      {main: 'Clear'}
    ]
  },
  {
    dt_txt: "2023-02-18 12:00:00",
    main:{
      temp_max: 8.55,
      temp_min: 7.55
    },
    wheather:[
      {main: 'Clear'}
    ]
  },
 
]




const UpcomingWheather = () => {

    const renderItem = ({ item }) => (
      <ListItems
        condition={item.wheather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )

    const { container, image } = styles
    
  return (
   <SafeAreaView style={container}>
    <ImageBackground 
          style={image}
          source={require('../../assets/wheather.jpeg')}
      >
      <Text>Upcoming wheather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </ImageBackground>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
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
    image: {
      flex: 1
    }
    
})

export default UpcomingWheather