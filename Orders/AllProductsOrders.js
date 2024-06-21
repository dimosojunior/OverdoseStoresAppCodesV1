
import { StyleSheet,Platform,TextInput,ActivityIndicator,
  Pressable, Text,Animated,ScrollView, View,Image, 
  Button, FlatList,TouchableOpacity,Modal,
  TouchableWithoutFeedback, Keyboard,Dimensions,
  
   
  KeyboardAvoidingView 
   } from 'react-native';
import React, {useState,useRef, useEffect, useContext} from 'react';

import {globalStyles} from '../Styles/GlobalStyles';
import { useFocusEffect } from '@react-navigation/native';
import { EndPoint } from "../Constant/links";
import useFetch from '../useFetch';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import LotterViewScreen from '../Screens/LotterViewScreen';
import Header from '../Header/header';
import MinorHeader from '../Header/MinorHeader';

import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome5, Ionicons,Feather,AntDesign, FontAwesome} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getFormatedDate } from "react-native-modern-datepicker";
import DatePicker from "react-native-modern-datepicker";


const AllProductsOrders = () => {

const navigation = useNavigation();
    // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)
 
 const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

 const showAlertFunction = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };


 let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});







 const [modalVisible, setModalVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [orders, setOrders] = useState([]);
  const [mainTotalPrice, setMainTotalPrice] = useState(null);
  const [refresh, setRefresh] = useState(false);

//const [isPending, setisPending] = useState(false);
const [isRange, setisRange] = useState(false);




//Load more
 // const [queryset, setOrders] = useState([]);
const [current_page, setcurrent_page] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [loading, setLoading] = useState(false);
const [endReached, setEndReached] = useState(false)
const [isPending, setPending] = useState(true);


  

 const pullMe =() => {
    setRefresh(true)

    setTimeout (() => {
      setRefresh(false)
    }, 10)
  }


 const [userToken, setUserToken] = useState('');

//UPDATE USER TOKEN
useFocusEffect(
    React.useCallback(() => {
      const updateUserToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        setUserToken(token || '');
      };

      updateUserToken();

      // Listen for the 'updateUserToken' event
      const unsubscribe = navigation.addListener('updateUserToken', updateUserToken);

      // Cleanup the listener when the component unmounts
      return unsubscribe;
    }, [navigation])
  );






useEffect(() => {

   
    checkLoggedIn();
    // Fetch cart items only if the user is authenticated
    if (userToken) {
     setLoading(true)
     getProducts();;
    }

  }, [userToken]);


const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  setUserToken(token);
  
  
 
};





  useEffect(() => {
  // Calculate the main total price whenever orders change
  if (orders.length > 0) {
    const total = orders.reduce((acc, order) => acc + order.total_price, 0);
    setMainTotalPrice(total);
  }
}, [orders]);

