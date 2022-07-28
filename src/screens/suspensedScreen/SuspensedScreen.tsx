import React, {Suspense} from 'react';
import {Text} from 'react-native';
import PostTitle from '../../components/PostTitle';

const SuspensedScreen = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <PostTitle />
    </Suspense>
  );
};

export default SuspensedScreen;
