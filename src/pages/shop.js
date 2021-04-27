import React from 'react'; 
import Layout from '../components/layout/Layout'; 
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react'; 
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'; 

export default function Shop({ data }) {
  return ( 
    <Layout>
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
          audioC0RE Swag Shop
        </Heading>
        <SimpleGrid
          minChildWidth="300px"
          spacing="25px"
          w="full"
          justifyContent="space-around"
          justifyItems="center"
          p="1em"
        >
          {data.allShopifyProduct.edges.map(({node:product}) => (
            <Box 
              m="10px" 
              p="10px" 
              maxW="400px" 
              key={product.id} 
              boxShadow="md" 
              rounded="lg"
              _hover={{
                transform: "scale(1.05)"
              }}
            >
              <Link to={'/shop/' + product.handle}>
                <Box borderBottom="1px" borderColor="gray.200">
                  <GatsbyImage 
                    image={product.featuredImage.gatsbyImageData}
                    alt="alt text here"
                  />
                </Box>
                <Flex direction="column" p="2" color="primary.800">
                  <Text fontWeight="bold">
                    {product.title}
                  </Text>
                  <Text>
                    {product.priceRangeV2.maxVariantPrice.currencyCode} ${parseFloat(product.priceRangeV2.maxVariantPrice.amount).toFixed(2)}
                  </Text>
                </Flex>
              </Link>
              
            </Box>
          ))}
          
        </SimpleGrid>
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
        featuredImage {
          gatsbyImageData
          altText
          id
        }
        handle
      }
    }
  }
}

`
