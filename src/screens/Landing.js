import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Background from '../components/Background';
import {Image, DrawerLayoutAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';

const Landing = ({navigation}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => {
    setDrawerOpen(true);
    this.drawer.openDrawer();
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    this.drawer.closeDrawer();
  };

  const navigationView = (
    <View style={{flex: 1, zIndex: 50, backgroundColor: colors.dark}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 30,
            margin: 10,
          }}>
          Menu
        </Text>
        <Pressable onPress={closeDrawer} style={{padding: 10}}>
          <Icon name="cross" size={30} color="#fff" />
        </Pressable>
      </View>
      <Pressable
        onPress={() => {
          closeDrawer();
          navigation.navigate('Stats');
        }}
        style={{padding: 10}}>
        <Text style={{color: '#fff', fontSize: 16}}>Statistics</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          closeDrawer();
          navigation.navigate('SendMoney');
        }}
        style={{padding: 10}}>
        <Text style={{color: '#fff', fontSize: 16}}>Send Money</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          closeDrawer();
          navigation.navigate('Profile');
        }}
        style={{padding: 10}}>
        <Text style={{color: '#fff', fontSize: 16}}>Profile</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          closeDrawer();
          navigation.navigate('Settings');
        }}
        style={{padding: 10}}>
        <Text style={{color: '#fff', fontSize: 16}}>Settings</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          closeDrawer();
          navigation.navigate('SignIn');
        }}
        style={{padding: 10}}>
        <Text style={{color: '#fff', fontSize: 16}}>Sign Out</Text>
      </Pressable>
    </View>
  );
  useEffect(() => {
    setDrawerOpen(true);
  }, []);

  return (
    <Background>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.navigate('Profile')}
          style={styles.iconContainer}>
          <Icon name="user" size={30} color="#fff" />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Notifications');
          }}
          style={styles.iconContainer}>
          <Icon name="bell" size={30} color={colors.primary} />
        </Pressable>
      </View>
      <View
        style={{
          position: 'relative',
          top: 0,
          left: 0,
        }}>
        <Image
          source={require('../../assets/mycard.png')}
          alt="landing"
          resizeMode="contain"
          style={{
            width: '100%',
            height: 300,
            position: 'relative',
            top: 0,
            left: 0,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 50,
          right: 0,
          // backgroundColor: '#000',
          width: '100%',
          height: '100%',

          display: 'flex',
          // justifyContent: 'flex-end',
          paddingTop: '85%',
        }}>
        <View style={{paddingBottom: 80}}>
          <Text
            style={{
              fontSize: 18,

              color: '#fff',
            }}>
            Your Balance
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            $ 0.00
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 10,
            }}>
            2345 2354 2345 2345 9876
          </Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          width: '100%',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('SendMoney');
          }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            backgroundColor: colors.dark,
          }}>
          <Icon name="arrow-with-circle-right" size={30} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Send Money
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('RecievedMoney');
          }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            backgroundColor: colors.dark,
          }}>
          <Icon name="arrow-with-circle-left" size={30} color="#fff" />
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            Received Money
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          paddingBottom: 80,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 20,
            margin: 10,
          }}>
          Recent Transactions
        </Text>
        <View
          style={{
            margin: 10,
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderColor: colors.primary,
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                width: '100%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Received $ 13.00
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                12/12/2020 12:00 PM
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                2345 2354 2345 2345 9876
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                John Doe
              </Text>
            </View>
            <View
              style={{
                borderColor: colors.primary,
                borderWidth: 1,
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                width: '100%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                Received $ 13.00
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                12/11/2020 15:00 PM
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                2345 2354 2345 2345 9876
              </Text>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                John Doe
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 20,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    backgroundColor: colors.dark,
    // zIndex: 2,
  },
  cardContainer: {
    position: 'relative',
    backgroundColor: '#fff',
    top: 0,
    left: 0,
  },
  cardDetailsContainer: {
    position: 'absolute',
    top: 20,
    left: 50,
    right: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  balanceText: {
    fontSize: 18,
    color: colors.lightText,
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.lightText,
    marginTop: 5,
  },
  cardNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.lightText,
    marginTop: 10,
  },
});

export default Landing;
