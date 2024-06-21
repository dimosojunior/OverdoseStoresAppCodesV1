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


const AllProductsComponent = ({item,CategoryName,input, setInput}) => {
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

//mwanzo wa search
   if (input === ""){

  return (

    <>{!fontsLoaded ? (<View/>):(
       
      
  


    <Pressable
    style={globalStyles.OverdoseProductsContainer}
      onPress={() => navigation.navigate('View Products', item)}>

      <View
      style={globalStyles.OverdoseMinorProductsContainer}
       >
        {/* Discount % */}
        <View
        style={globalStyles.ProductPageOverdoseDiscountProductsContainer}
         >
          <Text
          style={globalStyles.ProductPageOverdoseDiscountProductsText}
          >
         Tsh. {item.InitialPrice == item.price ? <>
          {item.InitialPrice}/=
          </>
          :
          <>
          <Text>
         <Text style={globalStyles.strikethroughText}>
          {item.InitialPrice}/=</Text>  {item.price}/=
          </Text>
          </>
            }
          </Text>

        </View>
        {/* Like Icon */}
        <Ionicons
          name={ProductIcon1Name}
          color={ProductIcon1Color}
        />
      </View>
      {/* Image */}
      {item.ProductImage ? (
      <Image
        source={{
          uri: EndPoint + '/' + item.ProductImage,
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
        {item.product_name}
        </Text>
        {/* Price */}
      

         {item && item.Feature && item.Feature.FeatureName && ( 
        <Text
        style={[globalStyles.OverdoseDiscountProductsPriceText,{
          color:'green'
        }]}
        >
          Feature: {item.Feature.FeatureName}
        </Text>
        )}
      </View>
    </Pressable>


    )}</>

  );


 // hili bano la chini ni la if ya juu kama mtu akitype   
}

 if(item.product_name.toLowerCase().includes(input.toLowerCase())){


return (

    <>{!fontsLoaded ? (<View/>):(
       
      
  


    <Pressable
    style={globalStyles.OverdoseProductsContainer}
      onPress={() => navigation.navigate('View Products', item)}>

      <View
      style={globalStyles.OverdoseMinorProductsContainer}
       >
        {/* Discount % */}
        <View
        style={globalStyles.ProductPageOverdoseDiscountProductsContainer}
         >
          <Text
          style={globalStyles.ProductPageOverdoseDiscountProductsText}
          >
         Tsh. {item.InitialPrice == item.price ? <>
          {item.InitialPrice}/=
          </>
          :
          <>
          <Text>
         <Text style={globalStyles.strikethroughText}>
          {item.InitialPrice}/=</Text>  {item.price}/=
          </Text>
          </>
            }
          </Text>

        </View>
        {/* Like Icon */}
        <Ionicons
        name={ProductIcon1Name}
        color={ProductIcon1Color}
        />
      </View>
      {/* Image */}
      {item.ProductImage ? (
      <Image
        source={{
          uri: EndPoint + '/' + item.ProductImage,
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
        {item.product_name}
        </Text>
        {/* Price */}

    

         {item && item.Feature && item.Feature.FeatureName && ( 
        <Text
        style={[globalStyles.OverdoseDiscountProductsPriceText,{
          color:'green'
        }]}
        >
          Feature: {item.Feature.FeatureName}
        </Text>
        )}

      </View>
    </Pressable>


    )}</>

  );
  




// hili bano la chini ni la if ya pili mwisho
  }







};

export default AllProductsComponent;


const styles = StyleSheet.create({


});