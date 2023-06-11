import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const Counter = () => {
    const [ count, setCount ] = useState(0)
    const [ newCount, setNewCount ] = useState(0)


    useEffect(() => {

    }, [newCount])
  return (
   <View style={styles.container}>
    <Text style={styles.title}>Count: {count}</Text>
    <Button
       color={'red'} 
       title={'Increase count'}
       onPress={() => setCount(count +1)}
    
    />
    <Button
       color={'green'} 
       title={'Decrease count'}
       onPress={() => setCount(count -1)}
    
    />

<Button
       color={'red'} 
       title={'Increase count'}
       onPress={() => setNewCount(newCount +1)}
    
    />
    <Button
       color={'green'} 
       title={'Decrease count'}
       onPress={() => setNewCount(newCount -1)}
    
    />
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }

})

export default Counter