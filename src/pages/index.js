import React from 'react'; 
import Layout from '../components/layout/Layout'; 
import Hero from "../components/sections/Hero";
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'; 
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
      >
        <Heading
          color="primary.800"
        >
          Latest Blog Posts
        </Heading>
        <Flex
          wrap="wrap"
          align="center"
          justify="space-evenly"
          p="1em"
        >
          {data.allWpPost.edges.map(({node:post}) => (
            <Box m="10px" p="10px" grow="1" maxW="400px" key={post.slug}>
            <Link to={'/blog/' + post.slug}>
              <Heading as="h4" size="lg" color="primary.800">
                {post.title}
              </Heading>
              <Text dangerouslySetInnerHTML={{ __html: post.excerpt }} isTruncated="true">
              </Text>

            </Link>
            
          </Box>
          ))}
          
        </Flex>
      </Flex>
    </Layout>
    
  )
}; 

export const query = graphql`
  query wpPost {
    allWpPost {
      edges {
        node {
          title
          content
          id
          slug
          excerpt
        }
      }
    }
  }

`
