import React, {useState} from "react";
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import color from "../constants/color";
import InputNo from "../components/InputNo";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";

const StartGameScreen = props => {
    const[enteredValue, setenteredValue]=useState('');
    const[confirmed,setConfirmed]=useState(false);
    const[selectnumber,setSelectNumber]=useState();
    const numberInputHandler= inputText=>{
       setenteredValue(inputText.replace(/[^0-9]/g,''))
    };
    const resetInputHandler=()=>{
        setenteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler=()=>{
        const chosenNumber=parseInt(enteredValue);
        if(isNaN(chosenNumber)||chosenNumber<=0||chosenNumber>99){
           Alert.alert('Invalid number!','Number has to be between 1 and 99',[{text:'okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setenteredValue('');
        setSelectNumber(parseInt(enteredValue))
        Keyboard.dismiss();
    };
    let confirmedOutput;
    if(confirmed){
confirmedOutput=(
<Card style={styles.SummaryContainer}>
<Text>You selected</Text>
<NumberContainer>{selectnumber}</NumberContainer>
<MainButton onPress={()=>props.onStartGame(selectnumber)}>
    START GAME</MainButton>
    </Card>
);
    }
    return (
        <View style={styles.screen}>
            <Text style={styles.title} >Start New Game!</Text>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <InputNo  style={styles.input} keyboardType="number-pad" blurOnSubmit maxLength={2}
                onChangeText= {numberInputHandler}
                value={enteredValue} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={color.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={color.primary}/></View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontFamily:'open-sans-bold',
        marginVertical: 10,
    },
    text:{
        fontSize:18,
        fontFamily:'open-sans'
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center',

    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    button:{
       width: 100,

    },
    input:{
        width:50,
        textAlign:"center"
    },
    SummaryContainer:{
       marginTop:20,
       alignItems:"center"

    }
});
