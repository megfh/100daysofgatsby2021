import React from 'react'; 
import Layout from '../components/layout/Layout'; 
import Hero from "../components/sections/Hero";
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'; 
import { graphql, Link } from 'gatsby'

export default function HomePage({ data }) {
  return ( 
    <Layout>
      <Flex
        direction="column"
        m="1em"
        p="1em"
        align="center"
      >
        <Heading
          color="primary.800"
        >
          Shop
        </Heading>
        <Flex
          wrap="wrap"
          align="center"
          justify="space-evenly"
          p="1em"
        >
          {data.allShopifyProduct.edges.map(({node:product}) => (
            <Box m="10px" p="10px" grow="1" maxW="400px" key={product.id}>
            <Link to={'/shop/' + product.slug}>
              <Heading as="h4" size="lg" color="primary.800">
                {product.title}
              </Heading>
              <Text>
                {product.description}
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
query shopify {
  allShopifyProduct {
    edges {
      node {
        description
        title
        totalInventory
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}

`
