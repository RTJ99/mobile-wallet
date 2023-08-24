import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const data = [
  {
    id: 1,
    title: 'Slide 1',
    text: 'This is slide 1',
    image: require('../../assets/piic5.png'),
  },
  {
    id: 2,
    title: 'Slide 2',
    text: 'This is slide 2',
    image: require('../../assets/piic2.png'),
  },
  {
    id: 3,
    title: 'Slide 3',
    text: 'This is slide 3',
    image: require('../../assets/piic3.png'),
  },
];

const App = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image
        source={item.image}
        style={{
          width: Dimensions.get('window').width - 80,
          height: Dimensions.get('window').height / 2.5,
          borderRadius: 10,
          marginBottom: 20,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg2.png')}
        style={styles.image}>
        <View
          style={{
            marginTop: Dimensions.get('window').height / 5,
          }}>
          <View style={{marginTop: 40, paddingHorizontal: 45}}>
            <Carousel
              inactiveSlideOpacity={0}
              data={data}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width - 20}
              itemWidth={
                Dimensions.get('window').width -
                20 -
                Dimensions.get('window').width / 5
              }
              onSnapToItem={index => setActiveSlide(index)} // Set the active slide index
            />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotStyle={styles.paginationDot}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 45,
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Help Keep Track of your
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: '#FFF615',
                  textAlign: 'center',
                }}>
                {' '}
                Finances
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                color: '#fff',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Tracking your spending on a regular basis can give you an accurate
              picture
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Button
              onPress={() => navigation.navigate('SignIn')}
              style={{
                border: '1px solid #FFF615',
                borderColor: '#07C86B',
                borderWidth: 1,
                margin: 'auto',
                backgroundColor: '#FFF61500',
                width: 200,
                height: 50,
                borderRadius: 30,
                marginTop: 30,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#07C86B',
              }}>
              Get Started
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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

export default App;
