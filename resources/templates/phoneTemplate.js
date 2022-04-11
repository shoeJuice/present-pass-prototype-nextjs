import React from 'react';
import {ChakraProvider, Flex, SlideFade} from '@chakra-ui/react'
import phoneStyles from '../../styles/displayStyles.module.css'


export default function TemplateForm(props, router){
    return <Flex
    alignItems='center'
    justifyContent='center'
    height='100vh'
    backgroundColor='#282c34'
    >
        <SlideFade
            key={router.route}
            in="true"
        >
            <div className={phoneStyles.iphoneDisplay}>
                    {props.children}
            </div>
        </SlideFade>
    </Flex>
};


