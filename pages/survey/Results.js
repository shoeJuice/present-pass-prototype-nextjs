import React from 'react'

import PhoneTemplate from '../../resources/templates/phoneTemplate'
import Header from '../../resources/components/Header'
import ItemCard from '../../resources/components/ItemCard'
import Footer from '../../resources/components/Footer'
import {Text, Box, Flex, Grid, IconButton, GridItem} from '@chakra-ui/react'


function Results() {
  return (
    <PhoneTemplate>
        <Flex
          flexDirection="column"
          justifyContent='space-between'
          
          height='100%'
        >
            <Header />
            <ItemCard margin='auto' />
            <Footer marginTop='auto'/>
        </Flex>
    </PhoneTemplate>
  )
}

export default Results