const getProducts = () => {
  if (endReached) {
    setLoading(false);
    setIsLoading(false);
    setPending(false);
    return;
  } else {
    setIsLoading(true);
    const url = EndPoint + `/ProductsOrder/?page=${current_page}&page_size=2`;
    
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${userToken}`, // Add the Authorization header here
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.orders.length > 0) {
          setOrders([...orders, ...data.orders]);
          setIsLoading(false);
          setLoading(false);
          setcurrent_page(current_page + 1);
          setPending(false);
        } else {
          setIsLoading(false);
          setEndReached(true);
          setLoading(false);
          setPending(false);
        }
      });
  }
};





 const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="red" />
        </View> : null
    );
  };

 




  // Utility function to format the date as "YYYY-MM-DD"
  const formatDate = (dateString) => {
    if (!dateString) {
      return null;
    }
    const [year, month, day] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };



const formatToThreeDigits = (number) => {
  if (number !== null) {
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 0, // Ensure two decimal places
      maximumFractionDigits: 2, // Limit to two decimal places
      minimumIntegerDigits: 1, // Ensure at least one integer digit
    });
  }
  return null;
};











const ReportCard = ({item, index}) => {
  



 return (

<>
     {item.total_price > 0 && (

      <Pressable
      style={globalStyles.OverdoseCartItemsContainer} >


        <View 
        style={globalStyles.OverdoseLeftCartItemsContainer}
        >

         
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Order ID:  {item.id}
          </Text>
          
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Order total price:  Tsh. {formatToThreeDigits(item.total_price)}/=
          </Text>

          <Text 
          style={globalStyles.OverdosePriceCartItemsText}
        >
          
            Ordered By: {item.Customer}
          </Text>
          
          <Text
           style={globalStyles.OverdoseIconCartItemsText}
          >
            
       
           
          </Text>
          <Text
          style={globalStyles.OverdoseDescriptionCartItems}

          >
            
             Date: {formatDate(item.created)}
          </Text>

       {/*mwanzo wa button*/}
       {item.closed_order_state == true ? (
          <TouchableOpacity
           
           style={globalStyles.OverdoseAddButtonContainerCartItems}
                 >
              <Text
               style={globalStyles.OverdoseAddButtonTextCartItems}
            
              >
                Closed
              </Text>
            </TouchableOpacity>
            ):(
           <TouchableOpacity
           
           style={globalStyles.OverdoseAddButtonContainerCartItems}
                 >
              <Text
               style={globalStyles.OverdoseAddButtonTextCartItems}
            
              >
                Pending
              </Text>
            </TouchableOpacity>

            )}
             {/*mwisho wa button*/}
       
          
        </View>












        <TouchableOpacity 
        onPress={() => navigation.navigate('Products Orders Items', item)}

        style={[{
          justifyContent:'flex-end',
          alignItems:'flex-end',

        },globalStyles.OverdoseImageContainerCartItems]}
        >
        
         

            <MaterialCommunityIcons
        style={[{
          justifyContent:'center',
          alignItems:'center',


        },globalStyles.OverdoseImageCartItems]}
          
          name="gesture-tap-button"
          size={60}
          color="green"
        />


        </TouchableOpacity>


      </Pressable>


)}
     </>



)

}
  
  return (

    <>{!fontsLoaded ? (<View/>):(


    <>


 {!isPending ? (

     <View style={[globalStyles.mainContainer
     ,{backgroundColor:theme.backgroundColor}]}>
         
     



  <MinorHeader title="Orders"/>

      





      {/* Greetings */}
      <View style={{marginVertical: 12}}>
        <Text
        style={globalStyles.OverdoseMainHeaderText}
         >
          Overdose Stores
        </Text>
        <Text
        style={globalStyles.OverdoseMinorHeaderText}
         >
          We believe in styles
        </Text>
      </View>


         <View style={{marginVertical: 12}}>
        <Text
        style={globalStyles.OverdoseOurProductsHeaderText}
         >
          Your Orders
        </Text>
       
      </View>


















   {orders && orders.length > 0 ? (


      <>
     
 {setLoading===true?(<ActivityIndicator/>):(
      <>
      
      <FlatList
        data={orders}
        renderItem={ReportCard}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={renderLoader}
        onEndReached={getProducts}
        onEndReachedThreshold={0.5}
      />
      </>
      )}
         </>        


   ) :(
   <View style={[globalStyles.noitemTextContainer,{backgroundColor:theme.backgroundColor}]}>
  <Text style={globalStyles.noitemText}>There is no any created order! !
  </Text>


  <View style={globalStyles.ErrorImageContainerHomePage}>
      <Image 
          source={require('../assets/500.png')}  
           style={globalStyles.ErrorImageHomePage}
          
          //source={item.ArticleImage} 
          //resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
          
          />
  </View>


</View>

  )}  










<View style={{
  marginBottom:100,
}}>
  <Text style={{
    color:'white',
  }}>Vuta juu</Text>
</View>


{/*mwanzo kwaajili ya kupress order*/}



{orders && orders.length > 0 ? (
     
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
            backgroundColor: "white",
            position:'absolute',
            bottom:0,
            width:'100%',

          }}
        >
          <View style={{
            width:'50%',
          }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Total Orders price
            </Text>
            <Text style={{ marginTop: 7, fontSize: 15 }}>Tsh. {formatToThreeDigits(mainTotalPrice)}/=</Text>
          </View>

          <TouchableOpacity
          
           
            style={{
              
              padding: 10,
              width:'50%',
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            
            <Text style={{
             fontSize: 16, 
             fontWeight: "500", 
             color: "white" ,
             padding:13,
             backgroundColor: "#1f1f1f",
             borderColor:'green',
             borderWidth:1,
             textAlign:'center',
             borderRadius:8,
             width:'100%',

           }}>
              Continue with payment
            </Text>
          </TouchableOpacity>
        </Pressable>
     
):(



<Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
            backgroundColor: "white",
            position:'absolute',
            bottom:0,
            width:'100%',

          }}
        >
          <View style={{
            width:'50%',
          }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              0 order
            </Text>
            <Text style={{ marginTop: 7, fontSize: 15 }}>Tsh. {formatToThreeDigits(mainTotalPrice)}/=</Text>
          </View>

          <TouchableOpacity
          onPress={() => navigation.navigate('Home Stack')}
           
            style={{
              
              padding: 10,
              width:'50%',
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            
            <Text style={{
             fontSize: 16, 
             fontWeight: "500", 
             color: "white" ,
             padding:13,
             backgroundColor: "#1f1f1f",
             borderColor:'green',
             borderWidth:1,
             textAlign:'center',
             borderRadius:8,
             width:'80%',

           }}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </Pressable>



)}



 <AwesomeAlert
                show={showAlert}
                showProgress={false}
                // title="Overdose Stores"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="green"
                onConfirmPressed={hideAlert}
                 confirmButtonStyle={globalStyles.alertButton}
                contentContainerStyle={globalStyles.alertContainer}
                customView={
                  <View style={globalStyles.alertContent}>
                    <Image source={require('../assets/splashe.png')} style={globalStyles.alertImage} />
                    <Text style={globalStyles.alertTitle}>Overdose Stores</Text>
                    <Text style={globalStyles.alertMessage}>{alertMessage}</Text>
                  </View>
                }
              />




     </View> 


            ):(

<LotterViewScreen />

)}

    

    </>



    )}</>
  );
};

export default AllProductsOrders;

const styles = StyleSheet.create({});
