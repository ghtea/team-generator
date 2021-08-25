import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screen/Home';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

export type AppProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const Stack = createNativeStackNavigator();

const App: React.FunctionComponent<AppProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
