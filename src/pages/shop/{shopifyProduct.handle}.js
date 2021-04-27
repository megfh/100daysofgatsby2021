import React from 'react'; 
import { graphql, Link } from 'gatsby'; 
import Layout from '../../components/layout/Layout';
import { FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, HStack, Heading, Text, Flex, Box, Button, useRadioGroup } from '@chakra-ui/react'; 
import RadioCard from '../../components/ui/RadioCard'; 
import { GatsbyImage } from 'gatsby-plugin-image'; 

export default function Product({ data }) {
  console.log(data);
  let sizes = data?.shopifyProduct?.variants?.map(variant => variant.title); 
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "M"
  })
  const group = getRootProps()
  
  return (
    <Layout>
      <Flex border="1px" borderColor="red.500" w="full" direction={{ base: "column", lg: "row"}} justify="center" align={{base: "center", lg: "normal"}}>
        <Box w={{ base: "80%", lg: "50%"}} m="5" boxShadow="md" rounded="lg">
          <GatsbyImage 
            image={data.shopifyProduct.featuredImage.gatsbyImageData}
            alt="alt text here"
          />
        </Box>
        <Box m="5" border="1px" borderColor="blue.300" w={{ base: "80%", lg: "50%"}}>
          <Heading as="h3" color="primary.800" my="2" fontSize="2xl">
            {data.shopifyProduct.title}
          </Heading>
          <Heading as="h3" color="gray.600" my="2" fontSize="xl">
            {data.shopifyProduct.priceRangeV2.maxVariantPrice.currencyCode} ${parseFloat(data.shopifyProduct.priceRangeV2.maxVariantPrice.amount).toFixed(2)}
          </Heading>
          <Text fontSize="lg">{data.shopifyProduct.description}</Text>
          
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
            lineHeight="1"
            size="lg"
          >
            Add to Cart
          </Button>
        </Box>
        
      </Flex>
      <Text color="purple.800" fontSize="xl" m="5">
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
      description
      title
      featuredImage {
        gatsbyImageData
        id
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