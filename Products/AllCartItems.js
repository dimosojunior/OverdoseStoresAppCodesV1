
import { StyleSheet,Platform,TextInput,ActivityIndicator,
  Pressable, Text,Animated,ScrollView, View,Image, 
  Button, FlatList,TouchableOpacity,Modal,
  TouchableWithoutFeedback, Keyboard,Dimensions,
  
   
  KeyboardAvoidingView 
   } from 'react-native';
import React, {useState,useRef, useEffect, useContext} from 'react';

import {globalStyles} from '../Styles/GlobalStyles';

import { EndPoint } from "../Constant/links";
import useFetch from '../useFetch';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import CartLotterView from '../Screens/CartLotterView';
import Header from '../Header/header';
import MinorHeader from '../Header/MinorHeader';

import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {MaterialIcons,Entypo,MaterialCommunityIcons,FontAwesome5, Ionicons,Feather,AntDesign, FontAwesome} from '@expo/vector-icons';



const AllCartItems = ({navigation}) => {


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
const [cart, setCart] = useState([]);
const [userToken, setUserToken] = useState('');
const [shouldReload, setShouldReload] = useState(false);
const [userData, setUserData] = useState({});

const [selectedProduct, setSelectedProduct] = useState(null);
const [quantity, setQuantity] = useState('');
const [isPending, setPending] = useState(true);


useEffect(() => {

   
    checkLoggedIn();
    // Fetch cart items only if the user is authenticated
    if (userToken) {
      fetchCartItems();
    }

  }, [userToken]);

const checkLoggedIn = async () => {
const token = await AsyncStorage.getItem('userToken');
setUserToken(token);
 
};




const fetchCartItems = async () => {

  setPending(true);
  try {
    const response = await axios.get(
      EndPoint + '/ProductsCart/',
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );

    // Check if the response data is an empty array (cart is empty)
    if (Array.isArray(response.data) && response.data.length === 0) {
      // Handle the case when the cart is empty here
      setPending(false);
      setCart([]); // Set cart to an empty array
    } else {
      // Cart is not empty, update the cart state with the data
      setPending(false);
      setCart(response.data);
       
      // Set isOrderButtonVisible to true after adding an item to the cart
     // Check if the displayedItemsCount is greater than 1 and show the order button
   
     // setIsOrderButtonVisible(true);
    


    }
  } catch (error) {
    //console.error('Error fetching cart items:', error);
    setPending(false);
    showAlertFunction("Error fetching cart items");
  }
};












const removeCartItem = (cartId) => {
  setPending(true);

   //navigation.replace('Restaurant Products', { id });
  // Make an API request to delete the item from the cart
  const apiUrl = `${EndPoint}/ProductsDeleteCartItem/?cartId=${cartId}`;
  // console.log("URL",apiUrl);
  
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
        setCart(cart.filter((item) => item.id !== cartId));

        setPending(false);
         //setIsOrderButtonVisible(false);
         //Alert.alert('item is removed successfully from your cart');
         showAlertFunction("item is removed successfully from your cart");

         // navigation.replace('Restaurant Products');  

           // Decrement the displayedItemsCount
     // setDisplayedItemsCount((prevCount) => prevCount - 1);

      // Check if the displayedItemsCount is less than or equal to 1 and hide the order button
       // Check if the displayedItemsCount is less than or equal to 1 and hide the order button
    //     if (displayedItemsCount < 1) {
    //   setIsOrderButtonVisible(false);
    // }


      } 
      else {
        setPending(false);
        // Handle the error if the item couldn't be removed
        
        //Alert.alert('Error', 'Failed to remove item from cart');
        showAlertFunction("Failed to remove item from a cart");
      }
    })
    .catch((error) => {
     setPending(false);
      // Handle the error here, for example, show a user-friendly error message
      //Alert.alert('Error', 'Failed to remove item from cart');
      showAlertFunction("Failed to remove item from cart");
    });
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


const calculateTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  return total;
};

const totalCartPrice = calculateTotalPrice();










const makeOrder = async () => {

 setPending(true);
  //navigation.replace('Restaurant Products');
  //call the print Receipt function
    // navigation.replace('Restaurant Products', { id });
 
  //setIsOrderButtonVisible(false);
  try {
    const response = await axios.post(
      EndPoint + '/ProductsOrder/',
      { 
        total_price: totalCartPrice,
        //table: selectedTable, // Include the selected table
        // CustomerFullName: CustomerFullName,
        // PhoneNumber: PhoneNumber,
        // CustomerAddress: CustomerAddress,
        //room: selectedRoom,
        //Customer: selectedCustomer,
         },

      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );
    

  //setModalVisibleMakeOrder(false);
    // Clear the cart items from the local state
    setCart([]);

    // Set isOrderPlaced to true to hide the "Make Order" button and total price text
     // Set isOrderButtonVisible to false after placing the order
    
    //print();
     //printToFile();

    // After a successful order, update your UI or show a confirmation message
    setPending(false);
    //Alert.alert('Success', 'Order placed successfully!');
    showAlertFunction("Order placed successfully!");


    // Optionally, you can navigate to a screen to display the PDF or HTML table.
    // For example, you can set a state variable to control the visibility of a modal.
    //setModalVisibleReceipt(true);


  } catch (error) {
    setPending(false);
    //console.error('Error creating order:', error);
    showAlertFunction("Error creating order!");

  }
};



