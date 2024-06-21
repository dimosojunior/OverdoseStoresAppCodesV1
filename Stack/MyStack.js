
import * as React from 'react';
import {useState, useEffect, useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';


import {NavigationContainer} from '@react-navigation/native';


import WelcomeScreen from '../Screens/WelcomeScreen';
import HomeScreen from '../Screens/HomeScreen';



import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTab from '../Tab/MyTab';


import SigninScreen from '../AccountScreens/SigninScreen';
import SignupScreen from '../AccountScreens/SignupScreen';
import PreLoaderScreen from '../Screens/PreLoaderScreen';

import ProductsCategories from '../Products/ProductsCategories';
import AllProducts from '../Products/AllProducts';
import ViewProducts from '../Products/ViewProducts';

import AllProductsOrders from '../Orders/AllProductsOrders';
import AllProductsOrdersItems from '../Orders/AllProductsOrdersItems';

import ReportsProductsCategories from '../Reports/ReportsProductsCategories';
import ReportsForAllProducts from '../Reports/ReportsForAllProducts';
import ReportsForSpecificCategory from '../Reports/ReportsForSpecificCategory';
import ViewReportOrderItems from '../Reports/ViewReportOrderItems';

import AllClosedOrdersProductCategories from '../Reports/AllClosedOrdersProductCategories';
import AllClosedOrdersByCategories from '../Reports/AllClosedOrdersByCategories';
import AllClosedOrders from '../Reports/AllClosedOrders';

import AllInventoryProductsInStores from '../Inventory/AllInventoryProductsInStores';


import AllCartItems from '../Products/AllCartItems';

const Stack = createStackNavigator();

function MyStack( {naigation}){

  // hii ni kwa ajili ya zile slide za mwanzo km mtu ameshaingia na akaziona
// basi akiingia kwa mara ya pili asizione tena
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  
  useEffect(() => {
    async function check(){

     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    }else {
      setIsAppFirstLaunched(false);
    }



    }
    check()
   
  }, []);

// mwisho hap wa hizo codes za slides za mwanzo

 


  return (

    //isAppFirstLaunched != null &&(
 
 //<NavigationContainer>
    <Stack.Navigator
    //initialRouteName="Home Stack"
      screenOptions={{
      	headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >


      {/* <Stack.Screen
      name="Welcome Stack"
      component={WelcomeScreen}
      options={{ tabBarVisible: false }}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
      */}


<Stack.Screen
      name="PreLoader Stack"
      component={PreLoaderScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


 <Stack.Screen
      name="Signin Stack"
      component={SigninScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Signup Stack"
      component={SignupScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

       <Stack.Screen
      name="Home Stack"
      component={HomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


       <Stack.Screen
      name="Products Categories"
      component={ProductsCategories}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


        <Stack.Screen
      name="All Products"
      component={AllProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


         <Stack.Screen
      name="View Products"
      component={ViewProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



         <Stack.Screen
      name="Products Orders"
      component={AllProductsOrders}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



          <Stack.Screen
      name="Products Orders Items"
      component={AllProductsOrdersItems}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


           <Stack.Screen
      name="Reports Products Categories"
      component={ReportsProductsCategories}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


            <Stack.Screen
      name="Reports For All Products"
      component={ReportsForAllProducts}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


       <Stack.Screen
      name="Reports For Specific Category"
      component={ReportsForSpecificCategory}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
    


     <Stack.Screen
      name="Inventory Products In Stores"
      component={AllInventoryProductsInStores}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


         <Stack.Screen
      name="All Cart Items"
      component={AllCartItems}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
     




          <Stack.Screen
      name="View Report Order Items"
      component={ViewReportOrderItems}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



          <Stack.Screen
      name="All Closed Orders Product Categories"
      component={AllClosedOrdersProductCategories}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


          <Stack.Screen
      name="All Closed Orders By Categories"
      component={AllClosedOrdersByCategories}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


          <Stack.Screen
      name="All Closed Orders"
      component={AllClosedOrders}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
     
     


      </Stack.Navigator>
      //	</NavigationContainer>


     // ) 
//bano la kufunga if is first launched


    );
  }
  export default MyStack;