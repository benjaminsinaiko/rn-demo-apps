import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen id: {navigation.getParam('id')}</Text>
    </View>
  );
};

EditScreen.navigationOptions = () => {
  return {
    title: 'Edit'
  };
};

const styles = StyleSheet.create({
  // style
});

export default EditScreen;
