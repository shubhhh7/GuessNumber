import React, { useState,useRef, useEffect } from 'react';
import { Alert,  ScrollView,  StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import NumberContainer from '../components/NumberContainer';
import { Ionicons} from '@expo/vector-icons'
import BodyText from '../components/BodyText';
const generateRandomBetween=(min,max,exclude)=>{
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum=Math.floor(Math.random()*(max-min))+min;
    if(rndNum===exclude){
        return generateRandomBetween (min,max,exclude);
    } else{
        return rndNum;
    }
}
const renderListItem =(value,numOfRound)=>(<View key={value} style={styles.listItems}>
<BodyText>#{numOfRound}</BodyText>
<BodyText>{value}</BodyText>
</View>);
const GameScreen = props => {
    const initialGuess = generateRandomBetween(1,100,props.userChoice)
const [currentGuess,setCurrentGuess]=useState(initialGuess);
const[pastGuesses,setPastGuesses]=useState([initialGuess]);
const currentLow=useRef(1);
const currentHigh=useRef(100);
const {userChoice,onGameOver}=props;
useEffect(()=>{
  if(currentGuess===userChoice){
    onGameOver(pastGuesses.length); 
    
  }
},[currentGuess,userChoice,onGameOver]);

const nextGuessHandler = direction =>{
if((direction==='lower' && currentGuess<props.userChoice)||(direction==='greater'&& currentGuess>props.userChoice)){
    Alert.alert('Don\'t lie!','You know that this is wrong mf....',[{text: 'Sorry!',style:'cancel'}]);
    return;
}
if(direction==='lower'){
    currentHigh.current=currentGuess;
} else{
    currentLow.current=currentGuess+1;
}

const nextNumber=generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);;
setCurrentGuess(nextNumber);
// setRounds(curRounds=>curRounds+1);
setPastGuesses(currPastGuesses=>[nextNumber,...currPastGuesses])
};
return(
    <View style={styles.screen}>
        <Text>Opponent's  Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <MainButton    onPress={nextGuessHandler.bind(this,'lower')}>
                <Ionicons name="md-remove" size={24} color="white"/></MainButton>
            <MainButton  onPress={nextGuessHandler.bind(this,'greater')}>
            <Ionicons name="md-add" size={24} color="white"/></MainButton>
        </Card>
        <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.listcontent}>
            {pastGuesses.map((guess,index)=> renderListItem(guess,pastGuesses.length-index))}
        </ScrollView>
        </View>
        
    </View>
)
}

export default GameScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    buttonContainer:{
flexDirection:'row',
justifyContent:'space-around',
marginTop:20,
width:350,
maxWidth:'90%'
    },
    listItems:{
    borderColor: '#ccc',
    borderWidth:1,
    padding : 15,
    marginVertical:5,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'60%'
    
    },
    list:{
        flex:1,
        width:'80%',
    },
    listcontent:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:'flex-end'
    }
})
