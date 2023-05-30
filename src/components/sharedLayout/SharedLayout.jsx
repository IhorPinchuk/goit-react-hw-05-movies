import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: tomato;
  }
`;

const SharedLayout = () => {
    return (
      <>
    <header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="movies">Movies</StyledLink>
          </li>
        </ul>
      </nav>
      </header>
      <main>
          <Outlet />
      </main>    
  </>
  )
};

export default SharedLayout;
