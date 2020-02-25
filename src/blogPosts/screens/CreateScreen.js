import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  const handleSubmit = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate('Index'));
  };

  return <BlogPostForm onSubmit={handleSubmit} />;
};

CreateScreen.navigationOptions = () => {
  return {
    title: 'Create Post'
  };
};

export default CreateScreen;
