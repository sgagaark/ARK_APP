import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text, } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SegmentedControl from 'react-native-segmented-control';

import HisSendmore from './HisSendmore';
import HisSendjourney from './HisSendjourney';

// Make a component
// 是用SegmentedControlIOS切換Historysend與Historyreceive的頁面
class HisSendmoreseceen extends Component {
  state = { history: [] };


  render() {
    const {bgcolor,header,headertext,ScrollViewstyleA,ScrollViewstyleB,semgstyle} = styles;
    return (
      <View style={bgcolor}>
        {/*<View style={header}>
          <Text style={headertext}>紙船紀錄</Text>
        </View>*/}
        <View style={semgstyle}>
          <SegmentedControl
              defaultPage={0}
              itemFontSize={17}
              itemButtonColor='#f9f9f9'
              itemButtonActiveColor='#f9f9f9'
              itemTextColor='#9f9f9f'
              itemTextActiveColor='#42758c'
              itemButtonBorderColor='#f9f9f9'
              itemButtonViewStyle = {{
         
                //paddingBottom:10,
              }}
              itemHeaderViewStyle = {{
                paddingVertical:0,
                height:44,
                borderBottomWidth : 1,
                borderColor:"#dfdfdf",                  
                justifyContent:'center',

              }}
              ref = {e=>this.SegmentedControl=e}
          >
              <SegmentedControl.Item
                  title = {'全文'}
              >
                    <ScrollView style={ScrollViewstyleA}>
                      {/*抓全文的頁面*/}
                        <HisSendmore/>
                    </ScrollView>                    
              </SegmentedControl.Item>
              <SegmentedControl.Item
                  title = {'旅程'}
              >
                    <ScrollView style={ScrollViewstyleB}>
                      {/*抓旅程的頁面*/}
                        <HisSendjourney/>
                    </ScrollView>
              </SegmentedControl.Item>
          </SegmentedControl>          
        </View>
       {/*<ScrollView style={ScrollViewstyle}>
          <HisSendmore/>
        </ScrollView>*/}
     </View>      
    );
  }
}
const styles = StyleSheet.create({
  bgcolor:{
    backgroundColor:'#f9f9f9',
    flex:1,
  },
  header:{
    backgroundColor: "#68accb",
    justifyContent:'center',
    alignItems:'center',
    height:64,
    paddingTop:15,
  },
  headertext:{
    fontSize: 17,
    textAlign: "left",
    color: "#ffffff",
  },  
  ScrollViewstyleA:{
    backgroundColor:'#f9f9f9',
  },
  ScrollViewstyleB:{
    backgroundColor:'#56abc8',
  },
  semgstyle:{
    flex:1,
  },
})
export default HisSendmoreseceen;
