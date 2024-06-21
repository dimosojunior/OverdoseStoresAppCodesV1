
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
import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function ViewProducts({navigation, route}) {

	 const { 
    
    InitialPrice,
    price,
    ProductQuantity,
    product_name,
    ProductImage,
    id 
   } = route.params

  

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
const [isPending, setPending] = useState(false);


useEffect(() => {

   
    checkLoggedIn();
    // Fetch cart items only if the user is authenticated
    // if (userToken) {
    //   fetchCartItems();
    // }

  }, [userToken]);

const checkLoggedIn = async () => {
const token = await AsyncStorage.getItem('userToken');
setUserToken(token);
 
};



const addCartItem = async () => {
  if (!quantity) {
  	setPending(false);
    
    //Alert.alert('Error', 'Please enter a quantity of product(s) you want to order');
    showAlertFunction("Please enter a quantity of product(s) you want to order");
    return;
  }

  // Check if the selected quantity is greater than available stock
  if (parseInt(quantity) > ProductQuantity) {
  	setPending(false);
    //Alert.alert('Error', 'Not enough quantity in stock');
    showAlertFunction("Not enough quantity in stock");
    return;
  }

  setPending(true);
//navigation.replace('View Products', { id }); 
  // Find the selected product's price
  const productPrice = price;

  // Calculate the total price for the cart item
  const itemPrice = productPrice * parseInt(quantity);

  setModalVisible(false);
   

  try {
    const response = await axios.post(
      EndPoint + '/ProductsCart/',
      {
        product: id,
        quantity: parseInt(quantity),

      },
      {
        headers: {
          Authorization: `Token ${userToken}`,
        },
      }
    );

    setPending(false);
     
     showAlertFunction(product_name + " " + " was added successfully in your cart");
     //setShouldReload(true); 
      //navigation.replace('Restaurant NewSale Other '); 
        
    // Ensure that the response contains the 'id' of the newly added item
    
      // Update the local cart items list with the new item
      const newItem = {
        id: response.data.id, // Use the 'id' from the response data
        product: id,
        quantity: parseInt(quantity),
        price: itemPrice,
      };
      const updatedCart = [...cart, newItem];
      setCart(updatedCart);




      // Close the modal and reset the selected product and quantity
      // setModalVisible(false);
      setSelectedProduct(null);
      setQuantity('');

     // Increment the displayedItemsCount
    //setDisplayedItemsCount((prevCount) => prevCount + 1);

   


   
  } catch (error) {
     setPending(false);
    //Alert.alert('Error', 'Failed to add item to cart');
    showAlertFunction("Failed to add item to cart");
  }
};




  return (

  	<>{!fontsLoaded ? (<View/>):(

  		  <>
 {!isPending ? (

       <View style={[globalStyles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
         
          <MinorHeader title="Product Details"/>

      





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
          Products Details
        </Text>
       
      </View>









{/*mwanzo wa  MainContainerViewProduct*/}

<View style={globalStyles.MainContainerViewProduct}>
	


{/*mwanzo wa left container*/}
<View style={globalStyles.MainLeftContainerViewProduct}>
{ProductImage ?
  <Image

style={globalStyles.MainLeftContainerMainImageViewProduct}

 source={{
          uri: EndPoint + '/' + ProductImage,
        }}
/>:

  <Image
style={globalStyles.MainLeftContainerMainImageViewProduct}

source={require('../assets/500.png')} 
/>}

<Text style={globalStyles.MainLeftContainerNameTextViewProduct}
>{product_name}</Text>


<Text style={globalStyles.MainLeftContainerDescriptionViewProduct}
>Description Name Description Name Description Name Description Name Description Name Description Name Description Name
Description Name Description Name </Text>





</View>
{/*mwisho wa left container*/}






{/*mwanzo wa Right container*/}
<View style={globalStyles.MainRightContainerViewProduct}>
<TouchableOpacity 
  onPress={() => {
//setSelectedProduct();
setModalVisible(true);
}}
>
<Text style={globalStyles.MainRightAddToCartViewProduct}>Add To Cart</Text>
</TouchableOpacity>

{/*mwanzo wa price container*/}
  <View
        style={globalStyles.PriceContainerPriceViewProduct2}
         >

          <Text
          style={globalStyles.ViewProductDiscountProductsText2}
          >
        Product Price:  Tsh. {InitialPrice == price ? <>
          {InitialPrice}/=
          </>
          :
          <>
          <Text>
         <Text style={globalStyles.strikethroughText}>
          {InitialPrice}/=</Text>  {price}/=
          </Text>
          </>
            }
          </Text>

        </View>

{/*mwisho wa price container*/}




</View>
{/*mwisho wa Right container*/}









</View>
{/*mwisho wa  MainContainerViewProduct*/}










{/*mwanzo wa bottom Container*/}
<View style={globalStyles.BottomContainerViewProduct}>


<Text style={globalStyles.BottomContainerMoreTextViewProduct}>
More Appearance</Text>

<View style={globalStyles.BottomContainerImageContainerViewProduct}>
{ProductImage ?
  <Image

style={globalStyles.BottomContainerImageViewProduct}

 source={{
          uri: EndPoint + '/' + ProductImage,
        }}
/>:

  <Image
style={globalStyles.MainLeftContainerMainImageViewProduct}

source={require('../assets/500.png')} 
/>}

</View>




</View>
{/*mwisho wa bottom Container*/}






{/*mwanzo wa button ya kumake order*/}
          <TouchableOpacity
          style={globalStyles.OverdoseCreateOrderContainerCartItems}
              
            >
              <Text
              style={globalStyles.OverdoseCreateOrderTextCartItems}
              >
                More Appearance
              </Text>
            </TouchableOpacity>
             {/*mwisho wa button ya kumake order*/}




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













{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.KeyboardAvoidingViewModalViewProduct}

    >
    <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ flex: 1,marginTop:height/4, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <View style={globalStyles.ModalViewViewProduct}>
            <Text style={globalStyles.ModalTitleViewProduct}>SELECT PRODUCT</Text>

                    <Text 
                    style={globalStyles.EnterQuntityTextViewProduct}
                    > Quantity</Text>
                    < View style={globalStyles.inputViewProduct}>
                        <FontAwesome style={globalStyles.InputIconViewProduct} name='pencil'/>
                        <TextInput 
                        style={globalStyles.textInputViewProduct}  
                        placeholder=' Quantity' 
                        value={quantity}
                  onChangeText={text => setQuantity(text)}
                  keyboardType="numeric"
                  placeholderTextColor="black"
                        />
                    </View>
                



          
            

            <View style={globalStyles.ButtonConatinerViewProduct}>
                    <TouchableOpacity style={globalStyles.ButtonCloseViewProduct}  onPress={() => setModalVisible(false)} >
                        <Text style={globalStyles.ConfirmCancelButtonTextViewProduct}>CLOSE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalStyles.ButtonAddViewProduct}  
                    onPress={addCartItem} >
                        <Text style={globalStyles.ConfirmCancelButtonTextViewProduct}>CONFIRM</Text>
                    </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </Modal>













</View>



        ):(

<CartLotterView />

)}

    </>



 )}</>
  );
}



const styles = StyleSheet.create({

 
});
