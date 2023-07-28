import React from 'react'
import {View, Image, StyleSheet, Text,SafeAreaView, TouchableOpacity} from 'react-native'
import Alessia from './page/Koala';


const App = ({navigation, route}) => {
  return(
    <SafeAreaView style={style.contenitore}>
        <View style={{alignContent:'center', justifyContent:'center'}}>
            <Image style={style.secondoSfondo} source={require('../profile/Image/foto_profilo.jpeg')} />
                <View style={{justifyContent:'center' , alignItems:'center', flex:1}}>
                   <Image style={style.sfondoUtente} source={require('../profile/Image/fotoUtente.jpeg')}/>
                </View>
            <View style={{justifyContent:'center', alignItems:'center', top:75}}>
                <Text style={{fontSize:25, alignItems:'center', marginBottom:5}}>Cardullo Italia</Text>
                <Text>Ho un DNA contaminato dall'informatica</Text>
            </View>
           <View style={{justifyContent:'center', flexDirection:'row' ,alignItems:'center',top:85}}>
              <TouchableOpacity 
              style={{marginRight:20, width:100, height:40, backgroundColor:'#1B6725' , borderRadius:15,
              alignItems:'center' , justifyContent:'center'}}
              onPress={() => {}}>
                <Text  style={{color:'white'}}>Aggiungi</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{ width:100, height:40, backgroundColor:'#1B6725' , borderRadius:15, 
              alignItems:'center' , justifyContent:'center'}}           
              onPress={()=> {}}>
                <Text style={{color:'white'}}>Messaggia</Text>
              </TouchableOpacity>
           </View>
        <View style={{top:140,left:20, width:150, height:200, backgroundColor:'white', borderRadius:10, borderWidth:3 , borderColor:'darkgray'}}>
          <View  style={{alignItems:'center' , top:10}}>
            <Image  style={{width:80, height:80 , borderRadius:360}} source={require('../profile/Image/fotoUtente_1.jpeg')}/>
            <Text style={{marginTop:10}}>Alessia Cardullo</Text>
            <Text>Sono un koala</Text>
            <TouchableOpacity
            style={{ top:10, backgroundColor:'#1B6725', width:100, height:40, borderRadius:15 , alignItems:'center' , justifyContent:'center'}}
            onPress={()=>{}}>
              <Text style={{fontSize:15, color:'white'}}>Vedi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ left:220, top: -60, width:150, height:200, backgroundColor:'white', borderRadius:10, borderWidth:3 , borderColor:'darkgray'}}>
          <View  style={{alignItems:'center' , top:10}}>
            <Image  style={{width:80, height:80 , borderRadius:360}} source={require('../profile/Image/fotoUtente_2.jpeg')}/>
            <Text style={{marginTop:10}}>Carmelo Cardullo</Text>
            <Text>Sono un alieno</Text>
            <TouchableOpacity
            style={{ top:10, backgroundColor:'#1B6725', width:100, height:40, borderRadius:15 , alignItems:'center' , justifyContent:'center'}}
            onPress={()=>{}}>
              <Text style={{fontSize:15, color:'white'}}>Vedi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}


export default App;

const style = StyleSheet.create ({
  contenitore : {
    flex:1,
    backgroundColor:'white',
  },
  secondoSfondo:{
    width:400,
    height:300,
  },
  sfondoUtente: {
    borderRadius:360,
    width:130,
    height:130
  },

});