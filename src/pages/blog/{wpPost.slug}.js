import React from 'react'; 
import { graphql, Link } from 'gatsby'; 
import Layout from '../../components/layout/Layout';
import { Heading, Text } from '@chakra-ui/react'

export default function City({ data }) {
  return (
    <Layout>
      <Heading 
        color="purple.800"
        mt={5}
        mx="2"
        textAlign="center"
      >
        {data.wpPost.title}
      </Heading>
      <Text>{data.wpPost.date}</Text> 
      <Text 
        dangerouslySetInnerHTML={{ __html: data.wpPost.content }} 
        fontSize="xl"
        my="5"
        mx="10"
        maxW="600px"
        listStylePosition="inside"
      />
      <Text color="purple.800" fontSize="xl" m="5">
        <Link to="/blog">Blog Home</Link>
      </Text>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    wpPost(id: {eq: $id}) {
      title
      date(formatString: "DD MMMM, YYYY")
      content
      slug
      id
    }
  }
`