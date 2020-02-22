import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import BlogContext, { BlogProvider } from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={data => data.title}
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
