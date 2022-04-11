import React from 'react'


import {Box, Flex, Text, Button, Icon} from '@chakra-ui/react'


export default function ItemCard(props) {

  return (
    <Flex
        flexDirection='column'
        borderRadius={6}
        padding={4}
        width="50%"
        color="#74B159"
        border='1px solid'
        {...props}
    >
        <Text>{props.itemTitle ? props.itemTitle : "Title Goes Here"}</Text>
        <Text>{props.itemSeller ? props.itemSeller : "Seller Goes Here"}</Text>
        <Text>{props.itemPrice ? props.itemPrice : "Price Goes Here"}</Text>
        <Text>Image Goes Here</Text>
        <Button colorScheme='whatsapp'>Button</Button>
    </Flex>
  )
}

 