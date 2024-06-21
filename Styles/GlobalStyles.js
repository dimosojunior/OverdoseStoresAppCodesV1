import React from 'react';
import { StyleSheet, Text,Dimensions, View, Button,Platform } from 'react-native';
import { useFonts } from 'expo-font';



const {height, width} = Dimensions.get('window');

const marginBottomItem = 10;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;


 
const GlobalStyles =() => {

 let [fontsLoaded] = useFonts({
    
    'Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Thin': require('../assets/fonts/Poppins-Thin.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    
  
});

  return(

     <>{!fontsLoaded ? (<View/>):(

    <View>
      <Text>Gloal Styles</Text>
    </View>

    )}</>
    );


}
export default GlobalStyles;


export const globalStyles = StyleSheet.create({

//    ---------------------- ALL HOMESCREEN STYLES------------------------------------------
    
container:{
  flex:1,

},

 ReportsmainContainer: {
    backgroundColor: 'black',
    flex: 1,
    //padding: 16,
    paddingBottom: 0,
  },


//ALERT

alertContainer:{
  backgroundColor:'black',
  borderWidth:1,
  borderColor:'white',
  alignItems:'center',
  justifyContent:'center',

},
alertContent:{
  alignItems:'center',
  justifyContent:'center',

},

alertImage:{
  width:60,
  height:60,
  borderRadius:30,
  marginTop:0,

},
alertTitle:{
  //fontSize:25,
  fontFamily:'Medium',
  color:'white',

},
alertMessage:{
  //fontSize:16,
  fontFamily:'Light',
  color:'red',

},
alertButton:{
  width:width/4,
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  height:50,
  //fontSize:18,
  backgroundColor:'#1f1f1f',
  borderWidth:1,
  borderColor:'white',
  marginBottom:15,
  fontFamily:'Light',


},






homeContainer: {
    // flex: 1,
    width:width,
    height:height,
   
    
  },

homeComponentContainer:{
  width:width,
    height:height,
  

  },



  //---------------REPORT FILTER MODAL------------------

  FilterModalcontainer: {
    flex: 1,
    padding: 16,
  },
  FilterModalfilterButton: {
    padding: 16,
    backgroundColor: "#007BFF",
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  FilterModalfilterButtonText: {
    color: "white",
    // fontWeight: "bold",
    fontFamily:'Light',
  },
  FilterModalmodalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  FilterModalmodalContent: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    width: "90%",
  },
  FilterModalmodalTitle: {
     fontFamily:'Light',
    // fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 6,
    color: 'white',
  },
  FilterModalapplyButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  FilterModalapplyButtonText: {
    color: "white",
    // fontWeight: "bold",
  },
  FilterModaltotalAmountText: {
     fontFamily:'Light',
    // fontWeight: "bold",
    marginTop: 20,
  },
  FilterModalorderContainer: {
    //backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    elevation: 10,
    shadowColor: 'green',
    shadowOpacity: 1,
    flex: 1,
    flexDirection: 'row',



    //alignSelf: "center",
    borderRadius: 10,
    // shadowOpacity: 0.5,
    // shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5
    },
    backgroundColor: "white",
    marginVertical: 10
  },


  ReportRangeText: {
    color: 'red',
     fontFamily:'Light',
 fontFamily:'Light'

  },


  ProcessOrderReportScreenFilterReportContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 6,

  },
  ProcessOrderReportScreenFilterReportContainerText: {
    color: 'black'

  },


dataContainerFormTitle:{
  color:'white',
  // fontSize:20,
  fontFamily:'Medium',
  textAlign:'center',
  marginBottom:15,

},




  //-----------------------HEADER.JS------------------


    headerHeaderFile: {
    //width:Dimensions.get('window').width,     
    width: '100%',
    // height: 60,
    paddingVertical: 10,
    flexDirection: 'row',
   //backgroundColor: '#233329',
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // borderTopWidth: 1,
    // borderTopColor: 'black',
    // borderLeftWidth: 1,
    // borderLeftColor: 'black',
    // borderRightWidth: 1,
    // borderRightColor: 'black',

   // paddingTop: Dimensions.get("window").height * 0.04,

    // alignItems: 'flex-start',
    marginLeft: 0,
    paddingLeft: 0,
    //backgroundColor: 'white',  //"#2B3856",
    marginBottom: 8,

    justifyContent: 'space-between',
    elevation: 0,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? 'white' : "white",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginHorizontal: 0,
    marginVertical: 0,
    paddingHorizontal: 0,
    alignItems:'center',

    //paddingVertical:15,




  },
    headerTextHeaderFile: {
      //fontWeight: 'bold',
      //fontSize: 18,
      fontFamily:'Medium',
      color: 'white',
      letterSpacing: 1,

      // flex:1,
      alignItems:"center",
      marginTop:10,
      // fontFamily:'SerifRegular',

      
    },
    iconHeaderFile: {
      position: 'relative',
      marginLeft:10,
      
      //flex:1,
      
      fontWeight:'bold',
      marginTop:5,

      fontSize:30,
      

    },

    headerImageHeaderFile:{
      width:40,
      height:40,
      // marginHorizontal:10,
      marginTop:10,
      borderRadius:20,
      marginRight:10,
      marginBottom:0
    },

 headerTextHeaderFile1:{
    fontFamily:'Medium',
     // fontFamily:'Light',
    // color: 'white',
    letterSpacing: 1,

    // flex:1,
    alignItems: "center",
    marginTop: 10,
    // fontFamily:'SerifRegular',

  },






//-------------------HEADER INFORMATIONS------------
OverdoseOurProductsHeaderText:{
  fontFamily:'Medium',
  //fontSize:18,
  //textAlign:'center',
  color:'black',

},

 mainContainer: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
    paddingBottom: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  categoryText: {
    // fontSize: 20,
    // fontWeight: '600',
    color: '#000',
    marginBottom: 12,
    fontFamily:'Medium',
  },
OverdoseMainHeaderText:{
  //fontSize: 20,
  color: 'black',
  fontFamily:'Medium',

},


OverdoseMinorHeaderText:{
  //fontSize: 16,
  color: 'black',
  fontFamily:'Light',
},


//-----------------PEOPLES CATEGORY-----------------------

OverdoseProductsContainer:{
  width: '49%',
   backgroundColor: '#f3f3f3',

  marginVertical: 4,
  marginRight: 4,
  borderRadius: 20,
  padding: 12,

  elevation: 3,

  shadowOffset: { width: 1, height: 1 },
  shadowColor: Platform.OS === "android" ? 'green' : "green",
  shadowOpacity: 1,
  shadowRadius: 2,

},
 

OverdoseMinorProductsContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',


},
OverdoseDiscountProductsContainer:{
  backgroundColor: '#ffffff',
  borderRadius: 40,
  alignItems: 'center',
  padding: 8,

},
OverdoseDiscountProductsText:{
  fontSize: 12,
  fontFamily:'Light',
  color: 'black',

},

