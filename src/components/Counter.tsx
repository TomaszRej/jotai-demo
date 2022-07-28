import React from 'react';
import {useAtomValue} from 'jotai';
import {View, Text} from 'react-native';
import {readCounterAtom} from '../store/counter';

const Counter = () => {
  const counter = useAtomValue(readCounterAtom);
  return (
    <View>
      <Text testID="counter">Counter: {counter}</Text>
    </View>
  );
};

export default Counter;
