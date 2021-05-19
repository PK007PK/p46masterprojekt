import React from 'react';
import GlobalStyles from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Typography from '../../styles/Typography';
import SectionStyles from '../../styles/SectionStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <SectionStyles />
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
