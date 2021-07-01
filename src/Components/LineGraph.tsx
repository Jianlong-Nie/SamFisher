import React, {useCallback, useEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
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
  let values: Array<number | LineValue> = useMemo(
    () =>
      testData.map((item: IDataItemProps) => ({
        y: item.value,
      })),
    [],
  );
  let dataSets: LineDataset[] = useMemo(
    () => [{values, label: 'demo'}],
    [values],
  );
  return (
    <LineChart
      style={styles.chart}
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
