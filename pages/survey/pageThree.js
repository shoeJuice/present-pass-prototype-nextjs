import React, {useState, useEffect} from 'react'

import PhoneTemplate from '../../resources/templates/phoneTemplate'

import {Grid, GridItem, Text, Button, Box, VStack, Input, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb} from '@chakra-ui/react'
import {useRouter} from 'next/router'

import NextLink from 'next/link'

function pageThree() {

  const [budgetPrice, setBudgetPrice] = useState([0, 20])

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
            Page Three
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque. Quas eos corporis nemo velit quidem eius maiores veniam, ipsum eveniet facilis dolores rerum nesciunt! Consectetur vitae quisquam dignissimos expedita.
          </Text>
          <Box
            marginTop={10}
          >
            <Text fontSize='2xl'>Budget</Text>
            <Text>{`$${budgetPrice[0]} - $${budgetPrice[1]}`}</Text>
            <RangeSlider min={0} max={450} defaultValue={[0, 45]} colorScheme='whatsapp' onChange={(val) => {setBudgetPrice(val)}}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0}/>
              <RangeSliderThumb index={1}/>
            </RangeSlider>
          </Box>
          <NextLink replace href='./Results'>
            <Button marginTop={20} float='right' colorScheme='whatsapp'>Tester</Button>
          </NextLink>
      </Box>
    </PhoneTemplate>
  )
}

export default pageThree