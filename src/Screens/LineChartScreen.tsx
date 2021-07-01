import React, {useEffect, useCallback, useState} from 'react';

import {Dimensions, View, useWindowDimensions} from 'react-native';
import LineGraph from '../Components/LineGraph';
import Tool from '../utils/tools';

export default function LineChartScreen(): React.ReactElement {
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const {width} = useWindowDimensions();
  const [currentWidth, setCurrentWidth] = useState<number>(width);
  const orientationHandeler = useCallback(() => {
    setIsPortrait(Tool.isPortrait());
    setCurrentWidth(Dimensions.get('screen').width);
  }, []);
  useEffect(() => {
    Dimensions.addEventListener('change', orientationHandeler);
  });

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: isPortrait ? 15 : 40,
          height: isPortrait ? 0.6 * currentWidth : '100%',
          paddingTop: isPortrait ? 60 : 10,
        }}>
        <LineGraph />
      </View>
    </View>
  );
}