OverdoseDiscountProductsImage:{
  // width: width * 0.33,
  width: '100%',
  height: height / 4.2,
  alignSelf: 'center',
  marginVertical: 8,
  borderRadius: 20,
  resizeMode: 'cover',
  },

OverdoseDiscountProductsNameContainer:{
  backgroundColor: '#fff',
  padding: 8,
  borderBottomEndRadius: 20,
  borderBottomLeftRadius: 20,

},
OverdoseDiscountProductsNameText:{
  //fontSize: 16,
  fontFamily:'Light',

},
OverdoseDiscountProductsPriceText:{
  //fontSize: 16,
  fontFamily:'Light',
  color: 'black',

},






//PRDUCTS PAGE----------------------------------

ProductPageOverdoseDiscountProductsContainer:{
  backgroundColor: '#1f1f1f',
  borderRadius: 40,
  alignItems: 'center',
  padding: 8,

},
ProductPageOverdoseDiscountProductsText:{
  fontSize: 12,
  fontFamily:'Light',
  color: 'white',

},
strikethroughText:{
  textDecorationLine: 'line-through',
  color:'red',


},
OverdoseOurProductsHeaderText2:{
   fontFamily:'Light',
  //fontSize:18,
  //textAlign:'center',
  color:'green',

},






//---------------------FOR SEARCHING--------------------



  //--------------------------SEARCH PAGE-----------------

OverdoseStoressearchContainer: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 0,

  },

  OverdoseStoresInputContainer: {
    marginTop: 10,
    padding: 2,
    paddingLeft: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 3,
    borderColor: 'black',
    borderWidth: .5,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? 'green' : "green",
    shadowOpacity: 1,
    shadowRadius: 2,
  },

  OverdoseStoresTextInput: {
     fontFamily:'Light',
    marginLeft: 10,

    
    //fontFamily:'Bold',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 0,
  },






//-------------OVERDOSE CART ITEMS ---------------------

 OverdoseCartItemsContainer:{
      margin: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    borderColor:'black',
    borderWidth:.2,
     elevation: 2,
     paddingHorizontal:10,
     paddingVertical:10,
  

  shadowOffset: { width: 1, height: 1 },
  shadowColor: Platform.OS === "android" ? 'black' : "black",
  shadowOpacity: 0,
  shadowRadius: 0,
  width:'100%',


  },

OverdoseLeftCartItemsContainer:{
  width:'70%',
},
OverdoseItemNameCartItemsText:{
   //fontSize: 18,
 //fontWeight: "600", 
 width: 220 ,
 fontFamily:'Medium',
},
OverdosePriceCartItemsText:{
  marginTop: 4, 
 //fontSize: 15, 
 fontFamily:'Light',
},
OverdoseIconCartItemsText:{
  marginTop: 5,
  borderRadius: 4,
},
OverdoseIcon1CartItems:{
  paddingHorizontal: 3,
},

