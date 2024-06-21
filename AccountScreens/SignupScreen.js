
import React, { useState, useEffect } from 'react';

import { View,SafeAreaView,ImageBackground, TextInput, Alert, Image, StyleSheet, ActivityIndicator, Text, Dimensions, ScrollView, Touchable, TouchableOpacity } from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { EndPoint } from '../Constant/links';
import {globalStyles} from '../Styles/GlobalStyles';
import LottieView from 'lottie-react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Ionicons, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import {useFonts} from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import { COLORS, SIZES } from '../Screens/src/Constant';
import LotterViewScreen from '../Screens/LotterViewScreen';

const {width,height} = Dimensions.get('window');
const SignupScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});


  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

   const showAlertFunction = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };



  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [password2, setPassword2] = useState('');

  const [phone, setPhone] = useState('');
  //const [profile_image, setProfile_image] = useState('');
  

  const [error, setError] = useState(null); // State to hold the error message
const [isPending, setPending] =useState(false);
const emailRegex = /\S+@\S+\.\S+/;

const [errorMessage, setErrorMessage] = useState('');

const handleErrorMessage = (error) => {
    if (error.response) {
      // The request was made and the server responded with an error status code
      // if (error.response.status === 401) {
      //   showAlertFunction('Registration error. Please try again later.');
      // } else if (error.response.status === 404) {
      //   showAlertFunction('Not Found: The requested resource was not found.');

      // } 
      // else {
      //   showAlertFunction('An error occurred while processing your request.');
      // }
    }  if (error.message === 'Network Error') {
      showAlertFunction('Network Error: Please check your internet connection.');
    } else {
      showAlertFunction('Registration error. Please try again later.');
    }
  };

  const handleRegistration = async () => {
    // Reset the error message
    setError(null);

    // Validation checks
    if (!email && !password && !username && !phone) {
      //setError('All fields are required');
      showAlertFunction("Please fill in all fields correctly");
      return;
    }

    if (!email) {
      //setError('please enter your valid email');
       showAlertFunction("Please enter your valid email correctly");
      return;
    }

    if (!password) {
      //setError('please enter your password');
       showAlertFunction("Please enter your password");
      return;
    }


     if (password !== password2) {
      showAlertFunction("Passwords do not match");
      return;
    }

    // Validate email format
  
  if (!emailRegex.test(email)) {
    showAlertFunction("Please enter a valid email address");
    return;
  }

  // Validate password length
  if (password.length < 4) {
    showAlertFunction("Password must be at least 4 characters long");
    return;
  }

    if (!username) {
     // setError('please enter your username');
      showAlertFunction("please enter your username");
      return;
    }

    if (!phone) {
      //setError('please enter your phone number');
       showAlertFunction("please enter your phone number");
      return;
    }

    setPending(true);

    try {
      const response = await axios.post(
        EndPoint + '/Account/register_user/', {
        email: email,
        password: password,
        username: username,
        phone: phone,
      });
      //Alert.alert("You have registered Successfully");
       showAlertFunction("You have registered Successfully, you can login now");
      navigation.replace('Signin Stack');

      const token = response.data.token; // Extract the token from the response
      // You can now save the token to your app's state, AsyncStorage, or Redux store
    } catch (error) {
      if (error.response) {
        if (error.response.data.email) {
         // setError('Email already exists');
          showAlertFunction("Email already exists");
          setPending(false);
        } else if (error.response.data.username) {
          //setError('Username already exists');
          showAlertFunction("Username already exists");
          setPending(false);
        }else if (error.response.data.phone) {
          //setError('Phone number already exists');
          showAlertFunction("Phone number already exists");
          setPending(false);
        }


      } else {
        //setError('Registration error. Please try again later.');
        //showAlertFunction("Registration error. Please try again later.");
        handleErrorMessage(error);
        setPending(false);
      }
    }
  };

    return(

        <>{!fontsLoaded ? (<View/>):(


          <>
 {!isPending ? (

        <View style={styles.container}>
            <ImageBackground

                source={require('../assets/pp3.png')}
                style={{
                    flex: 1,
                    opacity:1,
                }}
                resizeMode= "cover"
            >
                <ScrollView 
                keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>OVERDOSE STORES</Text>
                        <Text style={styles.subtitle}>We believe in styles</Text>
                   
                       <Image
                        source={require('../assets/pp2.png')}
                        style={styles.ImageAccount}
                            
                          />

                    </View>


                    <View style={styles.dataContainer}>
                    <Text 
                    style={globalStyles.dataContainerFormTitle}
                    >Signup here</Text>
                        <TextInput 
                        placeholder='Email' 
                        style={[styles.textinput,{
                            width:width-100
                        }]} 
                        placeholderTextColor={COLORS.white}
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={text => setEmail(text)} 
                        />

                         <TextInput 
                        placeholder='Username' 
                        style={[styles.textinput,{
                            width:width-100
                        }]} 
                        placeholderTextColor={COLORS.white}
                         value={username}
                          onChangeText={setUsername}
                        />

                         <TextInput 
                        placeholder='Phone Number' 
                        style={[styles.textinput,{
                            width:width-100
                        }]} 
                        placeholderTextColor={COLORS.white}
                         value={phone}
                          onChangeText={setPhone}
                          keyboardType="numeric"
                        />

                         <TextInput 
                        placeholder='Password' 
                        style={[styles.textinput,{
                            width:width-100
                        }]} 
                        placeholderTextColor={COLORS.white}
                        secureTextEntry={true} 
                          value={password}
                        onChangeText={setPassword}
                        />


                         <TextInput 
                        placeholder='Confirm Password' 
                        style={[styles.textinput,{
                            width:width-100
                        }]} 
                        placeholderTextColor={COLORS.white}
                        secureTextEntry={true} 
                          value={password2}
                         onChangeText={setPassword2}
                        />







                    </View>

                    {!isPending &&
                <TouchableOpacity 
                        onPress={handleRegistration}
                        >
                    <View style={styles.btnContainer}>
                        
                            <View style={styles.button1}>
                                <Text style={styles.btnText}>SIGN UP</Text>
                            </View>
                        
                        </View>
                    </TouchableOpacity>}

                     {/* {isPending &&
                         <View style={styles.btnContainer}>
                        <TouchableOpacity 
                        
                        >
                            <View style={styles.button1}>
                               
                             <ActivityIndicator size="large" color="red" /> 
                            </View>
                        </TouchableOpacity>
                     
                    </View>}*/}

                    <View style={styles.bottomContainer}>
                        <TouchableOpacity 
                         onPress={() => navigation.navigate("Signin Stack")}
                        >
                            <Text style={styles.text}>Already have an account ? | Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>

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
    )
}

export default SignupScreen;



const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent:'center',
    },
    topContainer: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent:'center',

    },
    title: {
        color: COLORS.white,
        // fontWeight: 'bold',
        // fontSize: SIZES.h1 * 1.5,
        fontFamily:'Medium',
    },
    subtitle: {
        color: COLORS.white,
        // fontSize: SIZES.h4,
        paddingTop: 3,
        textAlign:'center',
        marginBottom:15,
        fontFamily:'Light',
    },
    dataContainer: {
        marginTop: 10,
        alignItems: 'center',
         
    },

    dataContainerForPassword: {
      color: COLORS.white,
        fontSize: SIZES.h3,
        // borderBottomColor: COLORS.lightGrey,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginTop: 50,
        padding:10,
        borderRadius:8,
        width:width-100,
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        
         
    },

    textinput: {
        color: COLORS.white,
        //fontSize: SIZES.h3,
        // borderBottomColor: COLORS.lightGrey,
        borderColor: COLORS.lightGrey,
        borderWidth: 1,
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 15,
        padding:10,
        borderRadius:8,
        fontFamily:'Light',
    },

    textinputi: {
        color: COLORS.white,
        //fontSize: SIZES.h3,
        
        
        marginHorizontal: 0,
        fontFamily:'Light',
        
        padding:0,
        
    },

    btnContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button1: {
        backgroundColor: COLORS.primary,
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        width:'50%',
        borderWidth:1,
        borderColor:'white',
    },
    btnText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: SIZES.h4,
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: COLORS.blue,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginRight: 10,
    },
    text: {
        color: 'lightblue',
        textAlign: 'center',
        marginTop: 10,
        //fontWeight: '600',
        //fontSize: SIZES.h5,
        //fontSize:18,
       fontFamily:'Light'
    },
    bottomContainer: {
        justifyContent: 'center',
        marginTop: 20,
    },


ImageAccountContainer:{
  alignItems:'center',


},

ImageAccount:{
   // width: width/2 + 120,
  //  width: width/2 - 130,
  // height: height/10,
   width: 80,
  height: 80,
  marginBottom: 10,
  borderRadius: 100,
  // borderWidth:1,
  // borderColor:'white',
  // opacity:1,
  // borderTopRightRadius:200,
  // borderBottomLeftRadius:50,

},

});