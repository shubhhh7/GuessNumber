import { Button, StyleSheet, Text, View ,Image} from 'react-native';
import React from 'react';
import BodyText from '../components/BodyText';
import TitleText from '../components/TItleText';
import color from '../constants/color';
import MainButton from '../components/MainButton';

const GameOverScn = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
      <Image style={styles.image}
      resizeMode='cover' source={require('../assets/success.png')}/>
      </View>
      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number   
      <Text style={styles.highlight}>{props.userNumber}</Text></BodyText>
      </View>
      
      <MainButton onPress={props.onRestart}>
        NEW GAME
      </MainButton>
    </View>
  );
};

export default GameOverScn;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
      borderRadius:150,
      borderWidth:3,
      borderColor:'black',
      width:300,
      height:300,
      overflow:'hidden',
      marginVertical:20

    },
    image:{
   width:'100%',
   height:'100%',
    },
    highlight:{
      color: color.primary,
      fontFamily: 'open-sans-bold',
    },
    resultContainer:{
      marginHorizontal: 30,
      marginVertical:15
      

    },
    resultText:{
      textAlign:'center',
      fontSize:20,
    }
});
