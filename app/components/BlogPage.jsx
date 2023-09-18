import React from 'react';
import BlogCard from '../components/PageBlog1';

const BlogPage = () => {
  const blogPosts = [
    {
      cover: '/',
      title: 'COSRX Aloe Soothing Sun Cream: The Best Sun Protection',
      author: 'Nusrat Faruqi',
      date: 'September 18, 2023',
    },
  
  ];

  return (
    <div id='BlogPage' className="flex flex-wrap">
      {blogPosts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogPage;
