import {View, Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import {Box, Button, Input} from 'native-base';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignIn = ({navigation}) => {
  return (
    <Background>
      <View>
        <Text
          style={{
            marginTop: 80,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: colors.grey,
          }}>
          Forgot your password? Enter your email address and we'll send you a
          link to reset your password.
        </Text>
      </View>

      <Box mt={10}>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,

            marginBottom: 10,
          }}>
          Email
        </Text>
        <Input
          placeholder="user@example.com"
          height={16}
          borderRadius={15}
          size={'xl'}
          InputLeftElement={
            <Icon
              name="user"
              size={30}
              style={{marginHorizontal: 10}}
              color={colors.primary}
            />
          }
          type="text"
          borderColor={colors.primary}
          color="white"
        />
      </Box>

      <Box mt={10}>
        <Button
          onPress={() => {
            navigation.navigate('Landing');
          }}
          style={{
            backgroundColor: colors.primary,
            borderRadius: 15,
            height: 50,
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
        </Button>
      </Box>
    </Background>
  );
};

export default SignIn;
