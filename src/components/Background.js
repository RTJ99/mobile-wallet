import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'native-base';

const Background = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <ScrollView
          // hide scroll bar
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 30,
            }}>
            {props.children}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    // justifyContent: 'center',
  },
  slide: {
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  paginationContainer: {
    marginTop: 10,
    paddingVertical: 8,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
});

export default Background;
