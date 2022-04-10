import React from 'react'

import {Button} from '@chakra-ui/react'

import {useRouter} from 'next/router'


const PrototypeButton = (props) => {
    const router = useRouter();

  return (
    <Button onClick={router.push(props.routeTo)} {...props}>{props.placeholderText}</Button>
  )
}

export default PrototypeButton