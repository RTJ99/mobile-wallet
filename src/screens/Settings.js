import {View, Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import {Switch, StyleSheet} from 'react-native';
const Settings = () => {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    React.useState(false);
  const [touchIDEnabled, setTouchIDEnabled] = React.useState(false);
  return (
    <Background>
      <View style={styles.section}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          value={pushNotificationsEnabled}
          onValueChange={value => setPushNotificationsEnabled(value)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Touch ID</Text>
        <Switch
          value={touchIDEnabled}
          onValueChange={value => setTouchIDEnabled(value)}
        />
      </View>
    </Background>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  label: {
    fontSize: 16,
    color: '#fff',
  },
});
