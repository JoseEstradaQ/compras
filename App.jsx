import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './src/navigations/CustomDrawerContent';
import MyHomeStackNavigations from './src/navigations/MyHomeStackNavigations';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerType: 'back',
            headerShown: false,
          }}>
          <Drawer.Screen name="HomeStack" component={MyHomeStackNavigations} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
