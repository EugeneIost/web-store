import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Wrapper from '../UI/Wrapper/Wrapper';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <footer />
    </Wrapper>
  );
};

export default Layout;
