import React from 'react'; 
import { graphql, Link } from 'gatsby'; 
import Layout from '../../components/layout/Layout';
import { useToast, HStack, Heading, Text, Flex, Box, Button, useRadioGroup } from '@chakra-ui/react'; 
import RadioCard from '../../components/ui/RadioCard'; 
import { GatsbyImage } from 'gatsby-plugin-image'; 

export default function Product({ data }) {
  // isolate list of sizes 
  let sizes = data?.shopifyProduct?.variants?.map(variant => variant.title); 
  // needed for custom radio buttons used for sizes
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "M"
  })
  const group = getRootProps(); 
  // toast
  const toast = useToast(); 
  
  return (
    <Layout>
      <Flex w="full" direction={{ base: "column", lg: "row"}} justify="center" align={{base: "center", lg: "normal"}}>
        <Box w={{ base: "80%", lg: "50%"}} m={{base: "1", lg: "5"}} boxShadow="md" rounded="lg">
          <GatsbyImage 
            image={data.shopifyProduct.featuredImage.gatsbyImageData}
            alt={data.shopifyProduct.featuredImage.altText}
          />
        </Box>
        <Box m={{base: "1", lg: "5"}} w={{ base: "80%", lg: "50%"}}>
          <Heading as="h3" color="primary.800" my="2" fontSize="2xl">
            {data.shopifyProduct.title}
          </Heading>
          <Heading as="h3" color="gray.600" my="2" fontSize="xl">
            {data.shopifyProduct.priceRangeV2.maxVariantPrice.currencyCode} ${parseFloat(data.shopifyProduct.priceRangeV2.maxVariantPrice.amount).toFixed(2)}
          </Heading>
          <Text 
            fontSize="lg" 
            listStylePosition="inside"
            dangerouslySetInnerHTML={{ __html: data.shopifyProduct.descriptionHtml}}
          >  
          </Text>
          
          <HStack {...group} my={3}>
            {sizes.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
          
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            my={2}
            lineHeight="1"
            size="lg"
            onClick={() =>
              toast({
                title: "Sorry, friend!",
                description: "This is a fictional shop, you can't actually buy things",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top"
              })
            }
          >
            Add to Cart
          </Button>
        </Box>
        
      </Flex>
      <Text color="purple.800" fontSize="xl" my="3">
        <Link to="/shop">Shop Home</Link>
      </Text>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    shopifyProduct(id: {eq: $id}) {
      handle
      id
      descriptionHtml
      title
      featuredImage {
        gatsbyImageData
        id
        altText
      }
      images {
        gatsbyImageData
        id
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      variants {
        title
        productId
        availableForSale
        inventoryQuantity
      }
    }
  }
`