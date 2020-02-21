import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#eb3d30' }]}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.buttonText}>Yelp Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#03a2ec' }]}
        onPress={() => navigation.navigate('Index')}
      >
        <Text style={styles.buttonText}>Blog Posts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    padding: 20,
    borderRadius: 5,
    marginVertical: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default HomeScreen;
