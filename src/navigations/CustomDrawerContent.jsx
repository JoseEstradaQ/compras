import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {iconSize, spacing} from '../constants/dimensions';
const CustomDrawerContent = props => {
  const handleToggleDrawer = () => {
    props.navigation.closeDrawer();
  };
  return (
    <>
      <DrawerContentScrollView style={styles.container}>
        {/* header container */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleToggleDrawer}>
            <AntDesign name={'close'} size={iconSize.md} />
          </TouchableOpacity>
        </View>
        {/* custom drawer items */}
        <View>
          <DrawerItem
            label={'Inicio'}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <Ionicons name={'home-outline'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Iniciar sesión'}
            onPress={() => {
              props.navigation.navigate('Login');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => (
              <MaterialCommunityIcons name={'account'} size={iconSize.md} />
            )}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Registrarse'}
            onPress={() => {
              props.navigation.navigate('Register');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => (
              <MaterialCommunityIcons
                name={'account-check'}
                size={iconSize.md}
              />
            )}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Sucursal de pago'}
            onPress={() => {
              props.navigation.navigate('PaymentBranch');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <MaterialIcons name={'payments'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Carrito de compras'}
            onPress={() => {
              props.navigation.navigate('ShoppingCart');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <AntDesign name={'shoppingcart'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Productos'}
            onPress={() => {
              props.navigation.navigate('ProductsList');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <MaterialIcons name={'phonelink'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Detalle del producto'}
            onPress={() => {
              props.navigation.navigate('ProductDetail');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <Octicons name={'log'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Categoría de productos'}
            onPress={() => {
              props.navigation.navigate('ProductsCategories');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <FontAwesome name={'th'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Mis compras'}
            onPress={() => {
              props.navigation.navigate('MyPurchases');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <FontAwesome name={'archive'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Mis productos favoritos'}
            onPress={() => {
              props.navigation.navigate('MyFavorites');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <AntDesign name={'like2'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Ofertas'}
            onPress={() => {
              props.navigation.navigate('Offers');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => (
              <MaterialIcons name={'local-offer'} size={iconSize.md} />
            )}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Mi perfil'}
            onPress={() => {
              props.navigation.navigate('UserProfile');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => <AntDesign name={'profile'} size={iconSize.md} />}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
        <View>
          <DrawerItem
            label={'Soporte y ayuda'}
            onPress={() => {
              props.navigation.navigate('HelpAndSupport');
            }}
            activeTintColor="red"
            inactiveTintColor="black"
            icon={() => (
              <MaterialIcons name={'support-agent'} size={iconSize.md} />
            )}
            labelStyle={[styles.labelStyle, {}]}
            style={styles.drawerItem}
          />
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label={'Cerrar sesión'}
          icon={({focused, color, size}) => (
            <AntDesign name={'logout'} size={iconSize.md} />
          )}
          labelStyle={[styles.labelStyle, {}]}
          style={styles.drawerItem}
          // activeTintColor=""
          // inactiveTintColor=""
        />
      </View>
    </>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: spacing.sm,
    marginBottom: spacing.xl,
  },
  drawerItemContainerr: {},
  labelStyle: {
    // fontSize: 20,
  },
  drawerItem: {
    // marginVertical: spacing.sm,
  },
});
