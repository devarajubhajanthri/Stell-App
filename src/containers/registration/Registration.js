/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, Dimensions, TouchableHighlight } from 'react-native';

import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome, { Icons } from 'react-native-fontawesome';
// import  {Ionicons, FontAwesome} from '@expo/vector-icons'
import { withNavigation } from 'react-navigation';

import Carousel from 'react-native-banner-carousel';



const tintColor = '#fafafa';

// const BannerWidth = Dimensions.get('window').width;
const BannerHeight =   75;
const BannerWidth =   280;

const images = [
  "https://i.ytimg.com/vi/JcJrjx91tlM/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsShoUXDqOJbFd_l4Ej0247R6jTqW6EPoESIJxTdvScR8euwFPrg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTz86D6rfGs3lu-xGz-UDX2cSZRnOXN9C2zxBdyuab3gL2Wm-x",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnscN4M8OiMpzzHeQCIkZyfuqdkhsfGjx1U9Bvm7eDpgEfne2J9A",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZXpe5jwiEtbkL79q7jo5hOXAWg_4qrXuAKGQ6CNamKP2rpjD_g"
];

   class Registration extends Component<Props> {
    
    renderPage(image, index) {
      return (
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight  }} source={{ uri: image }} />
          </View>
      );
  }

    render() {
      return (
        <View style={styles.container}>

           <View style={styles.aftertabwidth}></View>
       
          <View style={styles.searchcontainer}>
              <SearchBar 
                placeholder=" Search cattle"
                lightTheme
                inputStyle={styles.searchBarInput}
                icon={{ color: tintColor, size: '52'}}
              clearIcon={{name: 'search'}}
              />
          </View>
               {/* <Button title="Go to " onPress={() => this.props.navigation.navigate('Details')}></Button> */}

              <View >
                <View style={{backgroundColor:'#F5FCFF' }}>
                
                  <View style={{flexDirection:'row',  marginTop: -36}}>
                      <View style={styles.registercattle}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Registercattle')}>
                          <Image style={styles.imagestyle} source={require('../../asset/images/registercattle.png')} />
                        </TouchableHighlight>
                           <Text style={styles.registertext}> Register cattles</Text>
                      </View>

                    <View style={styles.registersire}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Registersire')}>
                          <Image style={styles.imagestyle} source={require('../../asset/images/registersire.png')} />
                        </TouchableHighlight>  
                           <Text style={styles.registertext}> Register Sire</Text>
                      </View>

                  </View>
                   
                  <View style={{flexDirection:'row', marginTop: -85}}>
                      <View style={styles.cattlesummary}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Cattlesummary')}>
                          <Image style={styles.imagestyle} source={require('../../asset/images/cattlesummary.png')} />
                        </TouchableHighlight>  
                           <Text style={styles.registertext}>  Cattle Summary</Text>
                      </View>

                      <View style={styles.activitylog}>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Activitylog')}>
                          <Image style={styles.imagestyle} source={require('../../asset/images/activitylog.png')} />
                        </TouchableHighlight> 
                          <Text style={styles.registertext}> Activity Log</Text>
                      </View>

                  </View>
        
                </View>

             </View>


             <View style={styles.banner}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>

              <View style={{flexDirection: 'row', justifyContent:'center', backgroundColor:'#F5FCFF'}}>
              <Image source={ require('../../asset/images/home.png')}></Image>  
              </View>         

        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:  '#ffffff'  
    },

    aftertabwidth : {
      height:14, 
      backgroundColor:'#f2f2f2', 
      borderTopWidth: 0.2, 
      borderBottomWidth: 0.2, 
      borderBottomColor: '#bbb', 
      borderTopColor: '#bbb',
    },

    searchcontainer : {
      marginTop: 15
    },
    searchBarInput: {
      color: tintColor,
      backgroundColor: '#fafafa',
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 0.2,
    },
   
  
    //  All Registration screens
    registercattle: {
      margin: 50,
      textAlign: 'center',
    },
    registersire: {
      margin: 50,
      textAlign: 'center',
    },
    cattlesummary: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 15,
      textAlign: 'center',
    },
    activitylog: {
      marginTop: 50,
      marginLeft: 50,
      marginRight: 50,
      marginBottom: 15,
      textAlign: 'center',
    },
    registertext : {
      fontSize: 10,
      color: 'grey'
    },
    //
   
    banner: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#F5FCFF',
      justifyContent: 'center',
      // marginLeft:40,  
      // marginRight: 80,
      marginBottom: 15,
  },

  });
export default withNavigation(Registration);