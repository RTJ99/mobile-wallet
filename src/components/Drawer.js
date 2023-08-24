import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        backgroundColor: colors.dark,
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height,
        position: 'absolute',
        zIndex: 100,
        left: -40,
        bottom: 0,
      }}>
      <Text
        style={{
          color: colors.white,
          fontSize: 20,
          fontWeight: 'bold',
          marginHorizontal: 30,
        }}>
        Menu
      </Text>
      <Icon
        name="close"
        size={30}
        color="white"
        style={{marginHorizontal: 10}}
      />
    </View>
  );
};

export default Drawer;
