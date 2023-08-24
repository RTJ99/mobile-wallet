import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from '../components/Background';
import colors from '../constants/colors';

const notifications = [
  {
    id: 1,
    title: 'Bank Transfere',
    message:
      'You have recieved a bank transfer of $1000 from John Doe. It will be available in your account in 2-3 business days.',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'From Dr. Smith',
    message:
      'You have recieved a wire transfer of $500 from Dr. Smith. It will be available in your account in 2-3 business days.',
    time: 'yesterday',
  },
  {
    id: 3,
    title: 'Bank ABC ',
    message: 'You have recieved a bank transfer of $1000 from Bank ABC.',
    time: '3 days ago',
  },
];

const NotificationsScreen = () => {
  return (
    <Background>
      <View
        style={{
          marginTop: 60,
        }}>
        {notifications.map(notification => (
          <View style={styles.notification} key={notification.id}>
            {/* <Icon
            name="notifications"
            size={30}
            color="#aaa"
            style={styles.icon}
          /> */}
            <View style={styles.content}>
              <Text style={styles.title}>{notification.title}</Text>
              <Text style={styles.message}>{notification.message}</Text>
            </View>
            <Text style={styles.time}>{notification.time}</Text>
          </View>
        ))}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.glassy,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    // put shadow
    shadowRadius: 3.84,
  },
  icon: {
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.primary,
  },
  message: {
    fontSize: 14,
    color: colors.grey,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginLeft: 10,
  },
});

export default NotificationsScreen;