OverdoseDescriptionCartItems:{
  width: 200, 
 marginTop: 8, 
 color: "black", 
 fontFamily:'Light',
 //fontSize: 16 
},

OverdoseAddButtonContainerCartItems:{
     // position: "absolute",
    // top: 95,
    // left: 20,
    borderColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    borderRadius: 5,
    width:'50%',
    justifyContent:'center',
    marginTop:15,
  },

  OverdoseAddButtonTextCartItems:{
    //fontSize: 18,
    //fontWeight: "600", 
    color: "white",
    padding:6 ,
    fontFamily:'Medium',
  },

  OverdoseImageContainerCartItems:{
    marginRight: 10,
   width:'30%'
 },

 OverdoseImageCartItems:{
  width: 120, 
    height: 120, 
    borderRadius: 8 
  },

  OverdoseCreateOrderContainerCartItems:{
    position: "absolute",
    bottom:10,
    // top: 95,
    // left: 20,
    borderColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingVertical: 5,
    alignItems: "center",
    
    borderRadius: 5,
    width:'100%',
    justifyContent:'center',
    marginTop:15,
  },
OverdoseCreateOrderTextCartItems:{
  //  fontSize: 18,
  // fontWeight: "600", 
  color: "white",
  padding:12 ,
  backgroundColor: "green",
  width:'100%',
  textAlign:'center',
  borderRadius:8,
  borderColor: "white",
borderWidth: 1,
fontFamily:'Light',
},













//---------------------ORDER MESSAGE------------------

OverdoseContinueTextOrderMessage:{
  marginVertical: 12,

},


