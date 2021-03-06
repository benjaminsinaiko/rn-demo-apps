import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);

  const blogPost = state.find(post => post.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title'),
    headerRight: () => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}
        >
          <EvilIcons name='pencil' size={35} />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  // style
});

export default ShowScreen;
