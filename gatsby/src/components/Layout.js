import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
import { BootsContainer } from './BootsElements';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
