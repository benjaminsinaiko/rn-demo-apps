import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext, { BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

const BlogApp = IndexScreen;

export default () => {
  return (
    <BlogProvider>
      <BlogApp />
    </BlogProvider>
  );
};
