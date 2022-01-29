import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import React from 'react';
import { StyleSheet,  View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScn from './screens/GameOverScn';

export default function App() {
  const [userNumber,setUserNumber]=useState();
  const [guessRounds,setGuessRound]=useState(0);
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
    content=<GameOverScn/>;
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
