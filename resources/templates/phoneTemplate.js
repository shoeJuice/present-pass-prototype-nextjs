import React from 'react';
import {ChakraProvider, Flex} from '@chakra-ui/react'
import phoneStyles from '../../styles/displayStyles.module.css'


export default function TemplateForm(props){
    return <Flex
    alignItems='center'
    justifyContent='center'
    height='100vh'
    backgroundColor='#282c34'
    >
        <div className={phoneStyles.iphoneDisplay}>
                {props.children}
          </div>
    </Flex>
};


