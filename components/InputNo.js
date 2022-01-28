import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const InputNo = props => {
    return (
        <TextInput {...props} style={{...styles.input,...props.style}}/>
    )
}

export default InputNo

const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        borderBottomWidth:1,
        marginVertical:10,
    }
})
