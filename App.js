import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet,  View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScn from './screens/GameOverScn';
import AppLoading from 'expo-app-loading';
const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}
export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRound]=useState(0);
  const [dataLoaded,setDataLoaded]=useState(false);
  if(!dataLoaded){
   return<AppLoading 
   startAsync={fetchFonts}
    onFinish={()=>setDataLoaded(true)} 
    onError={(err)=>console.log(err)}/> ;
  }
  const configureNewGameHandler=()=>{
    setGuessRound(0);
    setUserNumber(null);
  }
  const startGameHandler =(selectedNumber)=>{
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };
  const gameOverHandler=numOfRounds=>{
    setGuessRound(numOfRounds);

  };
  let content=<StartGameScreen onStartGame={startGameHandler}/>;
  if(userNumber && guessRounds<=0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  } else if(guessRounds>0){
    content=<GameOverScn roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
  }
  return (
    <View style={styles.screenf} >
      <Header title="Guess the Number"/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
screenf:{
  flex:1
}
});
