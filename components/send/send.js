import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,TextInput,Button,Image, } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

// Make a component
class Send extends Component {
  state = { send: [] };

// 控制選船的值
onSelect(index, value){
  this.setState({
    RadioGrouptext: `${value}`
    //最原本的設定可參考www.npmjs.com/package/react-native-flexi-radio-button
    //  text: `Selected index: ${index} , value: ${value}` 
  })
}

  render() {
    const {bgcolor,container,header,headertext,headerbutL,headerbutR,sendtitlestyle,titleinput,sendcontstyle,selectboat,
      RadioGroupstyle,RadioButtonstyle,Radiotext,Radiotextstyle} = styles;
    return (
      <View style={bgcolor}>
        {/*上方藍色tab*/}
        <View style={header}>
          <View style={headerbutL}>
            {/*取消的按鈕*/}
            <Button 
                onPress={() => 'nule'}
                title="取消"
                color="#ffffff"
                style={{fontSize:18}}
              />
          </View>
            <View>         
              <Text style={headertext}>請寫下您想說的話</Text>
            </View>
          <View style={headerbutR}>
            {/*送出的按鈕*/}
            <Button 
                onPress={() => 'nule'}
                title="傳送"
                color="#ffffff"
                style={{fontSize:18}}
              />
            </View>
        </View>
        {/*主題輸入與選船*/}
        <View style={container}>
          <View style={sendtitlestyle}> 
            <View>
              {/*這艘要依照下面RadioGroup所選擇的顏色更換圖片....這就之後再說吧*/}
              <Image source={require('../../assets/send/bboat.png')}/>
            </View>
            <View style={titleinput}>
              {/*輸入標題*/}
              <TextInput
                style={{height: 60,width:250,marginLeft:20,marginTop:30, borderColor: 'gray', borderWidth: 0}}
                onChangeText={(text) => this.setState({text})}
                placeholder="我今天想說....  (標題)"
                multiline={true}
              />
            </View>
          </View>
          {/*選擇船的顏色*/}
          <View style={selectboat}>
            <View>
              <RadioGroup
                onSelect = {(index, value) => this.onSelect(index, value)}
                style={RadioGroupstyle}
                color='#68accb'
                selectedIndex={0}
              >
                <RadioButton 
                style={RadioButtonstyle}
                color='#dfdfdf'
                value={'白色紙船：只是想說說話'} >
                </RadioButton>
        
                <RadioButton 
                style={RadioButtonstyle}
                color='#68accb'
                value={'藍色紙船：想要有人和我說說話'}>
                </RadioButton>
        
                <RadioButton 
                style={RadioButtonstyle}
                color='#f8e81c'
                value={'黃色紙船：想要有人給我方向'}>
                </RadioButton>
                <RadioButton 
                style={RadioButtonstyle}
                color='#e4007f'
                value={'桃紅紙船：希望可以得到諮詢'}>
                </RadioButton>                
              </RadioGroup>     

            </View>
            <View style={Radiotext}>
              <Text style={Radiotextstyle}>{this.state.RadioGrouptext}</Text>
            </View>            
          </View>
          {/*輸入內文 */}
          <View style={sendcontstyle}>
            <TextInput
              style={{height: 295, borderColor: 'gray', borderWidth: 0}}
              onChangeText={(text) => this.setState({text})}
              placeholder="在想些什麼....  (內文)"
              multiline={true}
              //value={this.state.text}
            />          
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bgcolor:{
    backgroundColor:'#f9f9f9',
    flex:1,
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'#f9f9f9',
    // flexDirection:'row',
  },
  header:{
    backgroundColor: "#68accb",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    height:60,
    paddingTop:15,
  },
  headertext:{
    fontSize: 17,
    textAlign: "left",
    color: "#ffffff",
  },
  headerbutL:{
    justifyContent:'flex-start',
    marginRight:60,
    // backgroundColor:'red',
  },
    headerbutR:{
    justifyContent:'flex-end',
    // backgroundColor:'red',
    marginLeft:60,
  },
    sendtitlestyle:{
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',
      // paddingLeft:35,
    },
    titleinput:{
      // width:60,
    },
    selectboat:{
      flexDirection:'row',
      height:50,
      // flex:1,
      // backgroundColor:'red',
      marginTop:10,
      marginBottom:10,
      borderStyle: "solid",
      borderBottomWidth : 1,
      borderColor:"#dfdfdf",
    },
    sendcontstyle:{
      width:300,
      marginTop:15,
    },
    RadioGroupstyle:{
      flexDirection:'row',
      marginTop:5,
    },
    RadioButtonstyle:{
      marginLeft:-10,
    },
    Radiotext:{
      width:200,
      justifyContent:'center',
    },
    Radiotextstyle:{
      color:'#9f9f9f',
      fontSize: 12,
    }
})

export default Send;
