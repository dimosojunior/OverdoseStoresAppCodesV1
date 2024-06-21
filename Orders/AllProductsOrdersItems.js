
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


const AllProductsOrdersItems = ({route ,navigation }) => {
    

    const { 
    total_price,
    order_status,
    closed_order_state,
    id 
   } = route.params
//const navigation = useNavigation();
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
  const [queryset, setQueryset] = useState([]);
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
//const [isPending, setPending] = useState(true);
const [isPending, setisPending] = useState(false);
const [userData, setUserData] = useState({});

  

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
     //getProducts();;
    }

  }, [userToken]);


 useEffect(() => {
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);
        
        //console.log("USERDATA ARE");
        //console.log(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };



const checkLoggedIn = async () => {
  const token = await AsyncStorage.getItem('userToken');
  setUserToken(token);
  
  
 
};




 useEffect(() => {
    // Make a GET request to fetch queryset and main total price
    axios.get(`${EndPoint}/GetAllProductsOrderItems/?id=${id}`)


      .then((response) => {
        const { queryset, main_total_price } = response.data;
        setQueryset(queryset);
        setisPending(true);
         setisRange(false);
        setMainTotalPrice(main_total_price);
        
      })
      .catch((error) => {
        
        setisPending(true);
      });
  }, []);





const removeOrderItem = (cartId) => {
  
 
   //navigation.replace('Products Orders Items', {id}); 
   //navigation.replace('Restaurant Reports');
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/DeleteProductsOrderItem/?id=${id}&cartId=${cartId}`;
  
  
  axios
    .delete(apiUrl, {
      headers: {
        Authorization: `Token ${userToken}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.status === 204) {
        // Item removed successfully, update the cartItems state
        setQueryset(queryset.filter((item) => item.id !== cartId));
         //setIsOrderButtonVisible(false);
        // Alert.alert('item is removed successfully from your order');
        showAlertFunction("item is removed successfully from your order");

         // navigation.replace('Restaurant NewSale Other ');  

     

      } 
      // else {
      //   // Handle the error if the item couldn't be removed
        
      //   //Alert.alert('Error', 'Failed to remove item from cart');
      //   //Alert.alert('item is removed successfully from your order');
      //   showAlertFunction("item is removed successfully from your order");
      // }
    })
    .catch((error) => {
      
      // Handle the error here, for example, show a user-friendly error message
      //Alert.alert('Error', 'Failed to remove item from cart');
      //Alert.alert('item is removed successfully from your order');
      showAlertFunction("item is failed successfully from your order");
    });
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



      <Pressable
      style={globalStyles.OverdoseCartItemsContainer} >


        <View 
        style={globalStyles.OverdoseLeftCartItemsContainer}
        >

         {item.product.product_name && (
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Product Name:  {item.product.product_name}
          </Text>)}

          
          
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Total Price:  Tsh. {formatToThreeDigits(item.price)}/=
          </Text>

           <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Quantity:  {item.quantity}
          </Text>

           <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
           Product Price:  {formatToThreeDigits(item.product.price)}
          </Text>

          <Text 
          style={globalStyles.OverdosePriceCartItemsText}
        >
          
            Ordered By: {item.order.Customer}
          </Text>
          
          <Text
           style={globalStyles.OverdoseIconCartItemsText}
          >
            
       
           
          </Text>
         
          <TouchableOpacity
          onPress={() => removeOrderItem(item.id)} 
           
           style={globalStyles.OverdoseAddButtonContainerCartItems}
                 >
              <Text
               style={globalStyles.OverdoseAddButtonTextCartItems}
            
              >
                Cancel order
              </Text>
            </TouchableOpacity>
           
       
          
        </View>












      

        <Pressable 

        style={globalStyles.OverdoseImageContainerCartItems}
        >
        {item && item.product && item.product.ProductImage ?  
          <Image
           style={globalStyles.OverdoseImageCartItems}
        source={{
          uri: EndPoint + '/' + item.product.ProductImage
        }}
          />:

           <Image
           style={globalStyles.OverdoseImageCartItems}
        
            source={require('../assets/500.png')} 
          />}



        </Pressable>


      </Pressable>






)

}
  
  return (

    <>{!fontsLoaded ? (<View/>):(


    <>


 {isPending ? (

     <View style={[globalStyles.mainContainer
     ,{backgroundColor:theme.backgroundColor}]}>
         
     



  <MinorHeader title="Order Items"/>

      





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
           Order Items
        </Text>
       
      </View>


















   {queryset && queryset.length > 0 ? (


      <>
     

      <FlatList
        data={queryset}
        renderItem={ReportCard}
        keyExtractor={(item) => item.id.toString()}
        // ListFooterComponent={renderLoader}
        // onEndReached={getProducts}
        // onEndReachedThreshold={0.5}
      />
     
         </>        


   ) :(
   <View style={[globalStyles.noitemTextContainer,{backgroundColor:theme.backgroundColor}]}>
  <Text style={globalStyles.noitemText}>There is no any  order items! !
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



{queryset && queryset.length > 0 ? (
     
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
            <Text style={{ marginTop: 7, fontSize: 15 }}>Tsh. {formatToThreeDigits(total_price)}/=</Text>
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
             width:'80%',

           }}>
              Place Order
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

export default AllProductsOrdersItems;

const styles = StyleSheet.create({});