OverdoseMessageContainerOrderMessage:{
 width: "100%",
  backgroundColor: "white",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
OverdoseMessageSecondContainerOrderMessage:{
  padding: 10,

},
OverdoseMessageThirdContainerOrderMessage:{
  flexDirection: "row",
   marginTop: 20 ,
   width:'100%',
 },

 OverdoseMessageLeftImageContainerOrderMessage:{
  width:'30%',
},

OverdoseMessageLeftImageOrderMessage:{
   width: '80%', 
   height: 100, 
   borderRadius: 8, 
 },

 OverdoseMessageRightOrderMessage:{
   marginLeft: 10, 
   width:'70%',
 },


 OverdoseMessageMainTitleOrderMessage:{
  //  fontSize: 18,
  // fontWeight: "500",
  paddingHorizontal: 2,
  marginBottom: 6,
  fontFamily:'Medium',

 },

 OverdoseMessageThanksMsgOrderMessage:{
  //fontSize: 16,
  //fontWeight: "600",
  color: "#696969",
  marginRight: 10,
  paddingHorizontal: 2,
  fontFamily:'Light',
},


OverdoseFourtContainerOrderMessage:{
  paddingTop: 20,
flexDirection: "row",
alignItems: "center",
},

OverdoseFourtTouchableContainerOrderMessage:{
  backgroundColor: "#F5F5F5",
  marginHorizontal: 10,
  paddingHorizontal: 10,
  borderRadius: 7,
},

OverdoseFourthText1OrderMessage:{
  padding: 10,
  color: "#002D62",
  //fontWeight: "bold",
  fontFamily:'Medium',
},



OverdosePleaseContinueTextOrderMessage:{
  color: "#fc8019",
  padding: 10,
  marginLeft: 10,
  marginRight: 10,
  // fontSize: 16,
  // fontWeight: "600",
  width:'100%',
  marginTop:20,
  fontFamily:'Light',
},

OverdosePleaseContinueTouchableBtnOrderMessage:{
  padding: 10,
marginLeft: 10,
marginRight: 10,


paddingBottom: 40,
},

OverdosePleaseContinueWithPaymentTextOrderMessage:{
// fontSize: 18,
// fontWeight: "600", 
color: "white",
padding:12 ,
backgroundColor: "green",
width:'50%',
textAlign:'center',
borderRadius:8,
borderColor: "white",
borderWidth: 1,
fontFamily:'Light',
},




OverdoseFiftyTouchableContainerOrderMessage:{
   alignItems: "center",
    backgroundColor: "#F5F5F5",
    marginHorizontal: 10,
    borderRadius: 7,
    // paddingHorizontal: 10,
  },

  OverdoseFifty1TextOrderMessage:{
    padding: 4,
    color: "#002D62",
    fontWeight: "bold",
  },



  OverdoseFifty2TextOrderMessage:{
     backgroundColor: "orange",
    paddingHorizontal: 10,
    //fontSize: 14,
    //fontWeight: "bold",
    color: "white",
    fontFamily:'Light',

  },

OverdoseSixtyContainerOrderMessage:{
  backgroundColor: "#F5F5F5",
  marginHorizontal: 10,
  paddingHorizontal: 10,
  borderRadius: 7,
},

OverdoseSixty1TextOrderMessage:{
   padding: 10,
  color: "#002D62",
  //fontWeight: "bold",
  fontFamily:'Light',
},
















//--------------------VIEW PRODUCTS PAGE----------------


MainContainerViewProduct:{
  width:'100%',
  flexDirection:'row',
  justifyContent:'space-between',
  //alignItems:'center',
   elevation: 3,
    borderColor: 'black',
    borderWidth: .2,

    shadowOffset: { width: 1, height: 1 },
    shadowColor: Platform.OS === "android" ? 'black' : "black",
    shadowOpacity: 1,
    shadowRadius: 2,
    padding:15,


},

MainLeftContainerViewProduct:{
  width:'60%',
  flex:1,

},


MainRightContainerViewProduct:{
  width:'40%',

},

MainLeftContainerMainImageViewProduct:{
  width:'60%',
  height:120,
  //resizeMode:'contain',
  marginBottom:10,
  borderRadius:10,

},

MainLeftContainerNameTextViewProduct:{
  color:'black',
  //fontSize:18,
  marginBottom:10,
  width:'100%',
  fontFamily:'Medium',
},

MainLeftContainerDescriptionViewProduct:{
  color:'black',
  //fontSize:16,
  marginBottom:10,
  width:'90%',
  fontFamily:'Light',

},


PriceContainerPriceViewProduct:{

  width:'100%',
  marginBottom:10,
  elevation:3,
  flexDirection:'row',
  justifyContent:'space-around',
},

ViewProductDiscountProductsText:{
  color:'black',
  fontFamily:'Light',

},

MainRightAddToCartViewProduct:{
  backgroundColor:'#1f1f1f',
  color:'white',
  textAlign:'center',
  padding:20,
  borderRadius:8,
  //fontSize:16,
  fontFamily:'Light',
  borderColor:'green',
  borderWidth:1,
},

BottomContainerMoreTextViewProduct:{
  marginTop:20,
  //fontSize:18,
  marginBottom:15,
  width:'100%',
  // alignItems:'center',
  justifyContent:'space-between',
  fontFamily:'Medium'



},
BottomContainerImageViewProduct:{
  width:'100%',
  height:height/4 + 80,
  borderRadius:10,



},




PriceContainerPriceViewProduct2:{
  width:'100%',
  marginBottom:10,
  elevation:3,
  

},
ViewProductDiscountProductsText2:{
  color:'black',
  marginTop:15,
  color:'green',
  fontFamily:'Medium'

},

























//-----------------------HEADER MODE----------------

HeadersKeyboardAvoidingViewModalViewProduct:{
  flex: 1,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',




},
HeadersModalTitleViewProduct:{
  textAlign:'center',
  fontFamily:'SemiBold',
  textAlign:'center'
},

HeadersConfirmCancelButtonTextViewProduct:{
  color:'white',
  fontFamily:'Medium',
  margin:10,
},

HeadersEnterQuntityTextViewProduct:{
  color:'black',
   fontFamily:'Light',
},
 HeadersinputViewProduct: {
    flexDirection: "row",
    width: 300,
    
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },


  
  HeadersModalViewViewProduct: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    width:'80%',
    //backgroundColor: "black",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 20,
    //elevation: 3,
   // shadowColor: Platform.OS === "android" ? 'black' : "black",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,
    borderWidth:1,
    borderColor:'white',


  },

  HeadersinputViewProduct: {
    flexDirection: "row",
    //width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    marginBottom:20,
  },
   HeaderstextInputViewProduct: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: 250,
    //backgroundColor: 'white',
    
    borderRadius: 10,
    // borderColor: "black",
    // borderWidth: 1,
    //padding:12,
    height: 50,
  },


  HeadersButtonCloseViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: '90%',
    height: 80,
    backgroundColor: "#1f1f1f",
    borderRadius: 5,
    marginRight:0,
    marginBottom:50,
    borderWidth:1,
    borderColor:'white',

  },

   HeadersButtonClose2ViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: '90%',
    height: 80,
    backgroundColor: "brown",
    borderRadius: 5,
    marginRight:0,
    marginTop:50,
    borderWidth:1,
    borderColor:'white',

  },

   HeadersButtonClose3ViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: '90%',
    height: 80,
    backgroundColor: "brown",
    borderRadius: 5,
    marginRight:0,
    marginTop:50,
    borderWidth:1,
    borderColor:'white',

  },

   HeadersButtonClose4ViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: '90%',
    height: 80,
    backgroundColor: "blue",
    borderRadius: 5,
    marginRight:0,
    marginTop:50,
    borderWidth:1,
    borderColor:'white',

  },

  HeadersButtonAddViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: '90%',
    height: 80,
    backgroundColor: "green",
    borderRadius: 5,


  },
  HeadersButtonScanViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  HeadersButtonBarcodeViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, 
  HeadersButtonConatinerViewProduct: {
    flexDirection: 'column',
    marginTop: 10,
    alignItems:'center',
    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    //backgroundColor: 'black'
    //justifyContent: "space-between"
  },

  HeadersinputTaxViewProduct: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  HeaderspickerViewProduct: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  HeaderspickerInputViewProduct: {
    top: -7
  },

 
  HeadersformViewProduct: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection:'row',
    alignItems:'space-around',
    width:width,
    
  },
  



  HeadersInputiconViewProduct: {
    //fontSize: 29,
    fontFamily:'Medium',
    marginRight: 10

  },
  HeadersTaxTypeViewProduct: {
     fontFamily:'Light',
    color: "white",
    //fontWeight: '400'
  },
  HeadersopenViewProduct: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  HeadersButtonAddTextViewProduct: {
    color: 'white',
     fontFamily:'Light',
  },





















