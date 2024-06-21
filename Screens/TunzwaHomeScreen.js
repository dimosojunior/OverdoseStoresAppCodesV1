import { StyleSheet,TextInput,ActivityIndicator, Text,Animated,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalStyles} from '../Styles/GlobalStyles';
import Card from '../Shared/card';import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../useFetch';
import axios from 'axios';
import Header from '../Header/header';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import{LinearGradient} from 'expo-linear-gradient';
import * as SplashScreen from 'expo-splash-screen';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import LotterViewScreen from '../Screens/LotterViewScreen';
import { EndPoint } from "../Constant/links";
import { useFonts } from 'expo-font';

import SlidingServices from '../RenderedComponents/SlidingServices';




const HomeScreen =({navigation}) => {


// To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)

 const {width, height} = Dimensions.get('window');

const { universities:services, isPending, error  } = useFetch(EndPoint + `/OurServices/`);


  
    return (
 


 


// { MWANZO WA container1}
 <View style={[globalStyles.container,{backgroundColor:theme.backgroundColor}]}>

 
   <Header />



{ isPending ? (



  <LotterViewScreen />


  ): (

    <SlidingServices services={services} />

)} 


{/*MWISHO WA SLIDING*/}





       







    </View>
// MWISHO WA container1




  );
};






  
export default HomeScreen;


const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //backgroundColor: 'black',

    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});