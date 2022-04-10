import React, { useEffect, useState } from 'react'

import PhoneTemplate from '../../resources/templates/phoneTemplate'
import PrototypeButton from '../../resources/components/PrototypeButton'

import {Grid, GridItem, Text, Button, Box, VStack, Input} from '@chakra-ui/react'
import {Checkbox, CheckboxGroup} from '@chakra-ui/react'


import NextLink from 'next/link'

function pageTwo() {


  return (
    <PhoneTemplate>
      <Box
        backgroundColor='#B7D7AA'
        width='100%'
        height='100%'
        color='white'
        padding={10}
      >
          <Text
            fontSize='3xl'
            fontWeight='bold'
          >
            Page Two
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque. Quas eos corporis nemo velit quidem eius maiores veniam, ipsum eveniet facilis dolores rerum nesciunt! Consectetur vitae quisquam dignissimos expedita.
          </Text>
          <Box
            marginTop={10}
          >
            <CheckboxGroup>
              <VStack alignItems='flex-start'>
                <Checkbox>ValueOne</Checkbox>
                <Checkbox>ValueTwo</Checkbox>
                <Checkbox>ValueThree</Checkbox>
                <Checkbox>ValueFour</Checkbox>
              </VStack>
            </CheckboxGroup>
          </Box>
          <NextLink replace href='./pageThree'>
            <Button marginTop={20} float='right' colorScheme='whatsapp'>Tester</Button>
          </NextLink>
      </Box>
    </PhoneTemplate>
  )
}

export default pageTwo