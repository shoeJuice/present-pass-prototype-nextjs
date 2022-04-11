import React from 'react';
import {Button, Flex, Box, IconButton, Icon, useColorModeValue} from '@chakra-ui/react'
import {FaHome, FaCog, FaShoppingCart, FaUser, FaGift} from 'react-icons/fa'

import { useRouter } from 'next/router';
import NextLink from 'next/link'

const Footer = () => {

  const router = useRouter();
  let iconColor = useColorModeValue('#74B159', 'white')

  const handleClick = (location) => {
    router.push(location)
  }

  return (<Flex 
    bgColor={useColorModeValue('white', '#202020')} 
    paddingY={4}
    paddingX={4}
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
    color={iconColor} 
    >
        <IconButton  variant='ghost' fontSize='25px' icon={<FaHome />} onClick={() => {handleClick('/mainpage')}} />
        <IconButton   variant='ghost' fontSize='25px' icon={<FaUser />} onClick={() => {handleClick('/profile')}}/>
        <IconButton color={useColorModeValue('#74B159', '#9AE6B4')}  isRound   fontSize='35px' icon={<Icon boxSize={6} as={FaGift} onClick={() => {handleClick('/survey/pageOne')}} />}/>
        <IconButton   variant='ghost' fontSize='25px' icon={<FaCog />}  onClick={() => {handleClick('/mainpage/settings')}} />
        <IconButton   variant='ghost' fontSize='25px' icon={<FaShoppingCart />} onClick={() => {handleClick('/checkout')}} />
    </Flex>);
};

export default Footer;
