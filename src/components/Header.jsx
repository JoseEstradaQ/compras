import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {iconSize, spacing} from '../constants/dimensions';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();

  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleDrawer}>
        {/* <FontAew */}

        <FontAwesome5 name={'grip-lines'} size={iconSize.md} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
});
