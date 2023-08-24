import {Box, View, Avatar} from 'native-base';
import React, {useState, useCallback, useEffect} from 'react';
import {Pressable, Text} from 'react-native';
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pic from '../../assets/avatar.jpeg';
import colors from '../constants/colors';

export default function Example() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello patient',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = [], text = '') => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    setInputText('');
  }, []);
  const renderChatHeader = () => {
    return (
      <View style={{paddingVertical: 10, paddingHorizontal: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Your Name</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Box
        style={{
          paddingTop: 40,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#fff',
          paddingBottom: 10,
          paddingHorizontal: 20,
          alignItems: 'center',

          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Avatar size="sm" source={pic} />
        <Text
          style={{
            fontSize: 20,
            color: colors.dark,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          Doctor
        </Text>
      </Box>

      <GiftedChat
        renderChatHeader={() => (
          <View
            style={{
              backgroundColor: '#326681',
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 20}}>Chat</Text>
          </View>
        )}
        renderAvatarOnTop={true}
        renderSend={props => (
          <Pressable
            style={{marginRight: 10, marginBottom: 5}}
            onPress={() => {
              if (props.text && props.text.trim().length > 0) {
                const message = {
                  _id: Math.random(),
                  text: props.text.trim(),
                  createdAt: new Date(),
                  user: {
                    _id: 1,
                  },
                };
                onSend([message], props.text);
              }
            }}>
            <Icon name="send-circle" size={40} color="#326681" />
          </Pressable>
        )}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: '#326681',
                },
              }}
              textStyle={{
                right: {
                  color: '#fff',
                },
              }}
            />
          );
        }}
        messages={messages}
        onSend={messages => onSend(messages, inputText)}
        user={{
          _id: 1,
        }}
        text={inputText}
        onInputTextChanged={text => setInputText(text)}
      />
    </View>
  );
}
