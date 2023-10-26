import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput, ScrollView } from 'react-native'
import React from 'react'
import Home from './Home'

const Detail = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Home') } >
      <View style={{height:50,width:50,borderRadius:25, display:'flex',flexDirection:'row',backgroundColor:'red', marginHorizontal:16,marginVertical:16}}>
        <Image source={require('../asset/arrow.png')} style={{alignSelf:'center',marginLeft:11,}} />  
        <Text style={{width:100, marginLeft:30, marginTop:10, color:'black', fontWeight:'bold', fontSize:18}} >Kembali</Text>
      </View>
      </TouchableOpacity>
      <View style={{marginTop:11, marginHorizontal: 16, alignSelf:'center'}} >
      <Image source={{uri :'https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90' }} style={{width:390, height:300, borderRadius:6,}} />
      <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <Text style={{marginTop:16,fontSize:18,fontWeight:'bold',color:'black'}} > Nasi gowrrengg </Text>
        <Text style={{marginTop:16,fontSize:18,fontWeight:'bold',color:'red'}} > Rp.20.000 </Text>
      </View>
      <View style={{marginLeft:6,marginTop:18,borderBottomWidth:3}} >
        <Text style={{marginBottom:12}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit quae blanditiis molestias sed? Sequi enim natus tenetur eum dolor asperiores, aliquam beatae blanditiis sunt voluptas, dolorum officiis atque consequuntur?</Text>
      </View>
      <View style={{marginLeft:6,marginTop:18,}} >
        <Text style={{color:'black',marginBottom:8,marginLeft:8}} >Jumlah</Text>
        <TextInput style={{borderWidth:1,borderRadius:12,padding:10}} placeholder='Maksimal pembelian adalah 10!' />
        <Text style={{color:'black',marginBottom:8,marginLeft:8,marginTop:16}} >Note</Text>
        <TextInput style={{borderWidth:1,borderRadius:12,padding:10}} placeholder='Masukkan pesan..' />
      </View>
      </View>
       <View style={{width:350,alignSelf:'center',marginTop:70,height:52, backgroundColor:'red',borderRadius:99, marginBottom:25 }}>
        <Text style={{alignSelf:'center',paddingVertical:14,fontSize:16,fontWeight:'bold',color:'black'}} >Pesan sekarang</Text>
      </View>
    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({})