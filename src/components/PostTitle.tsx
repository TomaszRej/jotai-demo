import React from 'react';
import {atom, useAtomValue} from 'jotai';
import {StyleSheet, Text, View} from 'react-native';

interface PostData {
  by: string;
  title?: string;
}

export const postData = atom(async () => {
  const id = 9001;
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  return response.json() as Promise<PostData>;
});

const PostTitle = () => {
  const {by, title} = useAtomValue(postData);

  return (
    <View style={styles.container}>
      <Text testID="by">{by}</Text>
      <Text testID="title">{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostTitle;
