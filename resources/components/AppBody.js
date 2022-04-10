import React from 'react';
import {Flex, Box, Text, Spacer, IconButton, Icon, Avatar, Input, InputGroup, InputLeftElement, InputRightElement, HStack, useColorMode, useColorModeValue} from '@chakra-ui/react'
import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {FaSearch} from 'react-icons/fa'

const ListCarousel = () => {
    return (
        <Box
            
            paddingX={4}
            width='100%'
            paddingY={2}
        >
            <HStack
                
                justifyContent='space-between'
                alignItems='center'
                color={useColorModeValue('B7D7AA', 'white')}
            >
                <IconButton size='sm' variant='unstyled' icon={<ChevronLeftIcon />}/>
                <IconButton size='lg' padding={8}  icon={<Text>Tester</Text>}/>
                <IconButton size='lg' padding={8} icon={<Text >Tester</Text>}/>
                <IconButton size='lg' padding={8} icon={<Text >Tester</Text>}/>
                <IconButton size='lg' padding={8} icon={<Text >Tester</Text>}/>
                <IconButton size='sm' variant='unstyled' icon={<ChevronRightIcon />}/>
            </HStack>
        </Box>
    )
}

const CategoryList = (props) => {
    return (<Box
        backgroundColor={useColorModeValue('white', '#161616')}
        color={useColorModeValue('#B7D7AA', 'white')}
        textAlign='left'
        width='100%'
     >
         <Text marginLeft={3} fontSize='28px'>{props.Placeholder}</Text>
         <ListCarousel />
     </Box>)
}


const AppBody = () => {
    let {toggleColorMode} = useColorMode()
    let textColor = useColorModeValue('#74B159', 'white')
  return (
    <Flex
        backgroundColor={useColorModeValue('white', '#161616')}
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        color='#74B159'
        flex='1'
        
    >
        <Box
            marginTop={10}
        >
            <InputGroup>
                <InputLeftElement children={<FaSearch color={textColor} />}/>
                <Input bgColor={useColorModeValue('white', '#3d3d3d')}  placeholder={'Search'} borderColor='B7D7AA' color={textColor} width='300px'/>
            </InputGroup>
        </Box>
        
        <CategoryList Placeholder='Trending' />
        <CategoryList Placeholder='Recently Viewed' />
        <CategoryList Placeholder='Past Purchases' />

    </Flex>
  );
};

export default AppBody;
