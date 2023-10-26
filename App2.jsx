import { View, Text } from 'react-native'
import React from 'react'

const App2 = () => {
  return (
    <View>
      <Text
        style={{ textAlign: 'center', marginTop:200, fontSize:20}}
      >Multistudi High School</Text>
      <Image resizeMode='cover' style={{height:200, width:120, alignSelf:'center',marginTop:50}} source={{uri : 'https://multistudi.sch.id/wp-content/uploads/2021/07/xLogo-MHS-PNG35-682x1024.png.pagespeed.ic.Z0R86-zsBc.png'}} />
      <Text style={{textAlign:'center', marginTop:50, fontWeight:'bold' }} >Welcome</Text>
      <View>
        <Text style={{textAlign:'center', marginTop:50, fontWeight:'bold' }} >Masukkan Email</Text>
        <TextInput style={{borderWidth:1, width:300, alignSelf:'center',borderRadius:50, padding : 10}} />
        <Text style={{textAlign:'center', marginTop:10, fontWeight:'bold' }} >Masukkan Password</Text>
        <TextInput style={{borderWidth:1, width:300, alignSelf:'center',borderRadius:50, padding : 10}} />
      </View>
    </View>
  )
}

export default App2