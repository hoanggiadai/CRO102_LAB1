import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Block = ({title, children, styless}) => {
  return (
    <View style = {[styles.container, styless]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style = {styles.content}>
        {children}
      </View>
    </View>
  )
}

export default Block

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Độ nổi của đổ bóng
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#003300'
    }, 
    content: {
        marginTop: 10
    }
})