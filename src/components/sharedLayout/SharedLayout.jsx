import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './sharedLayout.module.css';

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
          <ul className={css.nav_list}>
            <li className={css.nav_item}>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
