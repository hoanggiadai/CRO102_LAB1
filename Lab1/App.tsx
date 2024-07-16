import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Banner from './Lab1/components/Banner'
import Block from './Lab1/components/Block'
import ButtonCustom from './Lab1/components/ButtonCustom'
import TextInputCustom from './Lab1/components/TextInputCustom'
import {ThemeCustom, useTheme} from './Lab1/components/ThemeCustom'

const Lab1 = () => {

  return (
    <ThemeCustom>
      
      <BodyApp/>
    </ThemeCustom>
    
  )
}

const BodyApp = () => {
  const [hoTen, sethoTen] = useState('');
  // sử dụng hook để thao tác với theme
  const {theme, toggleTheme } = useTheme();

  const lightModeImage = require('./Lab1/img/light_mode.png');
  const darkModeImage = require('./Lab1/img/dark_mode.png');

  const imageSource = theme === 'light' ? darkModeImage : lightModeImage;

  return(
      <ScrollView>
        <View style={[styles.khung, {backgroundColor: theme==='light'?'#fff':'#000'}]}>
        <Banner url={'https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png'}/>
        <Block title={'Thông tin cá nhân'} styless={{backgroundColor: '#ffcccc', marginTop: 10}}>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập họ tên" label="Họ và tên" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập ngày sinh" label="Năm sinh" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập địa chỉ" label="Địa chỉ" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập số điện thoại" label="Số điện thoại" placeholderTextColor={'black'}/>
          <ButtonCustom title={'LƯU'} style={{width: 200, height: 50, alignSelf: 'center'}} onPress={()=>{}}/>
        </Block>

        <Block title={'Thông tin khóa học'} styless={{backgroundColor: '#99CCFF', marginTop: 10}}>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập tiêu đề" label="Tiêu đề khóa học" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập nội dung" label="Nội dung khóa học" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập tên giảng viên" label="Giảng viên hướng dẫn" placeholderTextColor={'black'}/>
          <TextInputCustom onChangeText={sethoTen} placeholder="Nhập thời gian" label="Thời lượng khóa học" placeholderTextColor={'black'}/>
          <ButtonCustom title={'LƯU'} style={{width: 200, height: 50, alignSelf: 'center'}} onPress={()=>{}}/>
        </Block>

        <Block title={'Thông tin liên hệ'} styless={{backgroundColor: '#CCFFFF', marginTop: 10}}>
          <Text style={styles.text}>Số điện thoại: 01223456879</Text>
          <Text style={styles.text}>Email: ghjkla@gmal.com</Text>
          <Text style={styles.text}>Địa chỉ: Nam Từ Liêm - Hà Nội</Text>
        </Block>
        
        <TouchableOpacity style={styles.btTheme} onPress={toggleTheme}>
          <Image source={imageSource} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      </ScrollView>
  );
 }

export default Lab1

const styles = StyleSheet.create({
  khung:{
    flex: 1
  },
  text:{
    color:'black',
    fontSize: 18,
    marginBottom: 7
  },
  btTheme:{
    width: 200,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'green',
    alignSelf:'center',
    marginTop: 15,
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 10
  }
})