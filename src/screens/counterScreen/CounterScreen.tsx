import React from 'react';
import {View, Button} from 'react-native';
import Counter from '../../components/Counter';
import MyButton from '../../components/MyButton';
import {RootStackParamList} from '../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Counter'>;

const CounterScreen = ({navigation}: Props) => {
  return (
    <View>
      <Counter />
      <MyButton />
      <Button title="Go" onPress={() => navigation.navigate('Suspensed')} />
    </View>
  );
};

export default CounterScreen;