//-----------------------LOGOUT MODE----------------

LogoutKeyboardAvoidingViewModalViewProduct:{
  flex: 1,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',




},
LogoutModalTitleViewProduct:{
  textAlign:'center',
  fontFamily:'SemiBold',
  textAlign:'center'
},

LogoutConfirmCancelButtonTextViewProduct:{
  color:'white',
  fontFamily:'Medium',
  margin:10,
},

LogoutEnterQuntityTextViewProduct:{
  color:'black',
   fontFamily:'Light',
},
 LogoutinputViewProduct: {
    flexDirection: "column",
    width: 300,
    
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },


  
  LogoutModalViewViewProduct: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    width:'90%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    //backgroundColor: "",
    //backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent white overlay
    borderRadius: 20,
    //elevation: 3,
    //shadowColor: Platform.OS === "android" ? 'black' : "black",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,
    borderWidth:1,
    borderColor:'white',



  },

  LogoutinputViewProduct: {
    flexDirection: "row",
    //width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    marginBottom:20,
  },
   LogouttextInputViewProduct: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: 250,
    //backgroundColor: 'white',
    
    borderRadius: 10,
    // borderColor: "black",
    // borderWidth: 1,
    //padding:12,
    height: 50,
  },


  LogoutButtonCloseViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "brown",
    borderRadius: 5,
    marginRight:0,
    marginBottom:0,
    borderWidth:1,
    borderColor:'white',

  },

  LogoutButtonConatinerViewProduct: {
    flexDirection: 'row',
    marginTop: 20,
    //alignItems:'center',
    //flex:1,
    //backgroundColor: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: "space-between",
    //width:'100%',
    // borderWidth:1,
    // borderColor:'red',
    
  },

 
  LogoutButtonAddViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  LogoutButtonScanViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  LogoutButtonBarcodeViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, 
  

  LogoutinputTaxViewProduct: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  LogoutpickerViewProduct: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  LogoutpickerInputViewProduct: {
    top: -7
  },

 
  LogoutformViewProduct: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection:'row',
    alignItems:'space-around',
    width:width,
    
  },
  



  LogoutInputiconViewProduct: {
    fontSize: 29,
    marginRight: 10

  },
  LogoutTaxTypeViewProduct: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  LogoutopenViewProduct: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  LogoutButtonAddTextViewProduct: {
    color: 'white',
     fontFamily:'Light',
  },



 








  //---------------------MODAL STYLE-----------------

  ModalView: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    width:'90%',
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    shadowColor: Platform.OS === "android" ? 'white' : "Lightgrey",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,

  },
  ButtonClose: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,

  },
  ButtonAdd: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  ButtonScan: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  ButtonBarcode: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, ButtonConatiner: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: "space-between"
  },
  input: {
    flexDirection: "row",
    width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },
  inputTax: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  picker: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  pickerInput: {
    top: -7
  },

 
  form: {
    marginTop: 10,
    alignItems: 'center'
  },
  Inputicon: {
    fontSize: 29,
    marginRight: 10

  },
  TaxType: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  open: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddText: {
    color: 'white',
     fontFamily:'Light',
  },




























// ----------------------------HOME COMPONENT 1-----------------



itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.1,
    borderColor: "#ddd",

  },
  itemImageStyle: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius:5,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    // color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },


  
  















// ---------------------EXPERT COMPONENT 2--------------------

homeComponentHeaderText:{
  textAlign:'center',
  fontSize:16,
  marginBottom:20,

},

// AllExpertsCategoryContainer:{
//   marginBottom:100,
//   paddingBottom:100,
//   flex:1,
  

// },

  listContainer: {
    //width: Dimensions.get('window').width / 2,
    width:'50%',
    //backgroundColor: 'black',
    margin: 1,
    borderRadius: 20,
    //flex:1,

    //elevation: 3,
    //backgroundColor:'white',
    //shadowOffset: { width: 1, height: 1 },
    //shadowColor: 'white',
    // shadowColor: Platform.OS === "android" ? 'white' : "white",
    // shadowOpacity: 0,
    // shadowRadius: 0,
    //height:height,



  },
  imageContainer: {
    margin: 5,
    borderRadius: 0,
    // overflow: 'hidden',
    width:'90%'
  },
  image: {
    width: '100%',
     height: undefined, 
     aspectRatio: 1,
     borderRadius:20,
    },
  nameText: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    
    fontFamily: 'Light',
  },
  priceText: {
    color: 'green',
    
    marginLeft: 15,
    marginTop: 10,
    fontFamily: 'Light',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Light',
  },







  //---------------------ACTIVITY INDICATOR-------------

  ActivityIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    flex: 1,

    height: height,
    backgroundColor: '#233329',

  },
  ActivityIndicatorText: {
    color: 'green',
    marginBottom: 15,
    marginTop: 20,
     fontFamily:'Light',
    fontFamily:'Light',


  },






