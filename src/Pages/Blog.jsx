import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ToText from '../Utils/ToText';

const Blog = () =>   {
  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kghising";

  const [blog, setBlog] = useState({
    item: [],
    isLoading: true,
    error: null
  });

  const axios = require('axios').default;

  useEffect(() => {
    axios.get(mediumURL)
    .then(info => {
      const blogs = info.data.items;

      setBlog({item: blogs, isLoading: false });
    })
    .catch(error => setBlog({ error: error.message }));
  }, [axios])

  const blogArray = blog.item;
  const blogContainer = blogArray.map((blog, index) => {
    return (
      <div key={index} className="blog-container">
        <img src={blog.thumbnail} alt={blog.title} />
        <div className="sub-info">
          <label>{blog.author}</label><span className='seperator'></span>
          <span className='publish-date'>{blog.pubDate.substring(0, 10)}</span>
        </div>
        <h4 className='blog-title'>{blog.title}</h4>
        <p className='blog-description body2'>{`${ToText(blog.description)}...`}</p>
        <a className='blog-link' href={blog.link} target="_blank">Read more</a>
      </div>
  )
  });
  
  return (
    <div className='blogs'>
      {blog.isLoading ? <p className='loading'>Loading...</p> : blogContainer}
    </div>
  );
}

Blog.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Blog);
