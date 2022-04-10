import React from 'react';
import {Flex, Box, Text, Spacer, IconButton, Icon, Avatar, useColorModeValue} from '@chakra-ui/react'
import {AvatarIcon} from './AvatarIcon'
import {FaBell} from 'react-icons/fa'
const Header = () => {
  let iconColor = useColorModeValue('#74B159', 'white')
  return (
  <Flex
    backgroundColor={useColorModeValue('white', '#202020')}
    color={iconColor}
    paddingY={2}
    paddingX={2}
    flexDirection='row'
    justifyContent='space-between'
    alignItems='center'
  >
      <Flex>
        <AvatarIcon />
        <Box
            marginLeft={2}
            textAlign='left'
        >
            <Text fontWeight='medium'>Default Dan</Text>
            <Text fontWeight='thin'>Default_Dan</Text>
        </Box>
      </Flex>
      <IconButton  icon={<FaBell />} fontSize='25px' variant='ghost'></IconButton>
      
    </Flex>);
};

export default Header;
