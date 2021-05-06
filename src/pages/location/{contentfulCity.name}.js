import React from 'react'; 
import { graphql } from 'gatsby'; 
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"; 
import Layout from '../../components/layout/Layout';
import { Heading, Text, Divider, Flex, Button, Stack, Box, useToast } from '@chakra-ui/react'

export default function City({ data }) {
  // toast
  const toast = useToast(); 
  return (
    <Layout>
      <Divider/>
      <GatsbyImage image={data.contentfulCity.skylineImage.gatsbyImageData} alt={data.contentfulCity.skylineImage.title}/> 
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column", md: "row" }}
        wrap="no-wrap"
        minH="40vh"
        px={8}
      >
        <Stack
          spacing={3}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h2"
            size="lg"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {data.contentfulCity.name}
          </Heading>
          <Text
            color="primary.900"
            size="lg"
          >
            {data.contentfulCity.description}
          </Text>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            onClick={() =>
              toast({
                title: "Sorry, friend!",
                description: "This is a fictional startup, there is no real app",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
              })
            }
          >
            Get Started 
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "80%", md: "55%" }} mt={{ base: 12, md: 0 }}>
          <StaticImage 
            src="../../images/headphones_woman.svg"
            alt="neon headphones"
            placeholder="blurred" 
            style={{ borderRadius: "1rem", boxShadow: "5px 5px #E2E8F0" }}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    contentfulCity(id: {eq: $id}) {
      name
      description
      coordinates {
        lat
        lon
      }
      skylineImage {
        title
        gatsbyImageData
      }
    }
  }
`