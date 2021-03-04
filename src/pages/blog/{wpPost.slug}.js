import React from 'react'; 
import { graphql } from 'gatsby'; 
import Layout from '../../components/layout/Layout';
import { Heading, Text } from '@chakra-ui/react'

export default function City({ data }) {
  return (
    <Layout>
      <Heading>
      {data.wpPost.title}
      </Heading> 

      <Text dangerouslySetInnerHTML={{ __html: data.wpPost.content }} fontSize="xl"/>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String = "") {
    wpPost(id: {eq: $id}) {
      title
      content
      slug
      id
    }
  }
`