import React from 'react'; 
import { useRadio, Box } from '@chakra-ui/react'

// 1. Create a component that consumes the `useRadio` hook
export default function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "purple.500",
          color: "white",
          borderColor: "purple.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

