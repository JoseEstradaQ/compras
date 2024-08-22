import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Login from '../screens/Login';
import UserRegistration from '../screens/UserRegistration';
import PaymentBranch from '../screens/PaymentBranch';
import ShoppingCart from '../screens/ShoppingCart';
import ProductsList from '../screens/ProductsList';
import ProductDetail from '../screens/ProductDetail';
import ProductsCategories from '../screens/ProductsCategories';
import MyPurchases from '../screens/MyPurchases';
import MyFavorites from '../screens/MyFavorites';
import Offers from '../screens/Offers';
import UserProfile from '../screens/UserProfile';
import HelpAndSupport from '../screens/HelpAndSupport';

const Stack = createStackNavigator();

export default function MyHomeStackNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={UserRegistration} />
      <Stack.Screen name="PaymentBranch" component={PaymentBranch} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="ProductsList" component={ProductsList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="ProductsCategories" component={ProductsCategories} />
      <Stack.Screen name="MyPurchases" component={MyPurchases} />
      <Stack.Screen name="MyFavorites" component={MyFavorites} />
      <Stack.Screen name="Offers" component={Offers} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
    </Stack.Navigator>
  );
}