// ARTICLES STYLE

Articlesheadertext:{
    textAlign:'center',
    // fontSize:16,
    //fontWeight:'bold',
    color:'white',
    marginBottom:10,
    marginTop:0,
     fontFamily:'Bold',
    // fontFamily:'SerifRegular',
    
  
  },


ArticleHeaderName:{
  // backgroundColor:'blue',
  elevation:3,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: Platform.OS === "android" ? 'green' : "green",
  shadowOpacity: 1,
  shadowRadius: 2,

},





























//-------------------------------ALL ARTICLES----------


 fontSize: {
    // fontSize: 18,
    
    fontFamily:'Light',
    //textAlign:'center'
  },
  place: {
    
    fontFamily:'Light',
    color:'red',
    // fontFamily:'SerifRegular',
    //textAlign:'center'
  },
  ShortDescription:{
    fontFamily:'Light',
    // fontFamily:'SerifRegular',

  },
  wrapImageContainer:{
    
    width:'40%',
    // flex:1,

  },
  Expertimage: {
    width: '90%',
    height: 80,
    borderRadius:5,
    marginRight:10,
  },
  wrapText: {
    flex:1,
    width:'70%',
    // flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },




item: {
  width:'100%',
  flex:1,
    flexDirection: 'row',
    //justifyContent:'space-around',
    //alignItems:'center',
    marginBottom: marginBottomItem,
    borderRadius: 10,
    //padding:15,
    
    // borderColor:'#E3E4FA',
    // borderWidth:0.5,
    elevation:5,
    //shadowColor: Platform.OS === "android" ? 'yellow' : "yellow",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    paddingLeft: 10,
    marginHorizontal:0,
    paddingVertical:15
  },






  // ---------------------READ EXPERT.js-------------------



  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  
  caption: {
    fontSize: 14,
    lineHeight: 14,
    //fontWeight: '500',
    // fontFamily:'SerifRegular',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    //borderBottomColor: '#dddddd',
    //borderBottomWidth: 1,
   // borderTopColor: '#dddddd',
    //borderTopWidth: 1,
    paddingHorizontal:15,
    paddingVertical:20,
    backgroundColor:'white',
    borderRadius:5
    //flexDirection: 'row',
    //height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },


universityheadertext:{
    textAlign:'center',
    // fontSize:18,
    //fontWeight:'bold',
    color:'red',
    marginBottom:10,
    marginTop:20,
    fontFamily:'Light',
  },


noitemTextContainer:{
  justifyContent:'center',
  alignItems:'center',


},

noitemText:{
  textAlign:'center',
  color:'red',
  fontFamily:'Light'


},


ErrorImageContainer:{
  justifyContent:'center',
  alignItems:'center',
  width:'90%',
  marginTop:20,

},
ErrorImage:{
  width:'60%',
  height:height/3,
  borderRadius:10,

},









// READ ARTICLE
title: {  
    //fontWeight: 'bold',
    marginTop:15,
    marginBottom: 5,
    fontFamily:'Light',
  },
TitleArticleContainer:{
  width:'70%',
  flex:1,

},

ImageAndTitleContainer:{
  flexDirection: 'row',
   marginTop: 15,
   width:'100%',
   flex:1,

},

ImageArticleContainer:{
  width:'30%',

},

ArticleMainImage:{
  width:'90%',
  height:80,
  borderRadius:38

},
ArticleMainTitleText:{
  marginLeft:15,
  fontFamily:'Light',

},


AboutArticleText:{

  textAlign:'center',
  marginBottom:15,
  
  fontFamily:'Bold',

},




downloadButtonArticle:{
  backgroundColor:'green',
  padding:10,
  borderRadius:10,
  marginTop:15,

},







ErrorImageContainerHomePage:{
  justifyContent:'center',
  alignItems:'center',
  width:'90%',
  marginTop:10,

},
ErrorImageHomePage:{
  width:'50%',
  height:height/4 -10,
  borderRadius:30,

},










//-----------------------------ABOUT.JS-------------

 // containerAbout:{
 //    flex:1,
 //    marginBottom:50,

 //  },
  aboutContainer: {
    display: "flex",
    alignItems: "center",
    flex:1,
    marginBottom:50,
  },

  imgStyle: {
    width: width,
    height: height/2,
    borderRadius: 10,
    resizeMode: "cover",
  },
  mainHeaderAboutUs: {
    
    
    textTransform: "uppercase",
   
    // marginTop: 50,
    marginTop: 20,
    marginBottom: 15,
    fontFamily:'Bold',
    
  },
  paraStyle: {
    
    color: "black",
    paddingBottom: 30,
    fontFamily:'Light',
    
  },
  aboutLayout: {
    
    paddingHorizontal: 0,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    
    textTransform: "uppercase",
    //fontWeight: "500",
    marginVertical: 15,
    fontFamily:'Light',
      alignSelf: "center",
  },
  aboutPara: {
    
    
    fontFamily: "Light",
    lineHeight: 26,
    elevation:3,
    // fontFamily:'SerifRegular',
  //backgroundColor:'white',
  shadowOffset:{width:1, height:1},
  shadowColor: Platform.OS === "android" ? 'red' : "red",
  shadowOpacity:1,
  shadowRadius:2,
  borderRadius:6,
  paddingVertical:10,
  paddingHorizontal:30
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
    borderRadius:60,
  },







//----------------PEOPLE WORKS-----------------------------------


  listContainerPeopleWork: {
    //width: Dimensions.get('window').width,
    width:'100%',

    
    //backgroundColor: 'black',
    //margin: 1,
    borderRadius: 20,
    //flex:1,
    //marginHorizontal:30,
    // justifyContent:'center',
    // alignItems:'center'

    //elevation: 3,
    //backgroundColor:'white',
    //shadowOffset: { width: 1, height: 1 },
    //shadowColor: 'white',
    // shadowColor: Platform.OS === "android" ? 'white' : "white",
    // shadowOpacity: 0,
    // shadowRadius: 0,
    //height:height,



  },
  imageContainerPeopleWork: {
    margin: 5,
    borderRadius: 0,
    // overflow: 'hidden',
    width:'100%',
   // justifyContent:'center',
    alignItems:'center',
    flex:1,
    
  },
  imagePeopleWork: {
    width: '100%',
     height:height/3,
     //height: undefined, 
     //aspectRatio: 1,
     borderRadius:20,
    },
  nameTextPeopleWork: {
    color: 'white',
    // fontWeight: 'bold',
    marginLeft: 15,
    
    fontFamily: 'Light',
  },
  priceTextPeopleWork: {
    color: 'green',
    
    marginLeft: 15,
    marginTop: 10,
    fontFamily: 'Light',
  },
  buttonPeopleWork: {
    backgroundColor: 'green',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 100,
    borderRadius: 10,
    //width:width/2,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,

  },
  buttonTextPeopleWork: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Light',
  },


















//------------PEOPLE WORKS MODAL STYLE----------------

KeyboardAvoidingViewModalViewProduct:{
  flex: 1,
  backgroundColor:'white',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',




},
ModalTitleViewProduct:{
  textAlign:'center',
  fontFamily:'SemiBold',
  textAlign:'center'
},
ConfirmCancelButtonTextViewProduct:{
  color:'white',
  fontFamily:'Light',
  margin:10,
},

EnterQuntityTextViewProduct:{
  color:'black',
   fontFamily:'Light',
},
 inputViewProduct: {
    flexDirection: "row",
    width: 300,
    
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10
  },


  
  ModalViewViewProduct: {
    padding: 2,
    paddingHorizontal:20,
    // width: 340,
    //width:'100%',
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 3,
    shadowColor: Platform.OS === "android" ? 'black' : "black",
    shadowOpacity: 1,
    paddingBottom:30,
    marginTop:10,
    borderWidth:1,
    borderColor:'black',


  },

  inputViewProduct: {
    flexDirection: "row",
    //width: 300,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    marginBottom:20,
  },
   textInputViewProduct: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: 250,
    //backgroundColor: 'white',
    
    borderRadius: 10,
    // borderColor: "black",
    // borderWidth: 1,
    //padding:12,
    height: 50,
  },


  ButtonCloseViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "red",
    borderRadius: 5,
    marginRight:10,

  },
  ButtonAddViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "green",
    borderRadius: 5,


  },
  ButtonScanViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 5,

  },
  ButtonBarcodeViewProduct: {

    alignItems: 'center',
    justifyContent: "center",
    width: 140,
    height: 50,
    //  backgroundColor:"green",
    borderRadius: 5,
    borderWidth: 1,

  }, 
  ButtonConatinerViewProduct: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'space-around',
    flex:1,
    //justifyContent: "space-between"
  },

  inputTaxViewProduct: {
    flexDirection: "row",
    width: 300,
    height: 50,
    backgroundColor: 'green',
    // borderColor:"black",
    // borderWidth:1,
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    justifyContent: 'space-between'
  },
  pickerViewProduct: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  pickerInputViewProduct: {
    top: -7
  },

 
  formViewProduct: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection:'row',
    alignItems:'space-around',
    width:width,
    
  },
  



  InputiconViewProduct: {
    fontSize: 29,
    marginRight: 10

  },
  TaxTypeViewProduct: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  openViewProduct: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddTextViewProduct: {
    color: 'white',
     fontFamily:'Light',
  },












