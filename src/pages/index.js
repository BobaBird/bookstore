import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <button
      type="submit"
      className="snipcart-add-item"
      data-item-id="2"
      data-item-name="Bacon"
      data-item-price="3.00"
      data-item-weight="20"
      data-item-url="localhost:8000/"
      data-item-description="Some fresh bacon"
    >
        Buy bacon
    </button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
