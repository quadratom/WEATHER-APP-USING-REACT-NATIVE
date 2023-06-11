import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text,
         View,
          SafeAreaView, 
          ImageBackground, 
          StyleSheet ,
         
        } from 'react-native';
import TextIcon from '../components/TextIcon';

const City = () => {
    const { container, imageLayout, cityName, cityText, countryName,populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout  } = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground 
         style={imageLayout}
        source={require('../../assets/city.jpeg')}>
            <Text style={[cityName, cityText]}>Ikeja</Text>
            <Text style={[countryName, cityText]}>Lagos</Text>
            <View style={[populationWrapper, rowLayout]}>
               <TextIcon
                iconName={'user'}
                iconColor={'red'}
                bodyText={49999}
                bodyTextStyles={populationText}
                 />
        
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
            <TextIcon
                iconName={'sunrise'}
                iconColor={'white'}
                bodyText={'07:36:58am'}
                bodyTextStyles={[riseSetText, rowLayout]}
                 />
             <TextIcon
                iconName={'sunset'}
                iconColor={'white'}
                bodyText={'17:49:36pm'}
                bodyTextStyles={[riseSetText, rowLayout]}
                 />
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName:{
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
       
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City