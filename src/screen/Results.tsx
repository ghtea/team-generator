import React from 'react';
import {View, Text} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

export type ResultsScreenProps = {
  name: string;
  baseEnthusiasmLevel?: number;
};

export const ResultsScreen: React.FunctionComponent<ResultsScreenProps> =
  () => {
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
