
import {View,ActivityIndicator,TextInput,TouchableOpacity, StyleSheet,Dimensions,Image, Text, Pressable, FlatList} from 'react-native';

import {MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';


import AllProductsComponent from '../RenderedComponents/AllProductsComponent';
import { EventRegister } from 'react-native-event-listeners';

import React, {useState,useRef, useEffect, useContext} from 'react';

import {globalStyles} from '../Styles/GlobalStyles';

import { EndPoint } from "../Constant/links";
import useFetch from '../useFetch';
import { useFonts } from 'expo-font';
import AwesomeAlert from 'react-native-awesome-alerts';
import LotterViewScreen from '../Screens/LotterViewScreen';
import Header from '../Header/header';
import MinorHeader from '../Header/MinorHeader';
import SlidingServices from '../RenderedComponents/SlidingServices';

import theme from '../theme/theme';
import themeContext from '../theme/themeContext';


const { width, height } = Dimensions.get('window');
const AllProducts = ({navigation, route}) => {
  const { 
    
    TypeId,
    CategoryName,
    id 
   } = route.params



  // To change color
const theme = useContext(themeContext)
const [darkMode, setdarkMode] = useState(false)
 

//FOR SEARCHING
const [input, setInput] = useState('');
 //const { universities:queryset, isPending, error  } = useFetch(EndPoint + `/Ourqueryset/`);

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




//Load more
const [queryset, setQueryset] = useState([]);
const [current_page, setcurrent_page] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [loading, setLoading] = useState(false);
const [endReached, setEndReached] = useState(false)
const [isPending, setPending] = useState(true);




const getItems = () => {
  if (endReached) {
    setLoading(false);
    setIsLoading(false);
    setPending(false);
    return;
  } else {
    setIsLoading(true);
    //const url = EndPoint + `/GetAllUniversities/?page=${current_page}&page_size=2`;
   const url = EndPoint + `/GetAllProductsInStore/?id=${id}&TypeId=${TypeId}&page=${current_page}&page_size=2`
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.queryset.length > 0) {
          setQueryset([...queryset, ...data.queryset]);
          setIsLoading(false);
          setLoading(false);
          setcurrent_page(current_page + 1);
          setPending(false);

          // console.log("NEW CRRRENT", current_page);
          // console.log(queryset);

        } else {
          setIsLoading(false);
          setEndReached(true);
          setLoading(false);
          setPending(false);
        }
      });
  }
};





 const renderLoader = () => {
    return (
      isLoading ?
        <View style={globalStyles.loaderStyle}>
          <ActivityIndicator size="large" color="red" />
        </View> : null
    );
  };

  // const loadMoreItem = () => {
  //   setcurrent_page(current_page + 1);
  // };

  useEffect(() => {
    setLoading(true)
    getItems();
  }, []);



  
  return (

    <>{!fontsLoaded ? (<View/>):(


    <View style={[globalStyles.mainContainer,{backgroundColor:theme.backgroundColor}]}>
       
       <MinorHeader title="Products" />

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











{/*MWANZO WA VIEW YA SEARCH*/}

      <View 
      style={globalStyles.OverdoseStoresSearchContainer}
      >
        
        <View
               
       style={globalStyles.OverdoseStoresInputContainer}     
            

          >

         
          <TextInput
          style={globalStyles.OverdoseStoresTextInput}
          value={input} onChangeText ={(text) => setInput(text)}
            
            placeholder="Search product"
            placeholderTextColor="black"
          />
         
        </View>
       
      </View>



{/*MWISHO WA VIEW YA SEARCH*/}



         <View style={{
          marginVertical: 12,
          flexDirection:'row',
          justifyContent:'space-between'
        }}>
        <Text
        style={globalStyles.OverdoseOurProductsHeaderText}
         >
          Products 
        </Text>

        <Text
        style={globalStyles.OverdoseOurProductsHeaderText2}
         >
          {CategoryName}
        </Text>
       
      </View>

    
{/*mwanzo wa kudisplay products*/}

{ !isPending ? (
  <>
      
      { queryset && queryset.length > 0 ? (
        <>

         {setLoading===true?(<ActivityIndicator/>):(
      <>
        <FlatList
          data={queryset}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 12, width: '100%'}}
          renderItem={({index, item}) => 
          <AllProductsComponent item={item} CategoryName={CategoryName} input={input} setInput={setInput} />}
          numColumns={2}

          ListFooterComponent={renderLoader}
          onEndReached={getItems}
          onEndReachedThreshold={0.5}
        />
        </>
      )}

         </>



      ) : (
       

 <View style={[globalStyles.noitemTextContainer,{backgroundColor:theme.backgroundColor}]}>
  <Text style={globalStyles.noitemText}>We don't have any service now! !
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
 </>

):(
<LotterViewScreen />


)} 


  {/*mwisho wa kudisplay products*/}


      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Alert!"
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="green"
        onConfirmPressed={hideAlert}
      />


    </View>


    )}</>


  );
};

export default AllProducts;



const styles = StyleSheet.create({

 

});