import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export type AppProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App: React.FC<AppProps> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Text>{'test'}</Text>
    </SafeAreaView>
  );
};

export default App;
