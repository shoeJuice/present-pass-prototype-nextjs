import React from 'react';
import {Flex, Grid, Box, Text, Button, Input} from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'
import AppBody from './AppBody'
const displayContainer = () => {
  return (<Flex
    flexDirection='column'
    justifyContent='space-between'
    width='100%'
    height='100%'
    backgroundColor='white'
  >
    
    <Header />
    <AppBody />
    <Footer />
  </Flex>);
};

export default displayContainer;
