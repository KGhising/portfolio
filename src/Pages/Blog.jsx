import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Blog = () =>   {
  return (
    <section>
      <div className='blogs'>
        <h4 className='comming-soon-heading'>Coming Soon...</h4>
      </div>
    </section>
  );
}

Blog.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Blog);
