
import { StyleSheet, Text, View, Image,TouchableOpacity, 
  ImageBackground,
  Modal,
  KeyboardAvoidingView,
  ScrollView,

  Platform
} from 'react-native';
import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../Header/header';
import MinorHeader from '../Header/MinorHeader';
// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';
import {useFonts} from 'expo-font';
import axios from 'axios';
import { EndPoint } from "../Constant/links";
import LotterViewScreen from '../Screens/LotterViewScreen';

const { width, height } = Dimensions.get('window');
export default function ReportsHomeScreen( ) {

    let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});


  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)
const [modalVisible, setModalVisible] = useState(false);

const navigation = useNavigation();

 
const [isPending, setisPending] = useState(true)




  //KWA AJILI YA KUCOUNT ALL  ORDERS
 const [TotalclosedOrders, setTotalclosedOrders] = useState(0);
 const [TotalUnclosedOrders, setTotalUnclosedOrders] = useState(0);
  
  useEffect(() => {

    // Make an API request to your Django API
    axios
      .get(EndPoint+'/CountClosedandUnClosedProductsOrder/')
      .then((response) => {
        const { _pending_orders, _approved_orders } = response.data;
        
        setTotalUnclosedOrders(_pending_orders);
        setTotalclosedOrders(_approved_orders);
         setisPending(false);
         console.get("GET GET");

       
        
        //setIsPending(false);
      })
      .catch((error) => {
        setisPending(false);
        
        //setIsPending(false);
      });
  }, []);


  return (
  



    <>{!fontsLoaded ? (<View/>):(

      <>


 {/*{isPending ? (*/}


    <View style={[globalStyles.ReportsmainContainer,{backgroundColor:theme.backgroundColor}]}>
       
       <MinorHeader title="Reports"/>








      
       <ImageBackground

                source={require('../assets/pp3.png')}
                style={{
                    flex: 1,
                    opacity:1,
                    width:'100%',
                }}
                resizeMode= "cover"
            >
    
    <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ 
          flex: 1,
          marginTop:height/4, 
          justifyContent: 'center', 
          alignItems: 'center',
         //backgroundColor: 'black'
         backgroundColor: 'rgba(0, 0, 0, 0)',
          }}>
          <View style={globalStyles.HeadersModalViewViewProduct}>

          <Text style={{
            textAlign:'center',
            color:'white',
            //fontSize:20,
            fontFamily:'Medium',
            marginBottom:20,
          }}>Select Reports Type</Text>
       
            <View style={globalStyles.HeadersButtonConatinerViewProduct}>
                   <TouchableOpacity 
                    style={globalStyles.HeadersButtonCloseViewProduct}  
                    onPress={()=> navigation.navigate('Reports For All Products')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>
                        All Products Pending Orders - 
                        
                         <Text style={{
                          color:'yellow',
                          fontFamily:'Bold'
                        }}>
                        {TotalUnclosedOrders} 
                        </Text>

                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalStyles.HeadersButtonAddViewProduct}  
                    onPress={()=> navigation.navigate('Reports Products Categories')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>Pending Orders by Products Categories</Text>
                    
                    </TouchableOpacity>


                    <TouchableOpacity 
                    style={globalStyles.HeadersButtonClose3ViewProduct}  
                    onPress={()=> navigation.navigate('All Closed Orders')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>
                        Approved Orders - 
                        <Text style={{
                          color:'yellow',
                          fontFamily:'Bold'
                        }}>
                        {TotalclosedOrders} 
                        </Text>

                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                    style={globalStyles.HeadersButtonClose4ViewProduct} 
                    onPress={()=> navigation.navigate('All Closed Orders Product Categories')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>Approved Orders By Products Categories </Text>
                    </TouchableOpacity>





                   
            </View>
          </View>
        </View>
        </ScrollView>
        </ImageBackground>
      
        </View>  


{/*                 ):(

<LotterViewScreen />

)}
*/}
    

    </>

      )}</>
  );
}

const styles = StyleSheet.create({
  
     });

