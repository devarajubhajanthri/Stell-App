import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import {createMaterialTopTabNavigator } from 'react-navigation';



import Breed from '../containers/breed/Breed';
import Health from '../containers/health/Health';
import Nutrition from '../containers/nutrition/Nutrition';
import Registration from '../containers/registration/Registration';

// import Registercattle from '../containers/registration/registercattle/Registercattle'
// import Registersire from '../containers/registration/registersire/Registersire'
// import Cattlesummary from '../containers/registration/cattlesummary/Cattlesummary'
// import Activitylog from '../containers/registration/activitylog/Activitylog'

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome, { Icons } from "react-native-fontawesome";


export const MyTabs = createMaterialTopTabNavigator ({
  
        Registration: {screen: Registration, 
            navigationOptions: {
                tabBarIcon: <Image style={{marginTop:10}} source={ require('../asset/images/registration.png')}/>,
            }
        },

        Health: {screen: Health,
            navigationOptions: {
                tabBarIcon: <Image style={{marginTop:10}} source={ require('../asset/images/health.png')}/>,
            }
        },

        Breed: {screen: Breed,
            navigationOptions: {
                tabBarIcon: <Image style={{marginTop:10}} source={ require('../asset/images/breed.png')}/>,
                showIcon: true
            }
        },

        Nutrition: {screen: Nutrition, 
            navigationOptions: {
                tabBarIcon: <Image style={{marginTop:10}} source={ require('../asset/images/nutrition.png')}/>,
            }
        },

    },
    
    {
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'grey',
            inactiveTintColor: 'grey',
            labelStyle: {
              fontSize: 8,
              marginTop: 22
            },
            style: {
              backgroundColor: 'white',
            
            },
            indicatorStyle: {
                backgroundColor: 'grey',
            },
          }

    }
   )

   const styles = StyleSheet.create({
    //    registration: {
    //        matginTop: 10
    //    },

    //    health: {
    //     matginTop: 10
    //    },

    //    breed: {
    //     matginTop: 10
    //    },

    //    nutrition: {
    //     matginTop: 10
    //    },

   })

export default MyTabs