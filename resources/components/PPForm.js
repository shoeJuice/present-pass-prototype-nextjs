import React from 'react';
import {Box, Text, FormControl, Button, Input, FormLabel, Flex, Checkbox, Stack, Radio, RadioGroup, Switch, Select, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react'
import {ChevronLeftIcon} from '@chakra-ui/icons'

import { useRouter } from 'next/dist/client/router';

const SettingsForm = () => {
    const router = useRouter();
    let {colorMode, toggleColorMode} = useColorMode();
    let bgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
    
    React.useEffect(() =>{console.log(colorMode)}, [colorMode])

    return(<Box
        backgroundColor={useColorModeValue('#B7D7AA', '#161616')}
        height='100%'
        textAlign='left'
    >
        <Button leftIcon={<ChevronLeftIcon />} colorScheme='green' variant='ghost' borderRadius={0} padding={6} onClick={() => {router.back()}}>Back</Button>
        <Flex
            flexDirection='column'
            alignItems='center'
            marginTop={60}
        >
            <Box
                width='300px'
            >
                <Text
                marginBottom={2}
                fontWeight='bold'
                color={useColorModeValue('white', '#9AE6B4')}
                fontSize='20px'
            >Settings</Text>
            </Box>
            <Box
                backgroundColor={bgColor}
                width='300px'
                margin='auto'
                paddingY={5}
                paddingX={3}
                borderRadius={6}
                boxShadow='base'
                textAlign='left'
            >
                <FormControl>
                    <Stack
                        direction='column'
                        spacing={2}
                    >
                        <Box
                            color={useColorModeValue('black', 'white')}
                        >
                            <FormLabel >Enable Dark Theme</FormLabel>
                            <Switch onChange={toggleColorMode} isChecked={(colorMode === 'light' ? false : true)} colorScheme='whatsapp' />
                        </Box>
                        <Box>
                            <FormLabel 
                                color={useColorModeValue('black', 'white')}
                            >Placeholder Label</FormLabel>
                            <Select placeholder='Placeholder Text'>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Select>
                        </Box>
                    </Stack>
                </FormControl>
                
            </Box>
        </Flex>
    </Box>)
}

const RegisterForm = () => {
    
    return (<Box
        backgroundColor='#B7D7AA'
        height='100%'
        textAlign='left'
    >
        <Button leftIcon={<ChevronLeftIcon />} colorScheme='green' variant='ghost' borderRadius={0} padding={6} onClick={() => {navigate(-1)}}>Back</Button>
        <Flex
            flexDirection='column'
            alignItems='center'
        >
            <Box
                width='300px'
            >
                <Text
                marginBottom={2}
                fontWeight='bold'
                color='white'
                fontSize='20px'
            >Register</Text>
            </Box>
            <Box
                backgroundColor='white'
                width='300px'
                margin='auto'
                paddingY={5}
                paddingX={3}
                borderRadius={6}
                boxShadow='base'
                textAlign='center'
            >
                <FormControl>
                    <FormLabel >First Name</FormLabel>
                    <Input  />
                    <FormLabel marginTop={2} >Last Name</FormLabel>
                    <Input  />
                    <FormLabel marginTop={2} >E-Mail Address</FormLabel>
                    <Input  />
                    <FormLabel marginTop={2} >Username</FormLabel>
                    <Input  />
                    <FormLabel marginTop={2} >Password</FormLabel>
                    <Input  />
                    <FormLabel marginTop={2} >Verify Password</FormLabel>
                    <Input  />
                    <Button marginTop={5} colorScheme='whatsapp'>Register</Button>
                    
                </FormControl>
                
            </Box>
        </Flex>
    </Box>)
}

const ResetPassword = () => {
    const router = useRouter();
    return <Box
        backgroundColor='#B7D7AA'
        height='100%'
        textAlign='left'
    >
        <Button leftIcon={<ChevronLeftIcon />} colorScheme='green' variant='ghost' borderRadius={0} padding={6} onClick={() => {router.push('/')}}>Back</Button>
        <Flex
            flexDirection='column'
            alignItems='center'
        >
            <Text
                marginRight={20}
                marginBottom={2}
                fontWeight='bold'
                color='white'
                fontSize='20px'
            >Reset Password</Text>
            <Box
                backgroundColor='white'
                width='250px'
                margin='auto'
                paddingY={5}
                paddingX={3}
                borderRadius={6}
                boxShadow='base'
                textAlign='center'
            >
                <FormControl>
                    <FormLabel htmlFor='email'>E-Mail Address</FormLabel>
                    <Input  />
                    <Button marginTop={5} colorScheme='whatsapp'>Send Reset E-Mail</Button>
                    
                </FormControl>
                
            </Box>
        </Flex>
    </Box>
}

const PPForm = (props) => {

    const router = useRouter();

    let dialogBgColor = useColorModeValue('gray.50', 'whiteAlpha.50')
    let pageBgColor = useColorModeValue('#B7D7AA', '#161616')
    let textColor = useColorModeValue('#74B159', 'white')
    
    if(props.isSettings){
        return(<SettingsForm />)
    }
    if(props.isRegister){
        return(<RegisterForm />)
    }
    if(props.isReset){
        return(<ResetPassword />)
    }
 return (<Box
    backgroundColor={pageBgColor}
    height='100%'
    paddingY={40}
    
  >
      <Box textAlign='center'>
          <Icon viewBox='0 0 200 200' color='green.500'>
                <path fill="currentColor" d="M0 0h315v233.447H0z"/>
                <defs>
                    <pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox">
                        <use xlinkHref="#b" transform="matrix(.0008 0 0 .00108 -.002 0)"/>
                    </pattern>
                </defs>
            </Icon>
      </Box>
        <Box
        >
            <Text
                marginLeft={20}
                marginBottom={2}
                fontWeight='bold'
                color='white'
                fontSize='20px'
            >Log In</Text>
            <Box
                backgroundColor={dialogBgColor}
                width='250px'
                margin='auto'
                paddingY={5}
                paddingX={3}
                borderRadius={6}
                boxShadow='base'
                textAlign='center'
            >
                <FormControl>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input marginBottom={5}/>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input  />
                    <Button variant="unstyled" marginLeft={-20} onClick={() => {router.push('/resetPassword')}}>Forgot Password</Button>
                </FormControl>
                <Checkbox colorScheme='green' marginTop={5} marginLeft='-85px'>Remember Me</Checkbox>
            </Box>
        </Box>
        <Flex alignItems='center' flexDirection='column'>
            <Button width='150px' colorScheme='whatsapp' marginTop={10} onClick={() => {router.push('/mainpage')
            }}>Log In</Button>
            <Button variant="unstyled" color={textColor} onClick={() => {router.push('/register')}}>New to Present Pass? Register Here!</Button>
        </Flex>
        
  </Box>);
};

export default PPForm;
