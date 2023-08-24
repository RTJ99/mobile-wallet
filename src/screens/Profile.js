import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Background from '../components/Background';
import colors from '../constants/colors';

const ProfilePage = () => {
  return (
    <Background style={styles.container}>
      <View style={styles.coverImage} />
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/avatar.jpeg')}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Ryan Jena</Text>
        <Text style={styles.location}>Harare</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>About Me</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
          urna vel nulla ullamcorper rutrum. Ut auctor massa nunc, nec posuere
          justo hendrerit at. Duis condimentum augue quis quam rhoncus, ut
          tincidunt orci volutpat.
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverImage: {
    height: 200,
    width: '100%',
  },
  profileContainer: {
    position: 'absolute',
    top: 120,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  name: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    fontSize: 16,
    color: colors.white,
  },
  info: {
    marginTop: 160,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.primary,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: colors.white,
  },
  movies: {
    fontSize: 16,
    color: colors.white,
  },
});

export default ProfilePage;
