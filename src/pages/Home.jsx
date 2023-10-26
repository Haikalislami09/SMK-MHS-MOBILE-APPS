import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <View style={{height:52, backgroundColor:'red', marginHorizontal: 16,borderRadius:99, marginTop:16, flexDirection:'row', justifyContent: 'space-between', alignItems:'center', paddingHorizontal:10,paddingVertical:16}}>
        <Image source={{uri :'https://multistudi.sch.id/wp-content/uploads/2021/07/tentang-1024x252.png'}} style={{width:140 , height:32,}} />
        
        <Image source={require('../asset/Frame.png')} style={{width:20, height:20,}} />
      </View>
      <View>
        <Text style={{ marginTop:32, marginLeft:16,}} >Selamat datang di</Text>
        <Text style={{ marginLeft:16, fontSize:30, fontWeight:'bold', color:'black'}} >Kantin Multistudi</Text> 
      </View>
      <View style={{flexDirection:'row',}}>
        <View style={{flex:1, padding:12}}>
          <View style={{height: 150, }}>
          <Text style={{ fontWeight:'bold', color:'black', fontSize: 18}}>Menu Makanan</Text> 
          <TouchableOpacity  onPress={() => navigation.navigate('Detail')}>
            <Image source={{uri :'https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90' }} style={{width:190, height:180, borderRadius:6, marginTop:11}} />
            <Text style={{ fontWeight:'bold', color:'black', fontSize: 18, marginTop:10}}>Mie ayam</Text>
            <Text style={{ fontWeight:'bold', color:'red', fontSize: 18, marginTop:4}}>Rp.20.000</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1, padding:12}}>
          <View style={{height: 150, }}>
            <TouchableOpacity>
            <Image source={{uri :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAufy0C04QMVd6W2Qq5B6w2_VE3PQbYFpqmocjVrxsPUqypYUBi9X4EAaHX3EdbNm3IA&usqp=CAU' }} style={{width:190, height:180, borderRadius:6, marginTop:39}} />
            <Text style={{ fontWeight:'bold', color:'black', fontSize: 18, marginTop:10}}>Krabby Patty</Text>
            <Text style={{ fontWeight:'bold', color:'red', fontSize: 18, marginTop:4}}>$100</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop:150}}>
        <View style={{flex:1, padding:12}}>
          <View style={{height: 100, }}>
            
          <Text style={{ fontWeight:'bold', color:'black', fontSize: 18}}>Menu Minuman</Text> 
            <TouchableOpacity>
              <Image source={{uri :'https://images.tokopedia.net/img/JFrBQq/2022/9/14/21e89f58-0f3d-4f62-af5e-af05cfd55909.jpg' }} style={{width:190, height:180, borderRadius:6, marginTop:11}} />
            <Text style={{ fontWeight:'bold', color:'black', fontSize: 18, marginTop:10}}>Mixuekkk</Text>
            <Text style={{ fontWeight:'bold', color:'red', fontSize: 18, marginTop:4}}>Rp.16.000</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1, padding:12}}>
          <View style={{height: 150, }}>
            <TouchableOpacity>
            <Image source={{uri :'https://pbs.twimg.com/media/FkOxAywacAADOp-.jpg:large' }} style={{width:190, height:180, borderRadius:6, marginTop:40}} />
            <Text style={{ fontWeight:'bold', color:'black', fontSize: 18, marginTop:10}}>Teh Obeng</Text>
            <Text style={{ fontWeight:'bold', color:'red', fontSize: 18, marginTop:4}}>Rp.20.000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
   
  )
}

export default Home

const styles = StyleSheet.create({})












