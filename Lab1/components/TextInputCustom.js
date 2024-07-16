import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'


const TextInputCustom = (props) => {
 return (
   <View>
       <Text style={st.label}>{props.label}</Text>
      <TextInput {...props}
       style = {[props.style, st.input]}
       placeholderTextColor={props.placeholderTextColor || '#BBBBBB'}
      />
  </View>
 )
}
export default TextInputCustom
const st = StyleSheet.create({
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black'
  },
   input:{
    padding:10,
    borderWidth: 0.7,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 15
   }
})
