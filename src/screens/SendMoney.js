import {View, Text, Pressable} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import {Box, Button, Input} from 'native-base';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SendMoney = () => {
  return (
    <Background>
      <View>
        <Text
          style={{
            marginTop: 60,
            fontSize: 30,
            fontWeight: 'bold',
            color: '#fff',
          }}>
          Send Money
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: colors.grey,
          }}>
          Send money to your friends and family
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
        <Text
          style={{
            fontSize: 20,
            color: colors.white,

            marginBottom: 10,
          }}>
          Account Number
        </Text>
        <Input
          placeholder="893724"
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
            alert('Money sent');
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
            Send Money
          </Text>
        </Button>
      </Box>
    </Background>
  );
};

export default SendMoney;
