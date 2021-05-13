import React from 'react'; 
import Layout from '../components/layout/Layout';
import Footer from '../components/sections/Footer'; 
import { Flex, Stack, Heading, Box, Button, Text, useToast } from "@chakra-ui/react"
import { Link } from 'gatsby'; 
import { StaticImage } from 'gatsby-plugin-image'

export default function About() {
  // toast
  const toast = useToast(); 

  return (
    <Layout>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column", md: "row" }}
        wrap="no-wrap"
        minH="40vh"
        px={8}
        my={16}
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
            Headphones. Wherever. Whenever.
          </Heading>
          <Text
            color="primary.900"
            size="lg"
          >
            Ever find yourself walking down the street, ready to listen to your favourite podcast, only to realize you forgot your AirPods at home? With audioC0RE, you'll never have that problem again - simply open the app, rent a pair of our premium headphones, and listen to your heart's delight. 
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
            src="../images/headphones_woman.svg"
            alt="neon headphones"
            placeholder="blurred" 
            style={{ borderRadius: "1rem", boxShadow: "5px 5px #E2E8F0" }}
          />
        </Box>
      </Flex>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="40vh"
        px={8}
        mb={16}
      >
        <Box w={{ base: "80%", sm: "80%", md: "55%" }} mt={{ base: 12, md: 0 }}>
          <StaticImage 
            src="../images/headphones_man.svg"
            alt="neon headphones"
            placeholder="blurred" 
            style={{ borderRadius: "1rem", boxShadow: "5px 5px #E2E8F0" }}
          />
        </Box>
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
            San Fransisco. New York. Toronto. 
          </Heading>
          <Text
            color="primary.900"
            size="lg"
          >
            And more cities coming soon! We are the leading headphones sharing app in the world, and we're just getting started. Where should we go next? Let us know!
          </Text>
          <Link to="/contact">
            <Button
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              Contact Us 
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Footer />
    </Layout>
  )
}