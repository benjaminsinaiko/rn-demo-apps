import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'));
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent} />
    </View>
  );
};

EditScreen.navigationOptions = () => {
  return {
    title: 'Edit'
  };
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 5
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    marginBottom: 15,
    padding: 5
  }
});

export default EditScreen;
