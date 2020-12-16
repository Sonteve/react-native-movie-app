import React, {useEffect} from 'react';
import {Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '~/Screens/HomeScreen';
import DetailsScreen from '~/Screens/DetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{title: 'Overview'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 55}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
