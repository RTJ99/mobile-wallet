import {View, Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import {AreaChart, Grid} from 'react-native-svg-charts';
import {Path} from 'react-native-svg';
import * as shape from 'd3-shape';
import DailySpendings from '../components/DailySpendings';
const Statistics = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const Line = ({line}) => (
    <Path key={'line'} d={line} stroke={'#07C86B'} fill={'none'} />
  );

  return (
    <Background>
      <Text
        style={{
          marginTop: 40,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Weekly Spendings
      </Text>
      <AreaChart
        style={{height: 200}}
        data={data}
        contentInset={{top: 30, bottom: 30}}
        curve={shape.curveNatural}
        svg={{fill: 'rgba(134, 65, 244, 0.2)'}}>
        <Grid />
        <Line />
      </AreaChart>
      <Text
        style={{
          marginTop: 40,
          fontSize: 30,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Daily Spendings
      </Text>
      <DailySpendings />
    </Background>
  );
};

export default Statistics;
