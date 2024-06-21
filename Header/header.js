
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


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';
import React, {useState, useEffect, useContext} from 'react';
import {globalStyles} from '../Styles/GlobalStyles';
import {useFonts} from 'expo-font';

const { width, height } = Dimensions.get('window');
export default function Header(  {title} ) {

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

  const openMenu = () => {
    navigation.openDrawer();
  }



  const [greeting, setGreeting] = useState('');

  // Function to get the current time and set the greeting based on the time
  const setGreetingBasedOnTime = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour <= 15) {
      setGreeting('Good Afternoon');
    } else if (currentHour > 15 && currentHour <= 18) {
      setGreeting('Good Evening');
    } else {
      setGreeting('Good Night');
    }

  };

  // Use useEffect to set the initial greeting and update it when needed
  useEffect(() => {
    setGreetingBasedOnTime();
  }, []);

  return (
  
<View style={[globalStyles.headerHeaderFile,{backgroundColor:theme.backgroundColor}]}>
      <MaterialIcons name='menu' 
      size={28} onPress={openMenu} style={[globalStyles.iconHeaderFile,{color:theme.color}]} />

    

    <Text style={[globalStyles.headerTextHeaderFile1,{color:theme.color}]}>OVERDOSE STORES</Text>


<TouchableOpacity 
 onPress={() => {
//setSelectedProduct();
setModalVisible(true);
}}

>
{/*<Image source={require('../assets/splashe.png')} 
  style={globalStyles.headerImageHeaderFile} />*/}

   <FontAwesome
        style={globalStyles.headerImageHeaderFile}
          
          name="cart-arrow-down"
          size={25}
          color="black"
        />
</TouchableOpacity >


















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
        // backgroundColor: 'black'
        backgroundColor: 'rgba(0, 0, 0, 0)',
          }}>
          <View style={globalStyles.HeadersModalViewViewProduct}>
       
            <View style={globalStyles.HeadersButtonConatinerViewProduct}>
                   <TouchableOpacity 
                    style={globalStyles.HeadersButtonCloseViewProduct}  
                    onPress={()=> navigation.navigate('Products Orders')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>Show Orders </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={globalStyles.HeadersButtonAddViewProduct}  
                    onPress={()=> navigation.navigate('All Cart Items')}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>Show Cart Items</Text>
                    
                    </TouchableOpacity>


                    <TouchableOpacity 
                    style={globalStyles.HeadersButtonClose2ViewProduct}  
                    onPress={()=> setModalVisible(false)}
                     >
                        <Text style={globalStyles.HeadersConfirmCancelButtonTextViewProduct}>Close </Text>
                    </TouchableOpacity>
            </View>
          </View>
        </View>
        </ScrollView>
        </ImageBackground>
      </Modal>


        </View>  
    
  );
}

const styles = StyleSheet.create({
  
     });

