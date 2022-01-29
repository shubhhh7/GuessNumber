import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GameOverScn = () => {
  return (
    <View style={styles.screen}>
      <Text>THe Game is over</Text>
    </View>
  );
};

export default GameOverScn;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
