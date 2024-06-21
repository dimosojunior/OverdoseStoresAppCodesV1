
import {DrawerItemList,createDrawerNavigator} from '@react-navigation/drawer';

import {NavigationContainer, DarkTheme,DefaultTheme} from '@react-navigation/native';


import MyStack from '../Stack/MyStack';


import { StyleSheet,ScrollView,ImageBackground,TouchableOpacity,Modal, Dimensions,Image,Switch, Text, View, Button } from 'react-native';

import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';


import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import {useFonts} from 'expo-font';
import Header from '../Header/header';
import MyTab from '../Tab/MyTab';
import Test from '../Screens/Test';
import InventoryProductsCategories from '../Inventory/InventoryProductsCategories';
// import Test2 from '../Screens/Test2';
import WelcomeScreen from '../Screens/WelcomeScreen';
import {globalStyles} from '../Styles/GlobalStyles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from "../Constant/links";
import AllProductsOrders from '../Orders/AllProductsOrders';
import ReportsHomeScreen from '../Reports/ReportsHomeScreen';
import CustomerScreen from '../Screens/CustomerScreen';


const Drawer = createDrawerNavigator();
function MyDrawer(){


     let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

const [modalVisible, setModalVisible] = useState(false);

  const {width,height} = Dimensions.get('window');

  const [darkMode, setdarkMode] = useState(false)
  //const theme = useContext(themeContext)
const navigation = useNavigation();
const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState('');




  useEffect(() => {
    AsyncStorage.getItem("userToken").then(token => {
      setUserToken(token)
    })
    fetchUserData();
  }, [userData]);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);

        //console.log(parsedUserData);
        //console.log(userDataJSON);
      }
    } catch (error) {
      // console.log(error);
    }
  };


 useEffect(() => {
    checkLoggedIn();


  }, [userToken]);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('userToken');
    setUserToken(token);
  };





