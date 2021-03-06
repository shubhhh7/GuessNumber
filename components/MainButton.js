import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import color from '../constants/color';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor: color.primary,
        paddingVertical:12,
        paddingHorizontal:30,
        borderRadius:25
    },
    buttonText:{
     color:'white',
     fontFamily:'open-sans',
     fontSize:18   
    }
});
