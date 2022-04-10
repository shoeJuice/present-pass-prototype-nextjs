import React from 'react'

import PhoneTemplate from '../../resources/templates/phoneTemplate'

import {Grid, GridItem, Text, Button, Box, VStack, Input} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import NextLink from 'next/link'

export default function PageOne() {
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
            Page One
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque. Quas eos corporis nemo velit quidem eius maiores veniam, ipsum eveniet facilis dolores rerum nesciunt! Consectetur vitae quisquam dignissimos expedita.
          </Text>
          <Box
            marginTop={10}
          >
            <Text>First Name</Text>
            <Input backgroundColor='white' color='black' />
            <Text>Last Name</Text>
            <Input backgroundColor='white' color='black' />
          </Box>
          <NextLink replace href='./pageTwo'>
            <Button marginTop={20} float='right' colorScheme='whatsapp'>Tester</Button>
          </NextLink>
      </Box>
    </PhoneTemplate>
  )
}

 