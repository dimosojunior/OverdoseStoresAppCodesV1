import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image
} from "react-native";
import React, { useRef,useContext, useState, useEffect } from "react";
// import { useLocalSearchParams } from "expo-router";
// import moment from "moment";
// import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import MinorHeader from '../Header/MinorHeader';
import {globalStyles} from '../Styles/GlobalStyles';
import { EndPoint } from "../Constant/links";
import { ProductIcon1Color } from "../Constant/colors";
import { ProductIcon1Name } from "../Constant/colors";
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';


const Test = () => {
   // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)
 


  return (
     <View style={[globalStyles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
       
       <MinorHeader title="payment" />

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


         <View 
         style={globalStyles.OverdoseContinueTextOrderMessage}
         
         >
        <Text
        style={globalStyles.OverdoseOurProductsHeaderText}
         >
          Continue with payment
        </Text>
       
      </View>

    
      <View

      style={globalStyles.OverdoseMessageContainerOrderMessage}
    
      >
      
        <View 
         style={globalStyles.OverdoseMessageSecondContainerOrderMessage}
        
        >
          <View>
           


            <View 

          style={globalStyles.OverdoseMessageThirdContainerOrderMessage}
        
             >
            {/*  <FontAwesome5
                name="hand-holding-heart"
                size={28}
                color="#fc8019"
              />*/}

               <View 
               style={globalStyles.OverdoseMessageLeftImageContainerOrderMessage}
             >
             <Image

        style={globalStyles.OverdoseMessageLeftImageOrderMessage}
          
            source={require('../assets/splashe.png')} 
          /></View>

              <View

              style={globalStyles.OverdoseMessageRightOrderMessage} 
             >
                <Text

                 style={globalStyles.OverdoseMessageMainTitleOrderMessage} 
               
                >
                  Overdose stores
                </Text>
                <Text

                 style={globalStyles.OverdoseMessageThanksMsgOrderMessage} 
             
                >
                  Thank your delivery partner for helping you stay safe
                  indoors.Support them through these tough times with a tip
                </Text>


                <Pressable
                 style={globalStyles.OverdoseFourtContainerOrderMessage} 
             
                >
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={globalStyles.OverdoseFourtTouchableContainerOrderMessage} 
             
                  >
                    <Text
                    style={globalStyles.OverdoseFourthText1OrderMessage}
                    
                    >
                      ₹30
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                   style={globalStyles.OverdoseFiftyTouchableContainerOrderMessage} 
                 
                  >
                    <Text
                     style={globalStyles.OverdoseFifty1TextOrderMessage} 
                 
                    >
                      ₹50
                    </Text>
                    <Text

                    style={globalStyles.OverdoseFifty2TextOrderMessage} 
                  
                    >
                      Most Tipped
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={globalStyles.OverdoseSixtyContainerOrderMessage} 
                   
                   
                  >
                    <Text

                    style={globalStyles.OverdoseSixty1TextOrderMessage} 
                    
                    >
                      ₹70
                    </Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>




            
              <View>
                <Text
                style={globalStyles.OverdosePleaseContinueTextOrderMessage}
                
                >
                  please click a button below to continue with payment method.
                </Text>
                <TouchableOpacity
                  
                  activeOpacity={0.7}

                  style={globalStyles.OverdosePleaseContinueTouchableBtnOrderMessage}
                 
                >
                  <Text

                   style={globalStyles.OverdosePleaseContinueWithPaymentTextOrderMessage}
                  
                  >
                    Continue with payment
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
