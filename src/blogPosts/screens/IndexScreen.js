import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { Context as BlogContext, Provider as BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
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
