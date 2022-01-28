import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber,setUseNumber]=useState();
  const startGameHandler =(selectedNumber)=>{
    setUseNumber(selectedNumber);
  };
  let content=<StartGameScreen onStartGame={startGameHandler}/>;
  if(userNumber){
    content=<GameScreen userChoice={userNumber}/>
  }
  return (
    <View style={styles.screen} >
      <Header title="Guess the Number"/>
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  flex:1
}
});
