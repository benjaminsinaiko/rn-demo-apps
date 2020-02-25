import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(BlogContext);
  const id = navigation.getParam('id');

  const blogPost = state.find(blogPost => blogPost.id === id);

  const handleSubmit = (title, content) => {
    editBlogPost(id, title, content, () => navigation.pop());
  };

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={handleSubmit}
    />
  );
};

EditScreen.navigationOptions = () => {
  return {
    title: 'Edit'
  };
};

export default EditScreen;
