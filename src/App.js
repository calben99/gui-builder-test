import React from 'react'
import {
  ChakraProvider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Grid,
  Textarea
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Alert>
      <AlertIcon />
      <AlertTitle mr={1} fontWeight="bold">
        Alert title
      </AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>
    <Grid templateColumns="repeat(5, 1fr)" gap={6} />
    <Textarea />
  </ChakraProvider>
)

export default App
