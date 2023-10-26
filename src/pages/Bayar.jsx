import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Bayar = ({navigation}) => {
  return (
    <View>
      <View style={{alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:200}}>
        <Image source={require('../asset/checkbox.png')} style={{width:160,height:160}} />     
      </View>
      <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontSize:22, fontWeight:'bold', color:'black'}} >Pemesanan sukses!</Text>
       <Text style={{fontSize:16,marginTop:4}} >Mohon tunggu sebentar!</Text>
       <Text style={{fontSize:16}} >Pesanan anda sedang di proses</Text>
    </View>   
    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
       <View style={{width:350,alignSelf:'center',marginTop:300,height:52, backgroundColor:'red',borderRadius:99, marginBottom:25 }}>
        <Text style={{alignSelf:'center',paddingVertical:14,fontSize:16,fontWeight:'bold',color:'black'}} >Kembali</Text>
       </View>
       </TouchableOpacity>
    </View>
  )
}

export default Bayar