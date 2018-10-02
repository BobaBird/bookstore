import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';


const HeaderWrapper = styled('div')`
  background: #4286f4;
  margin-bottom: 1.45rem;
  h1 {
    font-size: 2.5rem;
    font-weight: 200;
  }
`;

const HeaderContainer = styled('div')`
  margin: 0 auto;
  max-width: 1550px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
