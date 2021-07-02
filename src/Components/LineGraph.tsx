import moment from 'moment';
import React, {useMemo} from 'react';
import {Alert, processColor, StyleSheet} from 'react-native';
import {
  LineChart,
  LineDataset,
  LineDatasetConfig,
  LineValue,
} from 'react-native-charts-wrapper';
import {testData} from '../../mocks/data';

interface IUnitProps {
  uom: string;
}
export interface IDataItemProps {
  createdAt: string;
  date: string;
  type: string;
  unit: IUnitProps;
  value: number;
}

export default function LineGraph(): React.ReactElement {
  const dates: string[] = useMemo(
    () =>
      testData.map((item: IDataItemProps) => {
        let date = moment(item.date)
          .format('MMM Do')
          .replace('nd', '')
          .replace('th', '');
        return date;
      }),
    [],
  );
  const config: LineDatasetConfig = useMemo(
    () => ({
      drawCircles: true,
      circleColor: processColor('#EC6F22'),
      circleHoleColor: processColor('#EC6F22'),
      circleRadius: 5,
      lineWidth: 2,
      color: processColor('#8EC5CA'),
      drawValues: false,
      //   visible: false,
      //   drawFilled: true,
    }),
    [],
  );
  let values: any[] = useMemo(
    () =>
      testData.reverse().map((item: IDataItemProps) => ({
        y: item.value,
        marker: 'sdfsdf',
      })),
    [],
  );
  let dataSets: LineDataset[] = useMemo(
    () => [{values, config, label: ''}],
    [config, values],
  );
  return (
    <LineChart
      style={styles.chart}
      scaleEnabled={true}
      scaleXEnabled={true}
      scaleYEnabled={true}
      highlightPerTapEnabled={true}
      highlightPerDragEnabled={false}
      pinchZoom={true}
      doubleTapToZoomEnabled={false}
      onSelect={event => {
        let entry = event.nativeEvent;
        if (entry != null) {
          alert(JSON.stringify(entry));
        }

        console.log('====================================');
        console.log(entry);
        console.log('====================================');
      }}
      onChange={event => console.log(event.nativeEvent)}
      legend={{
        enabled: false,
      }}
      animation={{
        durationX: 0,
        durationY: 600,
        easingY: 'EaseInOutQuart',
      }}
      xAxis={{
        enabled: true,
        position: 'BOTTOM',
        drawLabels: true,
        valueFormatter: dates,
        granularityEnabled: true,
        granularity: 1,
      }}
      yAxis={{
        left: {
          enabled: false,
        },
        right: {
          enabled: true,
        },
      }}
      data={{
        dataSets,
      }}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chart: {
    flex: 1,
  },
});
