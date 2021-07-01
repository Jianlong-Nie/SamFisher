import React from 'react';
import {View} from 'react-native';

import LineGraph from '../Components/LineGraph';

export default function LineChartScreen(): React.ReactElement {
  return (
    <View style={{flex: 1}}>
      <LineGraph />
    </View>
  );
}
