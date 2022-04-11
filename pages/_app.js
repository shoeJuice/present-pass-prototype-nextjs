import '../styles/globals.css'
import {ChakraProvider, theme, ScaleFade} from '@chakra-ui/react'

import { AnimateSharedLayout } from 'framer-motion';

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    );
}