AddFormContainerMain:{
   flex: 1,
   justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'white' 

},


  textInputAddNewProject: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    
    borderRadius: 10,
  },

   textInputAddNewProjectSelectedPdf: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    backgroundColor: 'white',
    elevation:3,
    padding:15,
    marginTop:15,
    
    borderRadius: 10,
  },
  formAddNewProject: {
    marginTop: 10,
    alignItems: 'center'
  },
  InputiconAddNewProject: {
    fontSize: 29,
    marginRight: 10

  },
  TaxTypeAddNewProject: {
     fontFamily:'Light',
    color: "white",
    fontWeight: '400'
  },
  openAddNewProject: {
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,

  },


  ButtonAddTextAddNewProject: {
    color: 'white',
     fontFamily:'Light',
  },
   pickerInputAddNewProject: {
    top: -7
  },

ButtonConatinerAddNewProject: {
  marginTop:20,
    // flexDirection: 'row',
    // marginTop: 20,
    // justifyContent: "space-between"

  },

  ButtonAddAddNewProject: {


    alignItems: 'center',
    justifyContent: "center",
    width: '100%',
    //padding:10,
    //height: 50,
    //backgroundColor: "green",
    //borderRadius: 5,
    marginBottom:30,


  },

ConfirmCancelButtonTextAddNewProject:{
  color:'black',
  fontFamily:'Medium',
  padding:13,
   // height: 50,
    backgroundColor: "lightblue",
    borderRadius: 5,
    width:'50%',
    textAlign:'center',
},


