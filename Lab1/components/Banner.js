import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = ({url}) => {
  return (
    <View>
      <Image source={{uri: url}} style={styles.img} />
    </View>
  )
}

export default Banner

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    img: {
        width: windowWidth,
        height: 200,
        borderRadius: 10,
        resizeMode:'center'
    }
})