import { Image, Pressable,Platform, StyleSheet, Text, View } from "react-native";
import { EventRegister } from 'react-native-event-listeners';

import React, {useState,useRef, useEffect, useContext} from 'react';

import { FontAwesome } from "@expo/vector-icons";
import MinorHeader from '../Header/MinorHeader';
import {globalStyles} from '../Styles/GlobalStyles';
import { EndPoint } from "../Constant/links";
import { ProductIcon1Color } from "../Constant/colors";
import { ProductIcon1Name } from "../Constant/colors";
import theme from '../theme/theme';
import themeContext from '../theme/themeContext';



const Test = () => {
  const [additems, setAddItems] = useState(0);
  const [selected, setSelected] = useState(false);

   // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)
 

  
  return (
     <View style={[globalStyles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
       
       <MinorHeader title="Cart" />

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
          Cart Items
        </Text>
       
      </View>







      <Pressable
      style={globalStyles.OverdoseCartItemsContainer} >


        <View 
        style={globalStyles.OverdoseLeftCartItemsContainer}
        >
          <Text 
           style={globalStyles.OverdoseItemNameCartItemsText}
         >
            Item Name
          </Text>
          <Text 
          style={globalStyles.OverdosePriceCartItemsText}
        >
            ₹ Item price
          </Text>
          
          <Text
           style={globalStyles.OverdoseIconCartItemsText}
          >
            
        <FontAwesome
        style={globalStyles.OverdoseIcon1CartItems}
          
          name="book"
          size={15}
          color="#FFD700"
        />
           
          </Text>
          <Text
          style={globalStyles.OverdoseDescriptionCartItems}

          >
            DESCRIPTION
          </Text>

       {/*mwanzo wa button*/}
          <Pressable
           style={globalStyles.OverdoseAddButtonContainerCartItems}
                 >
              <Text
               style={globalStyles.OverdoseAddButtonTextCartItems}
            
              >
                ADD
              </Text>
            </Pressable>
             {/*mwisho wa button*/}
          
        </View>



        <Pressable 

        style={globalStyles.OverdoseImageContainerCartItems}
        >
          <Image
           style={globalStyles.OverdoseImageCartItems}
        
            source={require('../assets/500.png')} 
          />


      

          


            




        </Pressable>
      </Pressable>











       {/*mwanzo wa button ya kumake order*/}
          <Pressable
          style={globalStyles.OverdoseCreateOrderContainerCartItems}
              
            >
              <Text
              style={globalStyles.OverdoseCreateOrderTextCartItems}
              >
                Create Order
              </Text>
            </Pressable>
             {/*mwisho wa button ya kumake order*/}







    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
 

});
