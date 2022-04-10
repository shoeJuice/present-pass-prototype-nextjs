import React from 'react';
import DisplayContainer from '../../resources/components/DisplayContainer'

import {ChakraProvider, Flex} from '@chakra-ui/react'


import phoneStyles from '../../styles/displayStyles.module.css'

export default function MainPage(){
  return( 
        <Flex
            alignItems='center'
            justifyContent='center'
            height='100vh'
            backgroundColor='#282c34'
          >
            <div className={phoneStyles.iphoneDisplay}>
              <DisplayContainer />
            </div>
        </Flex>
  );
};


