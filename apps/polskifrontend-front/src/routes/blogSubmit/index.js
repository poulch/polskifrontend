import React from 'react';
import BlogSubmit from './BlogSubmit';
import Layout from '../../components/Layout/Layout';

export default {
  path: '/blog-submit',
  async action() {
    return {
      title: 'Zgłoś bloga | Polski Front-End',
      component: <Layout><BlogSubmit /></Layout>
    };
  }
};
