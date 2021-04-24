import React from 'react'; 
import Layout from '../components/layout/Layout'; 
import Hero from "../components/sections/Hero";
import { Box, Divider, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'; 
import { graphql, Link } from 'gatsby'

export default function HomePage({ data }) {
  return ( 
    <Layout>
      <Hero />
      <Divider />
      <Flex
        direction="column"
        m="1em"
        p="1em"
        align="center"
        w="full"
      >
        <Heading
          color="primary.800"
        >
          Latest Blog Posts
        </Heading>
        <SimpleGrid
          minChildWidth="300px"
          spacing="25px"
          w="full"
          justifyContent="space-around"
          justifyItems="center"
          p="1em"
        >
          {data.allWpPost.edges.map(({node:post}) => (
            <Box m="10px" p="10px" grow="1" maxW="400px" key={post.slug}>
            <Link to={'/blog/' + post.slug}>
              <Heading as="h4" size="lg" color="primary.800" mb="1.5">
                {post.title}
              </Heading>
              <Text dangerouslySetInnerHTML={{ __html: post.excerpt }} isTruncated="true">
              </Text>

            </Link>
            
          </Box>
          ))}
          
        </SimpleGrid>
      </Flex>
    </Layout>
    
  )
}; 

export const query = graphql`
  query wpPost {
    allWpPost(sort: { fields: date, order: DESC}, limit: 3) {
      edges {
        node {
          title
          date
          id
          slug
          excerpt
        }
      }
    }
  }
`