PickImageButtonContainerAddAddNewProject:{
 marginBottom:15,
 // justifyContent:'space-around',
 // alignItems:'space-around',
 width:'100%',

},
// PickImageButtonTextAddAddNewProject:{
//   //backgroundColor:'green',
//   padding:10,
//   borderRadius:8,
  
//   borderColor:'green',
//   borderWidth:2,
//   width:'100%',


// },

  PickImageButtonTextAddAddNewProject: {
    // fontSize: 20
     
    marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width -100,
    backgroundColor: 'white',
      borderColor:'green',
  borderWidth:2,
  padding:10,
  
    
    borderRadius: 10,
  },



  ViewOrderModalTitleAddProject:{
  textAlign:'center',
  fontFamily:'Light',
  marginTop:20,
},


AddFormContainerMainAddProject:{

  flex: 1,
   justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'wheat' 
},
textInputAddNewProjectAddProject:{
   marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 100,
    //backgroundColor: 'white',
    height:45,
    //paddingVertical:20,
    // justifyContent:'center',
    // alignItems:'center',
    
    borderRadius: 10,
    justifyContent:'center',
},


ProjectBodytextInputAddNewProjectAddProject:{
  marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 50,
    //backgroundColor: 'white',
    height:200,
    //paddingVertical:20,
    // justifyContent:'center',
    // alignItems:'center',
    
    borderRadius: 10,
    // justifyContent:'flex-start',

},

ProjectBodyinput:{
  width: Dimensions.get('window').width-50,
  //flexDirection: "row",
    //width: '100%',
    height: 200,
    borderColor: "black",
    borderWidth: 1,
    //alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    //justifyContent:'flex-start',



},

ProjectBodyInputIcon:{
  marginLeft: 10,

    color: 'black',
    fontFamily:'Light',
    width: Dimensions.get('window').width - 80,
    //backgroundColor: 'white',
    height:180,
    //paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
    
    borderRadius: 10,
    // justifyContent:'flex-start',


},









//-----------UPLOAD OPTIONS -----------------

 
  itemView: {
    //flex: 1,
    flexDirection: 'row',
    width: width,
    alignSelf: 'center',
    //backgroundColor: '#233329',
    //elevation: 0.5,
    
    shadowOffset: { width: 0, height: 0 },
    //shadowColor: Platform.OS === "android" ? 'black' : "black",
    shadowOpacity: 0,
    shadowRadius: 0,

    marginTop: 10,
    borderRadius: 10,
    height: 150,
    marginBottom: 0,
    borderWidth:1,
    //borderColor:Platform.OS === "android" ? 'white' : "white",
    //marginHorizontal: 20,
  },
  ClickableIconContainerOptions:{
    marginTop: 20,
    borderColor:Platform.OS === "android" ? 'green' : "green",
    borderWidth:1,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    width:'40%',
    elevation:3,

  },
  ImageListContainer: {
    justifyContent: 'center',
    width: '50%',


  },
  itemImage: {
    width: '80%',
    height: '70%',
    borderRadius: 10,
    margin: 5,
  },
  nameView: {
    justifyContent: 'center',
    width: '40%'
    //width: '43%',
    // margin: 10,


  },
CustomernameText:{
  fontFamily:'Medium',
},

  



  });

