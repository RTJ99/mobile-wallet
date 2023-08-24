import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {Avatar, NativeBaseProvider, StatusBar} from 'native-base';
import Tabs from './src/BottomBar';
import ForgotPassword from './src/screens/ForgotPassword';
import NotificationsScreen from './src/screens/Notifications';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Landing from './src/screens/Landing';
import SendMoney from './src/screens/SendMoney';
import RecievedMoney from './src/screens/RecievedMoney';
import Settings from './src/screens/Settings';
import Statistics from './src/screens/Statistics';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NativeBaseProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home">
          <Stack.Screen
            name="Main"
            component={Tabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
              headerTitle: 'Home',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
            component={Home}
          />
          <Stack.Screen
            name="Landing"
            options={{
              headerShown: false,
              headerTitle: 'Home',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              },
            }}
            component={Landing}
          />

          <Stack.Screen
            name="SignIn"
            options={{
              headerShown: false,

              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
            component={SignIn}
          />
          <Stack.Screen
            name="SignUp"
            options={{
              headerShown: false,
              headerTitle: 'Sign Up',
              headerTitleStyle: {
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
            component={SignUp}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={{
              headerShown: true,
              headerTitle: 'Forgot Password',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={ForgotPassword}
          />
          <Stack.Screen
            name="Notifications"
            options={{
              headerShown: true,
              headerTitle: 'Notifications',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={NotificationsScreen}
          />
          <Stack.Screen
            name="SendMoney"
            options={{
              headerShown: true,
              headerTitle: 'Send Money',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={SendMoney}
          />
          <Stack.Screen
            name="RecievedMoney"
            options={{
              headerShown: true,
              headerTitle: 'Recieved Money',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={RecievedMoney}
          />
          <Stack.Screen
            name="Settings"
            options={{
              headerShown: true,
              headerTitle: 'Settings',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={Settings}
          />
          <Stack.Screen
            name="Stats"
            options={{
              headerShown: true,
              headerTitle: 'Stats',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              },
              //  make the header transparent
              headerTransparent: true,
              // make the arrow back button white
              headerTintColor: '#fff',
            }}
            component={Statistics}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