const CartCard = ({item, index}) => {
  



 return (



      <Pressable
      style={globalStyles.OverdoseCartItemsContainer} >


        <View 
        style={globalStyles.OverdoseLeftCartItemsContainer}
        >

        {cart && item.product && item.product.product_name && (  
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
            {item.product.product_name}
          </Text>
          )}


          <Text 
          style={globalStyles.OverdosePriceCartItemsText}
        >
          
            Price: Tsh. {formatToThreeDigits(item.price)}/=
          </Text>
          
          <Text
           style={globalStyles.OverdoseIconCartItemsText}
          >
            
        <FontAwesome
        style={globalStyles.OverdoseIcon1CartItems}
          
          name="cart-arrow-down"
          size={15}
          color="black"
        />
           
          </Text>
          <Text
          style={globalStyles.OverdoseDescriptionCartItems}

          >
            quantity: {item.quantity}
          </Text>

       {/*mwanzo wa button*/}
          <TouchableOpacity
           onPress={() => removeCartItem(item.id)}
           style={globalStyles.OverdoseAddButtonContainerCartItems}
                 >
              <Text
               style={globalStyles.OverdoseAddButtonTextCartItems}
            
              >
                Cancel
              </Text>
            </TouchableOpacity>
             {/*mwisho wa button*/}
          
        </View>



        <Pressable 

        style={globalStyles.OverdoseImageContainerCartItems}
        >
        {cart && item.product && item.product.ProductImage ?  
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


 {!isPending ? (

     <View style={[globalStyles.mainContainer
     ,{backgroundColor:theme.backgroundColor}]}>
         
     



  <MinorHeader title="Products Cart"/>

      

<ScrollView>



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
          Products Cart
        </Text>
       
      </View>


















   {cart && cart.length > 0 ? (


      <>
      {cart.map((item, index) => {
        return <CartCard item={item} key={item.id || index} />;
      })}
         </>        


   ) :(
   <View style={[globalStyles.noitemTextContainer,{backgroundColor:theme.backgroundColor}]}>
  <Text style={globalStyles.noitemText}>There is no any cart item! !
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



          <TouchableOpacity
          onPress={() => navigation.navigate('Products Orders')}
           
            style={{
              
              padding: 5,
              width:'70%',
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              // gap: 10,
              marginTop:20,
               backgroundColor: "green",
             borderColor:'green',
             borderWidth:1,
            }}
          >
            
            <Text style={{
             fontSize: 16, 
             //fontWeight: "500", 
             color: "white" ,
             padding:13,
             // backgroundColor: "green",
             // borderColor:'green',
             // borderWidth:1,
             textAlign:'center',
             borderRadius:8,
             //width:'50%',
             fontFamily:'Medium',


           }}>
              View your orders    
       

            </Text>

               <FontAwesome
        style={[{
          
        },globalStyles.OverdoseImageCartItemss]}
          
          name="arrow-right"
          size={25}
          color="white"
        />
          </TouchableOpacity>
   




</View>

  )}  





</ScrollView>






<View style={{
  marginBottom:100,
}}>
  <Text style={{
    color:'white',
  }}>Vuta juu</Text>
</View>


{/*mwanzo kwaajili ya kupress order*/}



{totalCartPrice > 0 ? (
     
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
              Total cart price
            </Text>
            <Text style={{ marginTop: 7, fontSize: 15 }}>Tsh. {formatToThreeDigits(totalCartPrice)}/=</Text>
          </View>

          <TouchableOpacity
          onPress={makeOrder}
           
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
             //fontSize: 16, 
             //fontWeight: "500", 
             color: "white" ,
            // padding:13,
             backgroundColor: "#1f1f1f",
             borderColor:'green',
             borderWidth:1,
             textAlign:'center',
             borderRadius:8,
             width:'100%',
             fontFamily:'Light',

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
              Total cart price
            </Text>
            <Text style={{ marginTop: 7, fontSize: 15 }}>Tsh. {formatToThreeDigits(totalCartPrice)}/=</Text>
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

<CartLotterView />

)}

    

    </>



    )}</>
  );
};

export default AllCartItems;

const styles = StyleSheet.create({});
