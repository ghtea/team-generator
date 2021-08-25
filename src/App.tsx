import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screen/Home';
import {ResultsScreen} from './screen/Results';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

export type AppProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Tab = createBottomTabNavigator();

const App: React.FunctionComponent<AppProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="results"
          component={ResultsScreen}
          options={{title: 'Results'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
