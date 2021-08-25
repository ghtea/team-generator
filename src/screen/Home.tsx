import React from 'react';
import {View, Text} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

export type HomeScreenProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View>
      <Text />
    </View>
  );
};
