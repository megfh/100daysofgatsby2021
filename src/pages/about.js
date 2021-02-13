import React from 'react'; 
import { Link } from 'gatsby'; 
import Layout from '../components/layout/Layout';
import { Box, Text } from "@chakra-ui/react"

export default function About() {
  return (
    <Layout>
      <Box>
      <h1>audioCORE</h1>
      <h2>This is the about page</h2>
      </Box>
    </Layout>
  )
}