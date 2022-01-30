import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TitleText = props => {
  return (
    
      <Text style={styles.body}>{props.children}</Text>
    
  );
};

export default TitleText;

const styles = StyleSheet.create({
    body:{
        fontFamily:'open-sans-bold',
        fontSize:18
    }
});
