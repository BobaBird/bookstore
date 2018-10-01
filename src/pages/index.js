import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'react-emotion';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const CardContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  padding: 1.45rem 1.0875rem 1.45rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  @media only screen and (maxWidth: 425px) {
    display: inline-block;
    justify-content: space-around;
    // padding-left: 1rem;
  }
  @media only screen and (min-width: 425px) {
    padding: 0 !important;
  }
`;


const Card = styled('div')`
  position: relative;
  margin: 20px;
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  min-width: 300px;
  // max-width: 350px;
  // height: 504px;
  min-height: 304px;
  box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.15), 0 17px 17px 0 rgba(0, 0, 0, 0.15);

  h1 {
    padding: 0.8rem;
  }

  p {
    padding: 0.8rem;
    font-size: 18px;
  }
  
  button {
    margin: 20px;
    border: 1px solid #fff;
    background: orange;
    color: #fff;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
      color: orange;
      background: #fff;
      border: 1px solid orange;
    }
  }

  @media only screen and (max-width 1082px) and (min-width: 426px) {
    margin-top: 2.5rem;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 80px;
    p {
      font-size: 0.8rem;
    }
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my bookstore.</p>
    <p>Now go buy siome books!</p>

    <CardContainer>
      <Card>
        <Img fluid={data.card.fluid} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <p>Book 1</p>
        <p>$3.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="2"
          data-item-name="Book-1"
          data-item-price="3.00"
          data-item-weight="20"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="A good book"
        >
            Buy book 1
        </button>
      </Card>
      <Card>
        <Img fluid={data.card.fluid} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <p>Book 2</p>
        <p>$2.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="2"
          data-item-name="book-2"
          data-item-price="2.00"
          data-item-weight="20"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="A bad book"
        >
            Buy book 2
        </button>
      </Card>
      <Card>
        <Img fluid={data.card.fluid} style={{ width: '200px', margin: '0 auto', marginTop: '10px' }} />
        <p>Book 3</p>
        <p>$5.00</p>
        <button
          type="submit"
          className="snipcart-add-item"
          data-item-id="2"
          data-item-name="book-3"
          data-item-price="5.00"
          data-item-weight="20"
          data-item-url="https://pedantic-banach-caf9e2.netlify.com/"
          data-item-description="The best book"
        >
            Buy book 3
        </button>
      </Card>
    </CardContainer>

    <br />
    <br />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query StoreQuery {
    card: imageSharp(fluid: {originalName: {eq: "gatsby-icon.png"} }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
