import React, {useEffect} from 'react';
import {View, Button} from 'react-native';
import {useAtom} from 'jotai';
import {writeCounterAtom} from '../store/counter';

const MyButton = () => {
  const [, update] = useAtom(writeCounterAtom);

  const handlePress = () => {
    update();
  };

  useEffect(() => {
    console.warn('render');
  });

  return (
    <View>
      <Button title="increment" onPress={handlePress} />
    </View>
  );
};

export default MyButton;
