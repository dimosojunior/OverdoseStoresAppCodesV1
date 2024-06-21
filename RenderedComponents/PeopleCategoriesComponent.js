import React from 'react';
import {View, Text,StyleSheet, Pressable, Image, Dimensions} from 'react-native';
import {globalStyles} from '../Styles/GlobalStyles';

import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { EndPoint } from "../Constant/links";
import { ProductIcon1Color } from "../Constant/colors";
import { ProductIcon1Name } from "../Constant/colors";

const { width, height } = Dimensions.get('window');
const PeopleCategoriesComponent = ({item}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();


 let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});



  return (

    <>{!fontsLoaded ? (<View/>):(

    <Pressable
    style={globalStyles.OverdoseProductsContainer}
      onPress={() => navigation.navigate('Products Categories', item)}>

      <View
      style={globalStyles.OverdoseMinorProductsContainer}
       >
        {/* Discount % */}
        <View
        style={globalStyles.OverdoseDiscountProductsContainer}
         >
          <Text
          style={globalStyles.OverdoseDiscountProductsText}
          >
            10% OFF
          </Text>
        </View>
        {/* Like Icon */}
        <Ionicons
          name={ProductIcon1Name}
          color={ProductIcon1Color}
        />
      </View>
      {/* Image */}
     {item.CategoryImage ? (
      <Image
        source={{
          uri: EndPoint + '/' + item.CategoryImage,
        }}
        style={globalStyles.OverdoseDiscountProductsImage}
      />
      ):(
       <Image
        source={require('../assets/500.png')} 
        style={globalStyles.OverdoseDiscountProductsImage}
      />

      )}
      <View
      style={globalStyles.OverdoseDiscountProductsNameContainer}
      >
        {/* Title */}
        <Text
        style={globalStyles.OverdoseDiscountProductsNameText}
        //numberOfLines={1}
        >
        {item.CategoryName}
        </Text>
        {/* Price */}
        <Text
        style={globalStyles.OverdoseDiscountProductsPriceText}
        >
          {/*Tsh. 400*/}
          10% discount
        </Text>
      </View>
    </Pressable>


    )}</>
  );
};

export default PeopleCategoriesComponent;


const styles = StyleSheet.create({


});