//kwa ajili ya kuchange theme
  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setdarkMode(data)
      //console.log(data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])














 const handleLogout = async () => {
    try {
      if (!userToken) {
        
        return;
      }

      // Make a POST request to your Django logout API
      const response = await axios.post(
        EndPoint + `/Account/logout_user/`,
        null,
        {
          headers: {
            Authorization: `Token ${userToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // If the logout was successful, remove the user token from AsyncStorage
      if (response.status === 200) {
        await AsyncStorage.removeItem('userToken', () => {
          setModalVisible(false);
          // Callback function to navigate to the Signin screen after token removal
          navigation.navigate('Signin Stack');
      //     navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'Signin Stack' }],
      // });

        });
        
      } else {
        console.log('Failed to logout');
      }
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };


	return(

<>{!fontsLoaded ? (<View/>):(

   <Drawer.Navigator
       //initialRouteName="MyStack"
       drawerPosition = "left"
       drawerType="front"
       // edgeWidth={100}
       hideStatusBar={true}
       overlayColor="#000000"
        drawerContent={
          (props) => {

             return (
            <>
              <View style={{
                // backgroundColor: 'rgb(5,5,49)',
              }}>
                <ScrollView>

                  <View
                    style={{
                      // height: height,
                      width: '100%',
                      //justifyContent: "space-between",
                      //alignItems: "center",
                      borderBottomColor: "green",
                      borderBottomWidth: 1,
                      marginBottom: 25,
                      //flexDirection:'row',
                      //paddingHorizontal:10,

                    }}
                  >

                   <View style={{
                width:'100%',
               }}>
                       <Image
                      source={require('../assets/bk.jpg')}
                       
                        style={{
                          height: 170,
                          width: '100%',
                          borderRadius: 10,
                          marginBottom: 10,
                          marginTop: 0,
                        }}
                      />
                    

                    </View>

               <View style={{
                width:'100%',
                paddingHorizontal:10,
               }}>
                    <Text style={{
                      // fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily:'Regular',
                      color: 'black',
                      //fontSize:22,
                    }}>OVERDOSE STORES</Text>

                        <Text style={{
                      // fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily:'Light',
                      color: 'green',
                      //fontSize:16,
                    }}>We believe in styles</Text>

                        <Text style={{
                      // fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily:'Light',
                      color: 'black',
                      //fontSize:16,
                      textAlign:'left',
                      marginLeft:10,
                    }}>Kinondoni - Biafra</Text>

                     <Text style={{
                      // fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily:'Light',
                      color: 'black',
                     // fontSize:16,
                      textAlign:'left',
                      marginLeft:10,
                    }}>+255 748 627 700</Text>
                 </View>

                  </View>

                  <DrawerItemList {...props} />









            
              



                </ScrollView>
              </View>







  
                    
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left:10,
                    // right: width/2 - 70,
                    backgroundColor: '#1f1f1f',
                    padding: 10,
                    borderRadius: 6,
                    width:'80%',
                    justifyContent:'center',
                    alignItems:'center',
                    padding:15,
                    borderWidth:1,
                    borderColor:'green',
                    elevation:3,
                    


                  }}
                  // onPress={handleLogout}
                  onPress={() => {

                    setModalVisible(true);
                  }}
                >
                  <Text style={{
                   color: '#fff',
                    fontFamily:'Light',
                    //fontSize:18,

                  }}>Sign Out</Text>
                </TouchableOpacity>






      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
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
        // backgroundColor: 'red',
         backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent white overlay
          }}>
          <View style={globalStyles.LogoutModalViewViewProduct}>
         <Text style={{
            textAlign:'center',
            color:'white',
            //fontSize:18,
            fontFamily:'Medium',
            marginBottom:20,
          }}>Hello {userData ? userData.username : ''}</Text>

          <Text style={{
            textAlign:'center',
            color:'white',
            //fontSize:18,
            fontFamily:'Light',
            marginBottom:20,
          }}>Are you sure you want to logout ?</Text>
       
            <View style={globalStyles.LogoutButtonConatinerViewProduct}>
         <TouchableOpacity 
          style={globalStyles.LogoutButtonCloseViewProduct}  
          onPress={()=> setModalVisible(false)}
           >
              <Text style={globalStyles.LogoutConfirmCancelButtonTextViewProduct}>Cancel </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={globalStyles.LogoutButtonAddViewProduct}  
          onPress={handleLogout}
           >
              <Text style={globalStyles.LogoutConfirmCancelButtonTextViewProduct}>Confirm</Text>
          
          </TouchableOpacity>


                    
            </View>
          </View>
        </View>
        </ScrollView>
        </ImageBackground>
      </Modal>





            </>

          )
        }
      }
          
       screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        overlayColor:'#1f1f1f',
        hideStatusBar:true,
        // header: () => (
        //   <Header />
        // ),
        drawerStyle: {
          // backgroundColor: 'rgb(5,5,49)',
          //backgroundColor: '#F0F0F0',
          backgroundColor:'#c0c0c0',
          width: width /2 + 40 //260
        },
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "black",
        headerTitleStyle: {
          //fontWeight: "bold"
           fontFamily:'Light',
        },
        drawerLabelStyle: {
          color: "black",
          //fontSize: 16,
           fontFamily:'Light',
           //fontSize:18,

        },
        // drawerIconStyle: {
        //   color: "white",
        //   fontSize:16,
        //   border:4,
        //   borderColor:'red',

        // }
      }}
    >



   {/*  <Drawer.Screen
          name="Welcome"
          options={{
            drawerLabel: "Welcome",
            title: "Welcome",
            
            drawerIcon: () => (
              <MaterialIcons name="home" size={40} color="green" />
            )
          }}
          component={WelcomeScreen}
        />

*/}



        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            
            drawerIcon: () => (
              <MaterialIcons name="home" size={30} color="brown" />
            )
          }}
          component={MyStack}
        />


          <Drawer.Screen
          name="Inventory"
          options={{
            drawerLabel: "Inventory",
            title: "Inventory",
            
            drawerIcon: () => (
              <FontAwesome name="first-order" size={30} color="brown" />
            )
          }}
          component={InventoryProductsCategories}
        />


          <Drawer.Screen
          name="Reports"
          options={{
            drawerLabel: "Reports",
            title: "Reports",
            
            drawerIcon: () => (
              <FontAwesome name="book" size={30} color="brown" />
            )
          }}
          component={ReportsHomeScreen}
        />



            <Drawer.Screen
          name="Customers"
          options={{
            drawerLabel: "Customers",
            title: "Customers",
            
            drawerIcon: () => (
              <FontAwesome name="user-circle" size={30} color="brown" />
            )
          }}
          component={CustomerScreen}
        />



 



     

       







           


  




{/*<Switch 

value={darkMode}
onValueChange={(value) => {setdarkMode(value);
  EventRegister.emit('ChangeTheme', value)
}}
/>*/}









      
      </Drawer.Navigator>
    
		
)}</>


		);
}
export default MyDrawer;




const styles = StyleSheet.create({
    menuicon: { 

       // color:'black', 
        


    },

     });